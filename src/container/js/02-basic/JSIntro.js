import React from 'react'

function JSIntro() {
  return (
    <div>
      <div className="for-space" id='js-intro'></div>
      <h1>JavaScript 란?</h1>
      <h3>정의</h3>
      <p>자바스크립트는 브라우저뿐만 아니라 서버에서도 실행 가능</p>
      <p>이 외에도 JavaScript engine이라 불리는 프로그램이 있으면 모두 동작</p>
      <ul>
        <li>chrome, opera : V8 engine</li>
        <li>firefox : SpiderMonkey</li>
        <li>Ms Edge: ChakraCore, Safari: SquirrelFixh</li>
      </ul>
      <h3>브라우저에서 할 수 없는 일</h3>
      <ul>
        <li>디스크에 저장된 파일을 읽거나, 쓰기(input을 통해 제한적으로 가능, 카메라/마이크는 사용자 승인 필요)</li>
        <li>브라우저 내의 탭과 창 간에 정보 공유 안됨
        <br/>Same Origin Policy : 도메인, 프로토콜, 포트가 다르면 페이지 접근 차단</li>
        <li></li>
      </ul>
      <h3>자바스크립트로 '트랜스파일’할 수 있는 언어는 많습니다. 각 언어마다 고유한 기능을 제공하죠. 자바스크립트에 숙달한 뒤에 이 언어들을 살펴볼 것을 추천드립니다.</h3>

      <h1>매뉴얼과 명세서 등</h1>
      <h3>명세서</h3>
      <p>ECMA-262명세서는 새로운 버전이 매년 나옵니다. 공식 버전이 나오기 이전의 최신 초안은 <a href="https://tc39.es/ecma262/">https://tc39.es/ecma262/</a>에서 확인할 수 있습니다.</p>

      <h3>메뉴얼</h3>
      <p>모질라 재단이 운영하는 MDN JavaScript Reference에 함수나 메서드에 정보를 제공</p>
      <p>링크 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference</a></p>
      <p>검색 방법 : https://google.com/search?q=MDN+parseInt </p>

      <h3>호환표</h3>
      <p>브라우저에서의 엔진에서 지원여부</p>
      <ul style={{marginBottom: '2rem'}}>
        <li>http://caniuse.com 에선 브라우저가 특정 기능을 지원하는지 (표 형태로) 확인할 수 있습니다. 암호화 관련 기능인 cryptography를 특정 브라우저에서 사용할 수 있는지 아닌지를 보려면 http://caniuse.com/#feat=cryptography를 확인하면 됩니다.</li>
        <li>https://kangax.github.io/compat-table 에선 자바스크립트 기능 목록이 있고, 해당 기능을 특정 엔진이 지원하는지 여부를 거대한 표를 통해 보여줍니다.</li>
      </ul>

    </div>
  )
}

export default JSIntro
