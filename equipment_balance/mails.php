<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'PHPMailer/Exception.php';
    require 'PHPMailer/PHPMailer.php';
    require 'PHPMailer/SMTP.php';

    //Variables del formulario
    $name     =   $_POST['cname'];  
    $email    =   $_POST['cemail'];
    $phone  =   $_POST['cphone'];
    $message  =   $_POST['cmessage'];

    //Create an instance; passing `true` enables exceptions
    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->SMTPDebug = 0;                     //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'mail.equipment-balance.com';                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = 'info@equipment-balance.com';                     //SMTP username
        $mail->Password   = 'Equipment2023*';                               //SMTP password
        $mail->SMTPSecure = 'ssl';            //Enable implicit TLS encryption
        $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        $mail->setFrom('info@equipment-balance.com');
        $mail->addAddress('jonathan.melendez@baakintegra.com');     //Add a recipient              //Name is optional

        //Contentprueba
        $mail->isHTML(true);   //Set email format to HTML
        $mail->CharSet = 'UTF-8';                               
        $mail->Subject = 'Información';
        $mail->Body    = 'Nombre: ' . $name . "<br>Correo: " . $email . "<br>Telefono: " . $phone . "<br>Mensaje: " . $message;
        
        $mail->send();
        echo 'Enviado';
    } catch (Exception $e) {
        echo "Mailer Error: {$mail->ErrorInfo}";
    }
?>