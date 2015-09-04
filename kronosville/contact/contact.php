<?php
	$from = $_POST['from'];
	
	$mail = mail("kronosville@gmail.com","kronosville.net/contact.html - ".$from,"Message sent with kronosville.net/contact.html from ".$from.
	" :\n".$_POST['message'], "From: total.barack.obama@kronosville.net");
	
	if($mail == FALSE) {
		echo $mail;
	} else {
		echo true;
	}
?>