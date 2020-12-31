<?php
	header('Content-Type: text/html; charset=utf-8');
  set_time_limit(0);
  $handle = fopen("visitors_list.txt", "r");
  while (!feof($handle)) {
    $bufer = fgets($handle);
    $n=$n+1;
  }
  fclose($handle);
  var_dump($handle);
  if((strlen($_POST['email']) < 100) and (strlen($_POST['email']) > 5)) {
    $userData = "[" . $n  . "] " . date("d.m.y H:i") . " Почта: " . $_POST["email"] . "\n";
  }

  $fp = fopen("visitors_list.txt", "a");
  $writeFile = fwrite($fp, $userData);
  if ($writeFile) echo "true";
  else echo "false";
  fclose($fp);
?>