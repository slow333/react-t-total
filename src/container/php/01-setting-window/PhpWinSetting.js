
function PhpWinSetting() {
return (
<div>
  <div className="for-space" id='php-start'></div>
    <h1>PHP 8.4.10 setting in window</h1>
    <h3>php 설치하기</h3>
    <ol>
      <li>php.net에서 파일 다운로드: src 파일</li>
      <li>압축해제</li>
      <li>파일중 php.ini-developement를 php.ini로 변경</li>
      <li>window 시스템환경변수 - path 설정: php경로 (C:\php-8.4.10)를 path에 추가</li>
      <li>project folder 생성 : info.php 
        <pre>{`<?php phpinfo(); `}</pre>
      </li>
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

    <h3>nginx 설치하기</h3>
    <ol>
      <li>nginx.org에서 window zip 파일 다운로드 후 압축 풀기</li>
      <li>nginx 폴더에서 nginx.conf 수정
  <pre>{` # 서버 관련 설정
server {
  location / {
      root   c:/nginx/html; # 위치를 지정
      index  index.php index.html index.htm; # index.php 추가
  }
  // php 설정 관련 내용 지정(코멘트 해제)
  location ~ \.php$ {
#    root           html;
    root           c:/nginx/html;
    fastcgi_pass   127.0.0.1:9000;
    fastcgi_index  index.php;
#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
    fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
    include        fastcgi_params;
  }
}`} </pre> 
      </li>
      <li>nginx foler에서 : start nginx</li>
      <li>nginx foler에서 : ./nginx -s stop
  <pre>{`nginx: [error] CreateFile() "C:\nginx/logs/nginx.pid" failed 
  (2: The system cannot find the file specified)
  이 애러는 log 파일 위치가 정확하지 않아서 발생
#access_log  logs\access.log  main; 위치를 지정 필요
access_log  c:/nginx/logs/access.log;  `}</pre></li>
    </ol>
    <h3>php, php-cgi, nginx 실행 설정하기</h3>
    <ol>
      <li>기본적으로 php-cgi는 실해되지 않음
        <pre>start php-cgi -b localhost:9000  해야함</pre>
      </li>
      <li>위 3개 batch 파일로 생성 : \nginx\stat.bat
  <pre>{`@echo off
echo Starting Nginx, PHP-FPM and Psql...
start "" "C:\\nginx\\nginx.exe"
start "" "C:\\php-8.4.10\\php-cgi.exe" -b localhost:9000

pause`}</pre>
      </li>
      <li>: \nginx\stop.bat
  <pre>{`@echo off
echo Stop Nginx, PHP-FPM and Psql...
taskkill /F /IM nginx.exe
taskkill /F /IM php-cgi.exe

echo All service stopped.
pause`}</pre>
      </li>
      <li>실행은 powershell에서 해야 먹음: bash shell에서는 안됨</li>
    </ol>
    <h3>db 설치</h3>
    <h5>여기서는 postgre로 실행(기존에 설치된 것 활용)</h5>
  </div>
)
}

export default PhpWinSetting
