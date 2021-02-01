<?php
		$name=$_POST["name"];
		$mail=$_POST["mail"];

		$from='mail@mail.com';
		$to='mail@mail.com';
		$sub="Форма";
		$message="Name: $name\nMail: $mail";
		mail($to,$sub,$message,"Content-type:text/plain; charset = UTF-8\r\nFrom:$from")
?>