<?php
// Configurare conexiune la baza de date MySQL
// Modifică valorile de mai jos în funcție de mediul tău (XAMPP/WAMP etc.)

$db_host = 'localhost';
$db_name = 'joc_financiar';
$db_user = 'root';
$db_pass = '';

try {
    $dsn = "mysql:host=$db_host;dbname=$db_name;charset=utf8mb4";
    $pdo = new PDO($dsn, $db_user, $db_pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo "Eroare conexiune baza de date: " . htmlspecialchars($e->getMessage());
    exit;
}

