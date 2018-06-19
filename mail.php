<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $mailTO = "m.michna.official@gmail.com";
    $headers = "From: ".$emial;
    $text = "You have received a mail from" .$name."\n\n".$message;
    
    
    mail($mailTO, $text, $headers);
    header("Location: index.php?mailsend")
}