import React from 'react'

function DomAttribute() {
  let elem = document.querySelector("#elem")
  // console.log( elem.getAttribute('About') ); // (1) 'Elephant', 속성 읽기
  // elem.setAttribute('Test', 123); // (2) 속성 추가하기
  // console.log( elem.outerHTML ); // (3) 추가된 속성 확인하기
  // for (let attr of elem.attributes) { // (4) 속성 전체 나열하기
  //   console.log( `${attr.name} = ${attr.value}` );
  // }

  return (
    <div>
      <div className="for-space" id='dom-attribute'></div>
      <h1>속성과 프로퍼티</h1>
      <pre>{`<body id="page" DOM에서 body.id = "page">`}</pre>

      <h3>DOM property</h3>
    <pre>{`document.body.sayTagName = function() {
  alert(this.tagName);
};
document.body.sayTagName(); // BODY (sayTagName의 'this'엔 document.body가 저장됩니다.)`}</pre>
      <h4>비표준 프로퍼티는 전환되지 않음</h4>
      <h4>비표준 프로퍼티 사용하기(대소문자 구분 없음)</h4>
      <h5>elem.hasAttribute(name)</h5>
      <h5>elem.getAttribute(name)</h5>
      <h5>elem.setAttribute(name, value)</h5>
      <h5>elem.removeAttribute(name)</h5>
  <pre>{`<div id="elem" about="Element">
  console.log( elem.getAttribute('About') ); // (1) 'Elephant', 속성 읽기
  elem.setAttribute('Test', 123); // (2) 속성 추가하기
  console.log( elem.outerHTML ); // (3) 추가된 속성 확인하기
  for (let attr of elem.attributes) { // (4) 속성 전체 나열하기
    console.log( {attr.name} = {attr.value} );
  }`}</pre>
<div id="elem" about="Elephant"></div>

      <h3>DOM 프로퍼티 값의 타입</h3>
      <h4>Attribute는 HTML의 값 자체를 가지고 오나 DOM 프로퍼티는 나름의 타입이 있음</h4>
    <pre>{`<input id="input" type="checkbox" checked />
  input.getAttribute('checked'); // 빈 문자열
  input.type; // true
  input.getAttribute('style'); // color:red;font-size:120%
  input.style; // [object CSSStyleDeclaration]
  input.style.colro; // red`} </pre>
    <pre>{`<a id='a' href="#hello">link </a>
  a.getAttribute('href'); // #hello
  a.href; // http://127.0.0.0/page#hello`} </pre>
      <h4>data-*; data-user-data; </h4>
      <h5>사용: elem.dataset.userData; 로 사용 가능</h5>
    <pre>{`<div data-widget-name="menu">choose the genre</div>
  let elem = document.querySelector("[data-widget-name]");
  elem.dataset.widgetName;
  elem.getAttribute("data-widget-name") `}</pre>

      <h3>Etc...</h3>
    <pre>{`let links = document.querySelectorAll('a');
  for (let link of links) {
    let href = link.getAttribute('href');
    if (!href) continue; // 속성이 존재하지 않음
    if (!href.includes('://')) continue; // 프로토콜이 존재하지 않음
    if (href.startsWith('http://internal.com')) continue; // 내부 링크
    link.style.color = 'orange';</pre>
    <pre>let selector = 'a[href*="://"]:not([href^="http://internal.com"])';
  let links = document.querySelectorAll(selector);  
  links.forEach(link => link.style.color = 'orange');`}</pre>
    </div>
  )
}

export default DomAttribute
