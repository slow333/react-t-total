import React from 'react'

function JSMiddle() {
  const unique = (arr) =>Array.from(new Set(arr));

  let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O" ];

  const aclean = (array) => {
    let map = new Map();
    for (let value of array) {
      let key = value.toLowerCase().split('').sort().join('');
      map.set(key, value);
    }
    return Array.from(map.values());
  }
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  const sumSalaries = (salaries) => {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
      sum += salary;
    }
    return sum;
  }
  let user = {
    name: 'John',
    age: 30
  };

  const count = (user) => Object.keys(user).length;

  const topSalary = (obj) => {
    let top = 0;
    let name = null;
    for (let [key, value] of Object.entries(obj)) {
      if(top < value) {
        top = value;
        name = key;
      }
    }
    return name;
  }
  let date = new Date(2012, 0, 3);  // 2012년 1월 3일
  const getWeekDay = (date) => {
    let day = date.getUTCDay();
    let week = [ 'MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU' ];
    return week[day];
  }

  return (
    <div>
      <div className="for-space" id='js-middle'></div>
      <h1>iterable 객체</h1>
      <h3>iterable 객체는 for...of를 사용가능</h3>
      <h4>일반 객체에 for...of를 적용하기 위해서는 Symbol.iterator라는 매서드를 추가해야함</h4>
      <pre>{`let range = {
      from: 1,
      to: 5,
      [Symbol.iterator]() {
        this.current = this.from;
        return this;
      },
      next() {
        if (this.current <= this.to) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
    for (let num of range) {
      alert(num); // 1, then 2, 3, 4, 5
    }`}</pre>
      <h4>유사배열은 lengtn, index가 있으나 for...of는 사용 불가</h4>
      <h3>Array.from</h3>
      <p>Array.from을 통해서 이터러블니아 유사배열을 받아 진짜 array를 만들어줍니다.</p>
      <h3>Array.from(obj[, mapFn, thisArg])</h3>
      <pre>let arr = Array.from(range, num => num * num);</pre>
      <pre>{`let str = '💢💢💥💤';
    let chars = Array.from(str);
    console.log(chars[1], chars[0], chars.length);
    let chars = [];
    for(let char of chars) { chars.push(char); }
    str.slice(1,3);// 쓰레깃값 출력(영역이 다른 특수 값);
    function customSlice(str, start, end) {
      return Array.from(str).slice(start, end).join('');
    }
    customSlice(str, 1,3);`}</pre>


      <h1>map and set</h1>
      <h3>객체 : 키가 있는 컬렉션을 저장</h3>
      <h3>배열 : 순서가 있는 컬렉션을 저장</h3>

      <h2>map</h2>
      <h4>map은 키가 있는 데이터를 저장한다는 점에서 객체와 유사하지만, 맵의 키는 다양한 자료형을 허용</h4>
      <h4>let map = new Map(); map.set(key, value); map.get(key); </h4>
      <h4>map.has(key); map.delete(key); map.clear(); map.size; </h4>
      <pre>{`let map = new Map();
map.set('1', 'str1');   // 문자형 키
map.set(1, 'num1');     // 숫자형 키
map.set(true, 'bool1'); // 불린형 키

// 객체는 키를 문자형으로 변환한다는 걸 기억하고 계신가요?
// 맵은 키의 타입을 변환시키지 않고 그대로 유지합니다. 따라서 아래의 코드는 출력되는 값이 다릅니다.
map.get(1); // 'num1'   map.get('1'); // 'str1'
alert( map.size ); // 3
map.set('1', 'str1') //chaining 가능
  .set(1, 'num1')
  .set(true, 'bool1');  `}  </pre>

    <h3>map 요소에 반복 작업하기</h3>
    <ul>
      <li><code>map.keys()</code> – 각 요소의 키를 모은 반복 가능한(iterable, 이터러블) 객체를 반환합니다.</li>
      <li><code>map.values()</code> – 각 요소의 값을 모은 이터러블 객체를 반환합니다.</li>
      <li><code>map.entries()</code> –  요소의 <code>[키, 값]</code>을 한 쌍으로 하는 이터러블 객체를 반환합니다.
        이 이터러블 객체는 <code>for..of</code>반복문의 기초로 쓰입니다.</li>
    </ul>
    <pre>{`let recipeMap = new Map([
  ['cucumber', 500],  ['tomatoes', 350],  ['onion',    50]
]);
// 키(vegetable)를 대상으로 순회합니다.
for (let vegetable of recipeMap.keys()) {
  alert(vegetable); // cucumber, tomatoes, onion
}
// 값(amount)을 대상으로 순회합니다.
for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}
// [키, 값] 쌍을 대상으로 순회합니다.
for (let entry of recipeMap) { // recipeMap.entries()와 동일합니다.
  alert(entry); // cucumber,500 ...
}`}</pre>
    <h3>맵은 삽입 순서를 기억</h3>
    <h3>맵은 배열과 유사하게 forEach도 지원</h3>
    <pre>{`recipeMap.forEach( (value, key, map) => {
  alert(   ); // cucumber: 500 ...
});`}</pre>

    <h3>Object.entries; object를 map으로 변경</h3>
    <pre>let map = new Map(Object.entries(obj));</pre>
    <h3>Object.fromEntries; map을 객체로 변경</h3>
    <pre>{`let obj = Object.fromEntries(map.entries()); // .entries()를 생략 가능
let prices = Object.fromEntries([ ['banana', 1],  ['orange', 2],  ['meat', 4] ]);
// now prices = { banana: 1, orange: 2, meat: 4 }
alert(prices.orange); // 2`}</pre>
    <h3>Object.keys(obj); Object.values(obj);</h3>

    <h2>SET</h2>
    <p>set은 중복을 허용하지 않음. 키가 없음</p>
    <h3>new Set(iterable); set.add(value); set.delete(value); </h3>
    <h3>set.has(value);  set.clear(); set.size;</h3>
    <pre>{`let set = new Set(["oranges", "apples", "bananas"]);
for (let value of set) alert(value);
// forEach를 사용해도 동일하게 동작합니다.
set.forEach((value, valueAgain, set) => {
  alert(value);
});`}</pre>
    <p>forEach에 쓰인 콜백 함수는 세 개의 인수를 받는데, 첫 번째는 값, 두 번째도 같은 값인
      valueAgain을 받고 있습니다. 세 번째는 목표하는 객체(셋)이고요. 동일한 값이 인수에 두 번 등장하고 있습니다.
      이렇게 구현된 이유는 맵과의 호환성 때문입니다. </p>
    <ul>
      <li>set.key(); set내의 모든 값을 포함하는 이터러블 객체를 반환</li>
      <li>set.values(); map과의 호환성 때문에</li>
      <li>set.entries(); 셋 내의 각 값을 이용해 만든 [value, value] 배열을 포함하는 이터러블 객체를 반환합니다. 맵과의 호환성을 위해 만들어졌습니다.</li>
    </ul>

      
    <h1>Object.keys, values, entries</h1>
    <h4>사용 가능한 자료구조: Map, Set, Array</h4>
    <h4>배열을 반환: Object.entries(obj) => [key, value] 배열을 반환</h4>
    <h3>사용법</h3>
    <pre>{`             map             object
호출문법:   map.key()        Object.keys(obj)
반환 값:    iterable 객체    진짜 배열</pre>
let user = { name: "John", age: 30 };
Object.keys(user) = ["name", "age"]
Object.values(user) = ["John", 30]
Object.entries(user) = [ ["name","John"], ["age",30] ]
for(let value of Object.values(obj) { ... }`}</pre>

    <h3>객체 변환하기</h3>
    <pre>{`Object.entries(obj) => 
    .map(([key, value]) => 
      [key, value *2]) => 
        wrap Object.fromEntries`}</pre>



    <h1>구조 분해 할당: destructuring assignment</h1>

      <h3>배열 분해하기</h3>
      <p>배열의 요소를 직접 변수에 할당하는 것보다 코드 양이 줄어든다는 점만 다릅니다.</p>
    <pre>{`let arr = ['bora', 'net'];
let [firstName, lastName] = arr;
let [one, two] = 'bora net'.split(' ');
// 두 번째 요소는 필요하지 않음
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

//할당 연산자 우측엔 모든 이터러블이 올수 있음.
let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);
//할당 연산자 좌측엔 모든 올수 있음.
let user = {};
[user.name, user.surname] = "Bora Lee".split(' ');`}</pre>
      <h3>.entries()로 반복하기</h3>
<pre>{`let user = { name: "John", age: 30 };

// 객체의 키와 값 순회하기
for (let [key, value] of Object.entries(user)) {
  alert(key  value); // name:John, age:30이 차례대로 출력
}
let user = new Map();
user.set("name", "John");
user.set("age", "30");

for (let [key, value] of user) {
  alert( key   value); // name:John, then age:30
}`}</pre>
    <h4>변수 교환: [one, two] = [two, one]</h4>
    <h4>... ; let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];</h4>
    <h4>기본값; let [name = "Guest", surname = "Anonymous"] = ["Julius"];</h4>

    <h3>객체 분해하기</h3>
    <pre>{`let options = { title: "Menu", width: 100, height: 200 };
let {title, width, height} = options; // options의 key와 같아야함, 순서 무시
// { 객체 프로퍼티: 목표 변수 }
let {width: w, height: h, title} = options;
let {width = 100, height = 200, title} = options;
alert(title);  // Menu
alert(width);  // 100
alert(height); // 200`}</pre>
    <pre>{`let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

// 코드를 여러 줄에 걸쳐 작성해 의도하는 바를 명확히 드러냄
let {
  size: { // size는 여기,
    width,
    height
  },
  items: [item1, item2], // items는 여기에 할당함
  title = "Menu" // 분해하려는 객체에 title 프로퍼티가 없으므로 기본값을 사용함
} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
alert(item1);  // Cake
alert(item2);  // Donut`}</pre>
    <pre>{`let options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

function showMenu({
  title = "Untitled",
  width: w = 100,  // width는 w에,
  height: h = 200, // height는 h에,
  items: [item1, item2] // items의 첫 번째 요소는 item1에, 두 번째 요소는 item2에 할당함
}) {
  alert( 백틱안 변수 title  w   h   ); // My Menu 100 200
  alert( item1 ); // Item1
  alert( item2 ); // Item2
}

showMenu(options);
showMenu({}); // 모든 인수에 기본값이 할당됩니다.
showMenu(); // 에러가 발생할 수 있습니다.`}</pre>

        <h1>Date 객체와 날짜</h1>
        <h3>객체 생성하기</h3>
        <h4>new Date(milliseconds)</h4>
        <pre>{`// 1970년 1월 1일 0시 0분 0초(UTC+0)를 나타내는 객체
    let Jan01_1970 = new Date(0);
    alert( Jan01_1970 );

    // 1970년 1월 1일의 24시간 후는 1970년 1월 2일(UTC+0)임
    let Jan02_1970 = new Date(24 * 3600 * 1000);
    alert( Jan02_1970 );
    // 31 Dec 1969
    let Dec31_1969 = new Date(-24 * 3600 * 1000);
    alert( Dec31_1969 );
    let date = new Date("2017-01-26");
    alert(date);
    // 인수로 시간은 지정하지 않았기 때문에 GMT 자정이라고 가정하고
    // 코드가 실행되는 시간대(timezone)에 따라 출력 문자열이 바뀝니다`}</pre>
        <h4>new Date(year, month, date, hours, minutes, seconds, ms)</h4>
        <pre>{`new Date(2011, 0, 1, 0, 0, 0, 0); // 2011년 1월 1일, 00시 00분 00초
    new Date(2011, 0, 1); // hours를 비롯한 인수는 기본값이 0이므로 위와 동일`}</pre>
        <h5>getFullYear() : 연도(네 자릿수)를 반환합니다.</h5>
        <h5>getMonth() ;   월을 반환합니다(0 이상 11 이하).</h5>
        <h5>getDate() ; 일을 반환합니다(1 이상 31 이하). 어! 그런데 메서드 이름이 뭔가 이상하네요.</h5>
        <h5>getHours(), getMinutes(), getSeconds(), getMilliseconds()</h5>
        <h5>getDay(); 일요일을 나타내는 0부터 토요일을 나타내는 6까지의 숫자 중 하나를 반환</h5>
        <h5>getTime(); 주어진 일시와 1970년 1월 1일 00시 00분 00초 사이의 간격(밀리초 단위)인 타임스탬프를 반환</h5>
        <h5>getTimezoneOffset(); 현지 시간과 표준 시간의 차이(분)를 반환</h5>
        <pre>{`setFullYear(year, [month], [date])
    setMonth(month, [date])
    setDate(date)
    setHours(hour, [min], [sec], [ms])
    setMinutes(min, [sec], [ms])
    setSeconds(sec, [ms])
    setMilliseconds(ms)
    setTime(milliseconds) (1970년 1월 1일 00:00:00 UTC부터 밀리초 이후를 나타내는 날짜를 설정)`}</pre>

        <h3>자동 고침</h3>
        <pre>{`let date = new Date(2013, 0, 32); // 2013년 1월 32일은 없습니다.
  alert(date); // 2013년 2월 1일이 출력됩니다.
  let date = new Date(2016, 1, 28);
  date.setDate(date.getDate() + 2);
  alert( date ); // 2016년 3월 1일
  let date = new Date();
  date.setSeconds(date.getSeconds() + 70);
  alert( date ); // 70초 후의 날짜가 출력됩니다.`}</pre>
      <pre>{`let date = new Date(2016, 0, 2); // 2016년 1월 2일
  date.setDate(1); // 1일로 변경합니다.
  alert( date ); // 01 Jan 2016
  date.setDate(0); // 일의 최솟값은 1이므로 0을 입력하면 전 달의 마지막 날을 설정한 것과 같은 효과를 봅니다.
  alert( date ); // 31 Dec 2015`}</pre>

        <h3>Date.now(); </h3>
        <p>Date.now()는 new Date().getTime()과 의미론적으로 동일하지만 중간에 Date 객체를 만들지 않는다는 점이 다릅니다.</p>
        <pre>{`let start = Date.now(); // 1970년 1월 1일부터 현재까지의 밀리초
  // 원하는 작업을 수행
  for (let i = 0; i < 100000; i++) { let doSomething = i * i * i;}
  let end = Date.now(); // done
  alert( 반복문을 모두 도는데 end - start  밀리초가 걸렸습니다. ); // Date 객체가 아닌 숫자끼리 차감함`}</pre>

        <h3>Date.parse</h3>
        <p>문자열의 형식은 YYYY-MM-DDTHH:mm:ss.sssZ처럼 생겨야 합니다.</p>
        <ul style={{listStyle: 'circle'}}>
          <li>YYYY-MM-DD – 날짜(연-월-일), YYYY-MM, YYYY 같이 더 짧은 문자열 형식도 가능</li>
          <li>"T" – 구분 기호로 쓰임</li>
          <li>HH:mm:ss.sss – 시:분:초.밀리초</li>
          <li>'Z'(옵션) – +-hh:mm 형식의 시간대를 나타냄. Z 한 글자인 경우엔 UTC+0을 나타냄</li>
        </ul>
        <pre>{`let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
    alert(ms); // 1327611110417  (타임스탬프)
    let date = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );
    alert(date);`}</pre>

      <h3>이전 날짜, 마지막날 구하기</h3>
      <pre>{`function getDateAgo(date, number) {
    date.setDate(date.getDate() - number);
    return date.getDate();
  }

  function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }`}</pre>



    <h1>JSON과 메서드</h1>
    <h3>JSON.stringify</h3>
    <pre>{`let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};
let json = JSON.stringify(student);

alert(typeof json); // 문자열이네요!
alert(json);
/* JSON으로 인코딩된 객체:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "wife": null
}
*/`}</pre>
    <h3>함수(메서드), 심볼형(키가 심볼인 프로퍼티), 값이 undefined인 프로퍼티는 무시됨</h3>
    <pre>{`let user = {
  sayHi() { // 무시
    alert("Hello");
  },
  [Symbol("id")]: 123, // 무시
  something: undefined // 무시
};

alert( JSON.stringify(user) ); // {} (빈 객체가 출력됨)`}</pre>
    <h3>replacer</h3>
    <pre>let json = JSON.stringify(value, [replacer, space])</pre>

    <h3>JSON.parse</h3>
    <pre>let value = JSON.parse(str, [reviver]);</pre>
    <h3>JSON 실수하는 것</h3>
    <pre>{`let json = 백틱 {
  name: "John",        // 실수 1: 프로퍼티 이름을 큰따옴표로 감싸지 않았습니다.
  "surname": 'Smith',  // 실수 2: 프로퍼티 값은 큰따옴표로 감싸야 하는데, 작은따옴표로 감쌌습니다.
  'isAdmin': false    // 실수 3: 프로퍼티 키는 큰따옴표로 감싸야 하는데, 작은따옴표로 감쌌습니다.
  "birthday": new Date(2000, 2, 3),
      // 실수 4: "new"를 사용할 수 없습니다. 순수한 값(bare value)만 사용할 수 있습니다.
  "friends": [0,1,2,3]              // 이 프로퍼티는 괜찮습니다.
} 백틱;`}</pre>
    <h3>reviver 사용하기</h3>
    <pre>{`let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str);
alert( meetup.date.getDate() ); // 에러!

let meetup = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});`}</pre>

    </div>
  )
}

export default JSMiddle
