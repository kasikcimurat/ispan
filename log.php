<?php
$isim = $_POST["isim"] ?? "Bilinmeyen";
$tarih = date("d.m.Y H:i:s");

$satir = "Ad: $isim | Tarih: $tarih\n";

file_put_contents("girisLog.txt", $satir, FILE_APPEND);
?>