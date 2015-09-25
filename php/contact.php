<?php
	$from = $_POST['from'];
	$url = "kronosville.net/contact.html";
	
	$mail = mail("TODO_ENTER_EMAIL_HERE","$url - $from","Message sent with $url from $from :\n".$_POST['message'], "From: total.barack.obama@kronosville.net");
	
	if($mail == FALSE) {
		echo $mail;
	} else {
		echo true;
	}
?>