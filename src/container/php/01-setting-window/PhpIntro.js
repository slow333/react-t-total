import React from 'react'

function PhpIntro() {
return (
<div>
  <h1>PHP Intro</h1>
  <p>{`안녕하세요 <?php echo 'php에서 나오는 내용!!~~'; ?> `}</p>
  <h3>변수 사용</h3>
<pre>{`<?php
  $color = 'red';
  echo 'my favorit color '. $color .' 입니다.';
?>`}</pre>  
</div>
)
}

export default PhpIntro
