import React from 'react'
import { Link } from 'react-router-dom';

function PhpWinSetting() {
return (
<div>
  <div className="for-space" id='php-start'></div>
    <h1>PHP 8.4.10 setting in window</h1>
    <h3>설치하기</h3>
    <ol>
      <li>php.net에서 파일 다운로드: src 파일</li>
      <li>압축해제</li>
      <li>파일중 php.ini-developement를 php.ini로 변경</li>
      <li>window에 path 설정: php경로 (C:\php-8.4.10)를 path에 추가</li>
    </ol>

    <h3>posgres 설정(php.ini)</h3>
  <pre> extension=pgsql, extension=pdo_pgsql 를 uncomment</pre>
    <h3>Using pg_connect()</h3>
  <pre>{`<?php
$conn = pg_connect("host=localhost port=5432 
                  dbname=database user=your_user password=password");
if (!$conn) {
    die("Connection failed: " . pg_last_error());
}
echo "Connected successfully to PostgreSQL!";
pg_close($conn);
?>`}</pre>
    <h3>using PDO</h3>
  <pre>{`<?php
$dsn = "pgsql:host=localhost;port=5432;dbname=your_database";
$user = "your_user";
$password = "your_password";

try {
    $pdo = new PDO($dsn, $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully to PostgreSQL using PDO!";
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>`}</pre>
    <h5>Optional: Configure PostgreSQL Runtime Settings (php.ini):</h5>
    <ul>
      <li>pgsql.allow_persistent: Enable/disable persistent connections.</li>
      <li>pgsql.max_persistent: Maximum number of persistent connections.</li>
      <li>pgsql.max_links: Maximum total connections.</li>
      <li>pgsql.ignore_notice: Whether to ignore PostgreSQL backend notices.</li>
      <li>pgsql.log_notice: Whether to log PostgreSQL backend notices.</li>
    </ul>
  </div>
)
}

export default PhpWinSetting
