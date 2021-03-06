<?php
   use PHPMailer\PHPMailer\PHPMailer;
   use PHPMailer\PHPMailer\Exception;
   use PHPMailer\PHPMailer\SMTP;

   require 'modules/PHPMailer/src/Exception.php';
   require 'modules/PHPMailer/src/PHPMailer.php';
   require 'modules/PHPMailer/src/SMTP.php';

   $mail = new PHPMailer(true);

   $mail->IsSMTP();
	 $mail->Host = "smtp.gmail.com";
	 $mail->SMTPAuth = true;
 	 $mail->Username = 'ihousestudioofFurniture@gmail.com';
	 $mail->Password = 'asdTOWpo54,';
    $mail->SMTPSecure = 'ssl';
	 $mail->Port = 465;

   $mail->CharSet = 'UTF-8';
   $mail->setLanguage('ru', 'modules/phpmailer/language/');
   $mail->IsHTML(true);

   //от кого письмо
   $mail->setFrom('ihousestudioofFurniture@gmail.com', 'IHause');
   //кому отправить
   $mail->addAddress('ihousestudioofFurniture@gmail.com');
   //тема письма
   $mail->Subject = 'Письмо обратной связи';

   //тело письма
   $body = '<h1>Письмо от пользователя</h1>';

   //проверки на заполненность полей
   if(trim(!empty($_POST['product-name']))) {
    $body.='<p><strong>Заявка на продукт: </strong> '.$_POST['product-name'].'</p>';
    }
   if(trim(!empty($_POST['name']))) {
      $body.='<p><strong>Имя: </strong> '.$_POST['name'].'</p>';
   }
   if(trim(!empty($_POST['phone']))) {
    $body.='<p><strong>Phone: </strong> '.$_POST['phone'].'</p>';
   }
   $mail->Body = $body;

   //обработчик отправки
    if (!$mail->send()) {
       $message = 'Ошибка';
    } else {
       $message = 'Данные отправлены!';
    }

    $response = ['message' => $message];

   header('Content-type: application/json');
   echo json_encode($response);
?>