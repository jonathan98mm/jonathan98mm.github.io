<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'PHPMailer/Exception.php';
    require 'PHPMailer/PHPMailer.php';
    require 'PHPMailer/SMTP.php';

    //Variables del formulario
    $name     =   $_POST['Nombre'];  
    $email    =   $_POST['Email'];
    $subject  =   $_POST['Asunto'];
    $message  =   $_POST['Mensaje'];

    //Create an instance; passing `true` enables exceptions
    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->SMTPDebug = 0;                     //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'mail.baakintegra.com';                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = 'jonathan.melendez@baakintegra.com';                     //SMTP username
        $mail->Password   = 'Jonathan+22';                               //SMTP password
        $mail->SMTPSecure = 'ssl';            //Enable implicit TLS encryption
        $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        $mail->setFrom('jonathan.melendez@baakintegra.com');
        $mail->addAddress('info@baakintegra.com');     //Add a recipient              //Name is optional

        //Contentprueba
        $mail->isHTML(true);   //Set email format to HTML
        $mail->CharSet = 'UTF-8';                               
        $mail->Subject = $subject;
        $mail->Body    = 'Nombre: ' . $name . "<br>Correo: " . $email . "<br>Mensaje: " . $message;
        
        $mail->send();
        echo 'Enviado';
    } catch (Exception $e) {
        echo "Mailer Error: {$mail->ErrorInfo}";
    }
?>