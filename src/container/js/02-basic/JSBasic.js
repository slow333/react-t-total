import React from 'react'

function JSBasic() {
  let str = 'As sly as a fox, as strong as an ox';
  let pos = 0;
  let target = 'as';
  while (true) {
    let foundPos = str.indexOf(target, pos);
    if (foundPos === -1) break;

    // console.log(`found ${foundPos}`);
    pos = foundPos +1;
  }
  return (
    <div>
      <div className="for-space" id='js-basic'></div>
      <h1>기본 사항</h1>
      <h4>엄격 모드</h4>
      <p>코드 상단에 "use strict" 하면 ES5의 변경 사항을 활성화함</p>
      <h4>코드를 클래스와 모듈을 사용해 구성한다면 "use strict"를 생략해도 됩니다.</h4>

      <h4>변수 명명시 좋은 규칙</h4>
      <ul>
        <li>userName 이나 shoppingCart처럼 사람이 읽을 수 있는 이름</li>
        <li>무엇을 하고 있는지 명확히 알고 있지 않을 경우 외에는 줄임말이나 a, b, c와 같은 짧은 이름은 피하세요</li>
        <li>최대한 서술적이고 간결하게 명명해 주세요. data와 value는 나쁜 이름의 예시</li>
      </ul>

      <h4>주석 달기</h4>
      <pre>{`
      /**
      * x를 n번 곱한 수를 반환함
      *
      * @param {number} x 거듭제곱할 숫자
      * @param {number} n 곱할 횟수, 반드시 자연수여야 함
      * @return {number} x의 n 거듭제곱을 반환함
      */
      function pow(x, n) {   ...  }`} </pre>

      <h4>바벨(Babel)은 트랜스파일러(transpiler)로,모던 자바스크립트 코드를 구 표준을 준수하는 코드로 바꿔줍니다.</h4>
      
      <h1>자료형</h1>
      <h4>숫자형</h4>
      <p>범위 : -(2<sup>53</sup>-1) ~ 2<sup>53</sup>-1</p>
      <p>특수형 : Infinity, -Infinity, NaN</p>

      <h4>BigInt</h4>
      <p>끝에 n을 붙임 : const bigInt = 1234567890123456789012345678901234567890n;
      </p>
      <p>Firefox, Chrome, Edge, Safari에서만 BigInt를 지원</p>

      <h4>문자형</h4>
      <p>char 형은 없음</p>

      <h4>불린형 : true, false</h4>

      <h4>'null' 값</h4>
      <p>null 값은 오로지 null 값만 포함하는 별도의 자료형</p>
      <p>존재하지 않는, 비어 있는, 알 수 없는</p>

      <h4>undefined</h4>
      <p>값이 할당되지 않은 상태</p>

      <h4>객체와 심볼</h4>
      <p>symbol 형은 객체의 고유한 식별자를 만들 때 사용</p>

      <h4>typeof : 객체의 자료형</h4>
      <p>내장객체는 자료형이 "object" 임</p>
      <p>함수의 자료형은 function 임</p>

      <h4>alert, prompt</h4>
      <pre>let result = prompt(title, [default])</pre>
      <h4>confirm</h4>
      <p>true, false를 반환함</p>

      <h1>객체</h1>
      <p>자바스크립트는 원시값(문자열, 숫자 등)을 마치 객체처럼 다룰 수 있게 해줍니다. 원시값에도 객체에서처럼 메서드를 호출할 수 있죠. 원시값은 객체가 아니란 것을 상기하도록 합시다.</p>
      <ul>
      <li>원시값 : string, number, bigint, boolean, symbol, null, undefined 형으로 총 일곱 가지</li>
      <li>객체:{`{name : "John", age : 30}`}와 같이 중괄호 {}를 사용해 만들 수 있습니다. 자바스크립트에는 여러 종류의 객체가 있는데, 함수도 객체의 일종</li>
        <li>객체의 장점 중 하나는 함수를 프로퍼티로 저장할 수 있다는 것입니다.</li>
      </ul>
        <h4>원시값을 객체처럼 사용하기</h4>
        <h4>원시값에서 매서드를 호출하면 래퍼 객체를 생성하여 매서드를 호출한 후에 래퍼 객체를 삭제함</h4>
        <pre>{`let zero = new Number(0); // 객체를 반환함, 하위호환성을 위해 남겨둠. 사용안함
if(zero) ; // wrapper 객체가 호출되어 true를 반환함`}</pre>
        <h4>let num = Number('123'); // 이렇게하면 값 자체를 반환함</h4>

        <p>객체는 몇 가지 특수한 기능을 가진 associative array</p>
        <p>지울 때 delete obj.prop</p>
        <p>다양한 객체가 있음: Array, Date, Error, ...</p>

        <h4>계산된 프로퍼티</h4>
    <pre>{`let fruit = prompt("과일 이름은 ?","banana");
let buyItems = { [fruit] : 5, }
// 또는
let buyItem = {}; buyItem[fruit + "computer"] = 5; `}</pre>
        <h4>단축 프로퍼티</h4>
    <pre>{`function makeUser(name, age){
  return { name: name, age: age }; 
  // OR return { name, age, job:"Programmer", ... }
}
let user = makeUser("John", 25);
"age" in user; // true`}</pre>
      <h5>key에 숫자를 적용하면 자동으로 문자로 형변환됨</h5>
      <h5>for...in ; 객체에 대해 key를 순회할 때 사용</h5>
      <h5>for...in에서 정수 key에 대해서는 숫자 순서대로 출력되고, 다른 건 입력 순서대로 출력</h5>

      <h4>객체 복사</h4>
      <h4>Object.assign({}, obj);</h4>
      <h4>깊은 복사,deep cloning를 하기 위해서는 다른 방식을 사용해야한다.</h4>

      <input type="text" id="input" />
        <div id="result"></div>
        <div id="tree"></div>


      <h1>형변환</h1>
      <h4>문자형 변환 :String(value); num + '';</h4>
      <p>""로 더하기 하면 문자료 변환됨</p>
      <h4>숫자로 변환 : Number('239');</h4>
      <p>빼기, 나누기, 곱하기 하면 자동으로 숫자로 변환됨; 애러나면 NaN을 반환함 </p>
      <pre>Number("   123   "); // 123  ,  Number("123z"); // NaN<br/>
    Number(true); // 1  Number(false); // 0</pre>
      <pre>{`"" + 1 + 0 = "10" // "" - 1 + 0 = -1 // 빼기는 숫자료 변환
  true + false = 1 // 숫자로
  6 / "3" = 2
  "2" * "3" = 6
  4 + 5 + "px" = "9px"
  "$" + 4 + 5 = "$45"
  "4" - 2 = 2
  "4px" - 2 = NaN
  7 / 0 = Infinity
  "  -9  " + 5 = "  -9  5" // (3)
  "  -9  " - 5 = -14 // (4)
  null + 1 = 1 // (5)
  undefined + 1 = NaN // (6)
  " \t \n" - 2 = -2 // (7)`}</pre>
      <p>6: undefined는 숫자형으로 변환하면 NaN이됨</p>
      <p>7:문자열이 숫자형으로 변할 땐 문자열 앞뒤의 공백이 삭제됩니다.
        뺄셈 연산자 앞의 피연산자는 공백을 만드는 문자 \t와 \n, 그 사이의 “일반적인” 공백으로 구성됩니다.
        <br/> 따라서 " \t \n"는 숫자형으로 변환 시 길이가 0인 문자열로 취급되어 숫자 0이 됩니다.</p>

      <h4>boolean</h4>
      <h4>0, null, undefined, NaN, ""  // false</h4>

      <h4>비교 연산자 형변환</h4>
      <p>비교하려는 자료형이 다르면 숫자형으로 바꿈</p>
      <pre>{`'2' > 1 ; // true    '01' == 1; // true`}</pre>
      <pre>{`let a = 0;  alert( Boolean(a) ); // false
  let b = "0";  alert( Boolean(b) ); // true
  alert(a == b); // true!`}</pre>
      <pre>0 == false; //true, '' == false; //true<br/>
    0 === false; // false</pre>
      <pre>null === undefined; //false, null == undefined; true</pre>

      <h4>nullish 연산자 : ??</h4>
      <h4>??를 사용하면 값이 할당된 변수를 빠르게 찾을 수 있음</h4>
      <h4>height = height ?? 100; // height가 undefined 또는 null 이면 100을 할당</h4>
      <h4>height가 0이면 0이 할당됨. </h4>


      <h4>string indexOf; str.indexOf('id', 2); 2부터 찾음</h4>
      <h4>str : includes, startsWith, endsWith ; 불린 반환</h4>
      <p>비교적 근래에 나온 메서드인 str.includes(substr, pos)는 str에 부분 문자열 substr이
        있는지에 따라 true나 false를 반환합니다.</p>
      <h4>문자열 추출: str.slice(start[,end]); // start 부터 end까지(end미포함), 음수가능</h4>
      <h4>문자열 추출: str.substring(2, 4); // 2, 4 사이 3, 음수는 0</h4>
      <h4>문자열 추출: str.substr(-2, 4); // -2부터 4개</h4>

      <h4>str.codePointAt(value); value위치의 문자에 대한 코드를 반환</h4>
      <h4>str.fromCodePoint(value); value에 대한 문자를 반환</h4>
      <pre>// 90을 16진수로 변환하면 5a입니다.<br/>
  alert( '\u005a' ); // Z</pre>

      <h4>문자열 비교: str.localeCompare(str2);</h4>
      <h4>서로게이트 쌍</h4>
      <h4>서로게이트 쌍을 사용해 인코딩한 기호의 길이는 2입니다.</h4>
      <pre>alert( '𝒳'.length ); // 2, 수학에서 쓰이는 대문자 X(그리스 문자 카이)<br/>
  alert( '😂'.length ); // 2, 웃으면서 눈물 흘리는 얼굴을 나타내는 이모티콘<br/>
  alert( '𩷶'.length ); // 2, 사용 빈도가 낮은 중국어(상형문자)</pre>
      <pre>alert( '𝒳'[0] ); // 이상한 기호가 출력됨<br/>
  alert( '𝒳'[1] ); // 서로게이트 쌍의 일부가 출력됨</pre>


    <h1>Array</h1>
      <h3>push, pop, shift, unshift</h3>
      <h4>arr.shift(); 맴앞에 것을 삭제하고 나머지를 반환</h4>
      <h4>arr.unshift(value); value를 앞에 삽입</h4>
      <h4>참조 복사하면(arr = copied) 두개가 다 같이 변경됨, 참조만 복사항</h4>
      <h4>for...of; 값을 반환해주는 반복문</h4>

      <h3>Array.isArray</h3>
      <h4>typeof {}; typeof []; // 둘다 객체임</h4>
      <h4>Array.isArray({}); false, Array.isArray([]); true</h4>

      <h3>thisArg</h3>
      <pre>{`let army = {
    minAge: 18,  maxAge: 27,
    canJoin(user) {
      return user.age >= this.minAge && user.age < this.maxAge;
    }
  };
  let users = [  {age: 16},  {age: 20},  {age: 23},  {age: 30} ];
  // army.canJoin 호출 시 참을 반환해주는 user를 찾음
  let soldiers = users.filter(army.canJoin, army);
  alert(soldiers.length); // 2
  alert(soldiers[0].age); // 20
  alert(soldiers[1].age); // 23`}</pre>

      <h3>arr.map(fn); 함수 호출 결과를 배열로 반환해줌</h3>
      <pre>{`let result = arr.map(function(item, index, array) {
    // 요소 대신 새로운 값을 반환합니다.
  });
  let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
  alert(lengths); // 5,7,6`}</pre>
      <h3>arr.sort(fn), arr.reverse(fn)</h3>
      <pre>{`numbersArray.sort((a, b) => a - b);
  countriesArray.sort((a,b) => a.localeCompare(b));`}</pre>

      <h3>split, join</h3>
      <pre>{`let names = 'Bilbo, Gandalf, Nazgul';
  let arr = names.split(', ');
  for (let name of arr) {
    alert( 에게 보내는 메시지 ); // Bilbo에게 보내는 메시지
  }
  let str = "test";
  alert( str.split('') ); // t,e,s,t 
  let arr = ['Bilbo', 'Gandalf', 'Nazgul'];
  let str = arr.join(';'); // 배열 요소 모두를 ;를 사용해 하나의 문자열로 합칩니다.
  alert( str ); // Bilbo;Gandalf;Nazgul`}</pre>

      <h3>reduce, reduceRight</h3>
      <h4>reduce와 reduceRight는 배열을 기반으로 값 하나를 도출할 때 사용됩니다.</h4>
      <pre>{`let value = arr.reduce(function(accumulator, item, index, array) {
    // ...
  }, [initial]);
      let arr = [1, 2, 3, 4, 5];
  let result = arr.reduce((sum, current) => sum + current, 0);
  alert(result); // 15`}</pre>

      <h3>arr.splice(index[,deleteCount, 추가1, 추가2,...]); //원본 변경</h3>
      <h4>delete arr[1]; //인덱스1을 삭제하지만 크기(length)는 유지됨</h4>
      <pre>  arr.splice(1,2); 인덱스 1부터 2개을 제거<br/>
    arr.splic(1,2,"one","two");인덱스 1부터 2개을 제거하고 one, two를 추가<br/>
    arr.splic(1,0,"one","two");인덱스 1위치에 one, two를 추가</pre>

      <h3>arr.slice([start], [end]); 복사한 새로운 배열을 반환</h3>
      <pre>let arr = ["t", "e", "s", "t"];<br/>
    arr.slice(1, 3); // e,s (인덱스가 1인 요소부터 인덱스가 3인 요소까지를 복사(인덱스가 3인 요소는 제외))<br/>
    arr.slice(-2); // s,t (인덱스가 -2인 요소부터 제일 끝 요소까지를 복사) </pre>

      <h3>arr.concat(arg1, arg2, ...); 새로운 배열을 반환</h3>
      <pre>let arr = [1, 2];<br/>
  // arr의 요소 모두와 [3,4]의 요소 모두를 한데 모은 <em>새로운 배열</em>이 만들어집니다.<br/>
  arr.concat([3, 4]); // 1,2,3,4<br/>
  // arr의 요소 모두와 [3,4]의 요소 모두, [5,6]의 요소 모두를 모은 새로운 배열이 만들어집니다.<br/>
  arr.concat([3, 4], [5, 6]); // 1,2,3,4,5,6<br/>
  // arr의 요소 모두와 [3,4]의 요소 모두, 5와 6을 한데 모은 새로운 배열이 만들어집니다.<br/>
  arr.concat([3, 4], 5, 6); // 1,2,3,4,5,6</pre>

      <h3>indexOf(value), lastIndexOf(value); value의 index값을 반환 includes</h3>
      <h3>includes(value); value 포함 여부, true/false</h3>

      <h3>객체를 이루어진 배열에서 검색: arr.find(fn), arr.findIndex(fn)</h3>
      <pre>{`let result = arr.find(function(item, index, array) {
    // true가 반환되면 반복이 멈추고 해당 요소를 반환합니다.
    // 조건에 해당하는 요소가 없으면 undefined를 반환합니다.
  });`}</pre>
    <pre>{`let users = [ {id: 1, name: "John"}, {id: 2, name: "Pete"}, {id: 3, name: "Mary"} ];
  let user = users.find(item => item.id == 1);
  alert(user.name); // John`}</pre>
      <h3>조건에 맞는 것 모두 찾기: arr.filter(fn)</h3>
      <pre>{`let results = arr.filter(function(item, index, array) {
    // 조건을 충족하는 요소는 results에 순차적으로 더해집니다.
    // 조건을 충족하는 요소가 하나도 없으면 빈 배열이 반환됩니다.
  });`}</pre>
      <pre>{`let someUsers = users.filter(item => item.id < 3);
  alert(someUsers.length); // 2`}</pre>

      <h3>ex Calculator</h3>
      <pre>{`function Calculator() {
    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
    this.calculate = function(str) {
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
      if (!this.methods[op] || isNaN(a) || isNaN(b)) { return NaN; }
      return this.methods[op](a, b);
    };

    this.addMethod = function(name, func) { this.methods[name] = func; };
  }`}</pre>
      <h4>객체를 반환하기...; () 사용 필요</h4>
      <pre>{`let usersMapped = users.map(user => {
    fullName: 백틱 $ user.name,
    id: user.id
  });`}</pre>
      <h4>중괄호를 만나면 자바스크립트는 이를 객체의 시작이라 인식하지 않고 함수 본문이 시작되는 것이라 인식합니다. 소괄호를 사용하면 이를 피할 수 있습니다.</h4>
      <pre>{`let usersMapped = users.map(user => ({
    fullName: ...,
    id: user.id
  }));`}</pre>
      <h4>중복 내용 찾아서 없에기</h4>
      <pre>{`function unique(arr) {
    let result = [];
    for (let str of arr) {
      if (!result.includes(str)) { result.push(str);  }
    }
    return result;
  }

  let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
  alert( unique(strings) ); // Hare, Krishna, :-O`}</pre>
    </div>
  )
}

export default JSBasic