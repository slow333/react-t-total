import React from 'react'

function DomSearch() {
  return (
    <div>
      <div className="for-space" id='dom-search'></div>
      <h1>DOM 탐색하기</h1>
      <h3>DOM 노드 관계도</h3>
      <pre>{`
                          document;
                              ↑
                   document.documentElement; // HTML
                              ↑
                      document.body; // HTML
--------------------------------------------------
                    parentNode/parentElement
                              ↑
previousSibling         <-- <DIV> --->  nextSibling
/previousElementSibling               / nextElementSibling
                      ↓               ↓
              firstElementChild  lastElementChild`}</pre>

      <h3>childNodes, firstChild, lastChild</h3>
      <h4>children 은 요소 노드만 출력</h4>
  <pre>f{`or (let elem of document.body.children) {
  alert(elem); // DIV, UL, DIV, SCRIPT
}`}</pre>
      <h4>childNodes 컬렉션은 텍스트 노드를 포함한 모든 자식 노드를 담고 있음.</h4>
      <h4>유사배열로 Array.from으로 변환해야 array method 사용 가능</h4>
      <h4>DOM 컬렉션은 읽는 것만 가능합니다.</h4>
      <h4>elem.childNodes를 참조하고 있는 도중에 DOM에 새로운 노드가 추가되거나 삭제되면,
          변경사항이 컬렉션에도 자동으로 반영</h4>
      <h4>컬렉션에 for..in 반복문을 사용하지 마세요</h4>
  <pre>{`for (let i = 0; i < document.body.childNodes.length; i++) {
  alert( document.body.childNodes[i] ); // Text, DIV, Text, UL, ... , SCRIPT
}
for (let node of document.body.childNodes) {
  alert( node ); // Text, DIV, Text, UL, ... , SCRIPT
} `} </pre>
  <pre>Array.from(document.body.childNodes).filter </pre>

      <h3>table 탐색</h3>
    <pre>{`let td = table.rows[0].cells[1];
td.style.backgroundColor = "red"; // 강조`}</pre>
      <h4>대각선 셀 구분하기</h4>
    <pre>{`let table = document.getElementsByTagName("table");
for (let i = 0; i < table.rows.length; i++) {
  let row = table.rows[i];
  row.cells[i].style.backgroundColor = 'red';
}`}</pre>


      <h2>getElement*, querySelector*</h2>

      <h3>querySelectorAll{`('ul > li:last-child')`};</h3>
      <h4>css 선택자를 검색에서 활용 가능</h4>
      <h5>querySelectorAll에는 :hover나 :active 같은 CSS 선택자의 가상 클래스(pseudo-class)도
        사용할 수 있습니다. document.querySelectorAll(':hover')을 사용하면 마우스 포인터가
        위에 있는(hover 상태인) 요소 모두를 담은 컬렉션이 반환됩니다.</h5>
      <h5>이때 컬렉션은 DOM 트리 최상단에 위치한 {`<html>`}부터 가장 하단의 요소 순으로 채워집니다.</h5>

      <h3>matches</h3>
      <h4>이 메서드는 요소 elem이 주어진 CSS 선택자와 일치하는지 여부를 판단해줍니다.
      일치한다면 true, 아니라면 false를 반환</h4>
    <pre>{`<a href="http://example.com/file.zip">...</a>
<a href="http://ya.ru">...</a>
for (let elem of document.body.children) {
  if (elem.matches('a[href$="zip"]')) {
    alert("주어진 CSS 선택자와 일치하는 요소: " + elem.href );
  }
}`}</pre>

      <h3>closest</h3>
      <h4>elem.closest(css)는 elem 자신을 포함하여 CSS선택자와 일치하는 가장 가까운 조상요소</h4>

      <h3>getElementsBy*</h3>
      <h4>'s'를 절대 빠트리지 마세요!, 요소 하나가 아닌, 컬렉션을 반환합니다!</h4>
      <h5>document.getElementsByTagName('input')[0].value = 5;</h5>
      <h5>document.getElementsByTagName('div');</h5>
      <h5>document.getElementsByName('my-form'); // 프로퍼티 name을 검색</h5>
      <h4>반면, querySelectorAll은 정적인 컬렉션을 반환합니다.
      컬렉션이 한 번 확정되면 더는 늘어나지 않습니다.</h4>

      <h3>Samples</h3>
    <pre>{`// 1. id="age-table"인 테이블
let table = document.getElementById('age-table')

// 2. 테이블 내의 label 요소 모두
table.getElementsByTagName('label') // 또는
document.querySelectorAll('#age-table label')

// 3. 테이블 내의 첫 번째 td(Age가 적힌 곳)
table.rows[0].cells[0] // 또는
table.getElementsByTagName('td')[0] // 또는
table.querySelector('td')

// 4. name="search"인 form
// name이 "search"인 요소는 문서에 단 하나뿐이라고 가정합시다.
let form = document.getElementsByName('search')[0]
// from을 정확히 지정해 줄 수도 있습니다.
document.querySelector('form[name="search"]')

// 5. 폼의 첫 번째 input
form.getElementsByTagName('input')[0] // 또는
form.querySelector('input')

// 6. 폼의 마지막 input
let inputs = form.querySelectorAll('input') // 모든 input 요소를 찾교
inputs[inputs.length-1] // 마지막 요소를 얻어냅니다.`}</pre>
    </div>
  )
}

export default DomSearch
