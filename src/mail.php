<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$json = file_get_contents('php://input');
$data = json_decode($json);

if ($data && isset($data->name) && isset($data->email) && isset($data->message)) {
    $to = "info@reconditionareautocare.ro";
    $subject = "Websitesi İletişim Formu: " . $data->subject;
    
    $body = "Yeni bir iletisim formu mesaji aldiniz.\n\n";
    $body .= "Gönderen: " . $data->name . "\n";
    $body .= "E-posta: " . $data->email . "\n";
    $body .= "Konu: " . $data->subject . "\n\n";
    $body .= "Mesaj:\n" . $data->message . "\n";
    
    $headers = "From: info@reconditionareautocare.ro\r\n";
    $headers .= "Reply-To: " . strip_tags($data->email) . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["status" => "success"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Sunucu maili gönderemedi."]);
    }
} else {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Gecersiz veri."]);
}
?>