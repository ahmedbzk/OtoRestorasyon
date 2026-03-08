<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

$json = file_get_contents('php://input'); // JSON verisini oku
$data = json_decode($json);

if ($data) {
    $to = "ahmedbozkurt959@gmail.com";
    $subject = "Form: " . $data->subject;
    $body = "Gönderen: " . $data->name . "\nEmail: " . $data->email . "\nMesaj: " . $data->message;
    $headers = "From: info@alanadin.com";

    // NOT: Localhost'ta mail() fonksiyonu çalışmaz, gerçek sunucu gerekir.
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["status" => "success"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Sunucu maili gönderemedi."]);
    }
}
?>