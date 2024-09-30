<?php
$raw = file_get_contents('php://input');
$data = json_decode($raw); 

if (isset($data->url)) {
    $url = $data->url;
    $html = file_get_contents($url); // URLのHTMLを取得
    if ($html === false) {
        http_response_code(500);
        echo json_encode(['error' => 'URLの取得に失敗しました。']);
        exit;
    }

    // HTMLをJSON形式で返す
    echo json_encode(['html' => $html]);
} else {
    http_response_code(400);
    echo json_encode(['error' => 'URLが提供されていません。']);
}
