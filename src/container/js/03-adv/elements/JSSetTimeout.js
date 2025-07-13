import React from "react";

function JSSetTimeout() {
  function printNumbers(from, to) {
    let current = from;
    setTimeout(function print() {
      console.log(current);
      if (current < to) {
        setTimeout(print, 1000);
        current++;
      }
    }, 1000);
  }
  // printNumbers(0, 6);
  function printNumbers2(from, to) {
    let current = from;
    let intervalId = setInterval(function print() {
      console.log(current);
      if (current === to) {
        clearInterval(intervalId);
      }
      current++;
    }, 1000);
  }
  printNumbers2(0, 6);

  return (
    <div>
      <div className="for-space" id='js-setTimeout'></div>
      <h1>setTimeout, setInterval</h1>

      <h3>setTimeout</h3>
      <pre>{`function sayHi(who, phrase) {
  alert( who + ' 님, ' + phrase );
}
setTimeout(sayHi, 1000, "홍길동", "안녕하세요."); // 홍길동 님, 안녕하세요.`}</pre>
      <h4>함수를 호출하면 안되고 함수 이름만 적어야함</h4>
      <h4>clearTimeout</h4>
      <pre>{`let timerId = setTimeout(() => alert("아무런 일도 일어나지 않습니다."), 1000);
alert(timerId); // 타이머 식별자

clearTimeout(timerId);
alert(timerId); // 위 타이머 식별자와 동일함 (취소 후에도 식별자의 값은 null이 되지 않습니다.)`}</pre>

      <h3>setInterval</h3>
      <pre>{`// 2초 간격으로 메시지를 보여줌
let timerId = setInterval(() => alert('째깍'), 2000);

// 5초 후에 정지
setTimeout(() => { clearInterval(timerId); alert('정지'); }, 5000);`}</pre>

      <h3>중첩 setTimeout</h3>
      <pre>{`let timerId = setTimeout(function tick() {
  alert('째깍');
  timerId = setTimeout(tick, 2000); // (*)
}, 2000);`}</pre>
      <pre>{`let delay = 5000;

let timerId = setTimeout(function request() {
  ...요청 보내기...
  if (서버 과부하로 인한 요청 실패) {
    // 요청 간격을 늘립니다.
    delay *= 2;
  }
  timerId = setTimeout(request, delay);
}, delay);`}</pre>
      <h3>대기 시간이 0인 setTimeout</h3>
      <pre>
        {`setTimeout(() => alert("World")); alert("Hello"); --> "Hello World"가
        출력됨`}
      </pre>
    </div>
  );
}

export default JSSetTimeout;
