<?php
$to      = 'm.michna.official@gmail.com';
$name    = $_POST['name'];
$email   = $_POST['email'];
$message = $_POST['message'];
$subject = 'Email z portfolio od' . $name;
$headers = 'From:' $email . "\r\n";
$headers .= "Content-Type: text/html; charset=utf-8\r\n";

mail($to, $subject, $message, $headers);
?>