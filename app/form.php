<?php
$post = (!empty($_POST)) ? true : false;
if($post) {
	$phone = htmlspecialchars(trim($_POST['phone']));
	$email = htmlspecialchars(trim($_POST['email']));
	$error = '';
	if(!$phone) {$error .= 'Ваш телефон. ';}
	if(!$email) {$error .= 'Укажите электронную почту. ';}
	if(!$error) {
		$address = "dmn.mk.ua@gmail.com";
		$mes = "Почта: ".$email."\n\nТелефон: ".$phone."\n\n";
		$send = mail ($address,"Content-type:text/plain; charset = UTF-8\r\nReply-To:$email\r\nFrom:$phone <contact>");
		if($send) {echo 'OK';}
	}
	else {echo '<div class="err">'.$error.'</div>';}
}
?>
