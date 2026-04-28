<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Metodă invalidă']);
    exit;
}

require __DIR__ . '/db_config.php';

$data = json_decode(file_get_contents('php://input'), true);

$username = isset($data['username']) ? trim($data['username']) : '';
$scor_final = isset($data['scor_final']) ? (int)$data['scor_final'] : 0;
$luni_supravietuite = isset($data['luni_supravietuite']) ? (int)$data['luni_supravietuite'] : 0;

if ($username === '' || $scor_final < 0 || $luni_supravietuite < 0) {
    echo json_encode(['success' => false, 'message' => 'Date invalide']);
    exit;
}

try {
    // Caută sau creează utilizatorul
    $stmt = $pdo->prepare("SELECT id FROM users WHERE username = :u LIMIT 1");
    $stmt->execute([':u' => $username]);
    $user = $stmt->fetch();

    if ($user) {
        $userId = $user['id'];
    } else {
        $stmt = $pdo->prepare("INSERT INTO users (username) VALUES (:u)");
        $stmt->execute([':u' => $username]);
        $userId = (int)$pdo->lastInsertId();
    }

    // Inserează scorul în leaderboard
    $stmt = $pdo->prepare("INSERT INTO leaderboard (user_id, scor_final, luni_supravietuite, data_jocului)
                           VALUES (:uid, :scor, :luni, NOW())");
    $stmt->execute([
        ':uid' => $userId,
        ':scor' => $scor_final,
        ':luni' => $luni_supravietuite,
    ]);

    echo json_encode(['success' => true]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Eroare server']);
}

