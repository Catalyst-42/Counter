<?php 
if (file_exists('counter.txt'))
  $count = file_get_contents('counter.txt');
else
  $count = 1;

$word = 'раз';
if ($count % 10 > 1 && $count % 10 < 5 && ($count % 100 < 12 || $count % 100 > 15))
  $word = 'раза';

echo <<< END
<!DOCTYPE html>
<html lang="ru"><head>
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <meta charset="UTF-8">

  <link rel="icon" type="image/png" href="./favicon.ico">
  <link rel="apple-touch-icon" type="image/png" href="./favicon.ico">

  <link rel="stylesheet" href="style.css">
  <title>Counter</title>
</head>
<body>
  <div>
    <p class="main" style="margin-top: 40vh;">
      Эту страницу просмотрели $count $word
    </p>
  </div>

  <input class="menu-button" type="checkbox" id="button" hidden>
  <div class="menu">
    <label for="button" style="cursor: pointer;"><span style="color: #2C3E50; font-size: x-large;">&lt;</span> <span style="color: #ABB2B9">goto: </span></label>
    <input style="width: 3em;" type="text" maxlength="5" value="$count" id="counter">
  </div>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="script.js" count="$count"></script>
</body>
END;

date_default_timezone_set('Europe/Moscow');
file_put_contents('counter.txt', ++$count);
file_put_contents('counter_log.txt', date('Y-m-d h:i:s' . PHP_EOL, time()), FILE_APPEND);
?>
