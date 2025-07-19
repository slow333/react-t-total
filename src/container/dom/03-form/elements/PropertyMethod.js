import React from 'react'

function PropertyMethod() {
  return (
    <div>
      <div className="for-space" id='dom-property-method'></div>
      <h1>form property and method</h1>
      <h4>input과 같이 폼 조작에 사용되는 요소에는 특별한 프로퍼티와 이벤트가 많음</h4>

      <h3>폼과 요소 탐색하기</h3>
      <h4>폼은 특수한 컬렉션인 <code>document.forms</code>의 구성원</h4>
      <h4>document.forms는 이름과 순서가 있는 기명 컬렉션</h4>
      <h5>let form = document.forms.myForm;// 이름이 'myForm' 인 폼</h5>
      <h5>form.name 또는 form[index] 또는 form.elements.name 로 개별 요소에 접근 가능</h5>
      <p>form[1] === form.two === elems.two === elems[1]; </p>
      <p>form[2] === elems.age[0]) === form.age[0]) === elems.age[0]</p>
      <h5>역으로 element.form으로 역참조 가능</h5>
      <p>form[1].form === form.age.form === form.age[0].form === elems.age[0].form</p>
<pre>{`form: name="myForm" <form action="" name="myForm">
one:<input type="text" name="one" value="1"/>(name:one)
two:<input type="text" name="two" value="2"/>(name:two)
age:<input type="radio" name="age" value="20" max="99" min="0"/>(name:age)
age:<input type="radio" name="age" value="30"/>(name:age)</form>
let form = document.forms.myForm;
let elems = form.elements; // OR form.name 으로 직접 가능`}</pre>
  
    <h3>폼 요소</h3>
    <h4>input과 textarea</h4>
    <h5>input.value(string), input.checked(boolean)를 통해 값을 얻을 수 있음</h5>
    <h4>select(option)</h4>
    <h5>select.options : option 하위요소를 담고 있는 컬렉션</h5>
    <h5>select.value : 현재 선택된 option 값</h5>
    <h5>select.selectedIndex : 현재 선택된 option의 번호(인덱스)</h5>
    <h5>값 선택 방법</h5>
    <p>조건에 맞는 option 하위요소를 찾아 option.selected를 true로 설정</p>
    <p>select.value를 원하는 값으로 설정</p>
    <p>select.selectedIndex를 원하는 option 번호로 설정</p>
    <p>multiple 속성을 추가하면 여러개 선택 가능</p>
<pre>{`<select id="select" multiple>
  <option value="apple">Apple</option>
  <option value="banana">Banana</option>
  <option value="kiwi">Kiwi</option>
  <option value="orange">Orange</option>
</select>
//아래 3개의 결과는 같음
select.options[1].selected = true;
select.selectedIndex = 1;
select.value = "banana";
// 선택한 전체 값
select.value = "kiwi";
let selected = Array.from(select.options)
  .filter(item => item.selected)
  .map(item => item.value);
console.log(selected);
//option 추가 및 선택
let option = <option value='pear'>Pear&lt;/option>;
select.insertAdjacentHTML("beforeend", option);
select.options[select.options.length -1].selected = true;`}</pre>
    </div>
  )
}

export default PropertyMethod
