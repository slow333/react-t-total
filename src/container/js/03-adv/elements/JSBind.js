import React from "react";

function JSBind() {
  function partial(func, ...argsBound) {
    return function (...args) {
      return func.call(this, ...argsBound, ...args);
    };
  }
  let user = {
    firstName: "John",
    say(time, phrase) {
      console.log(`[${time}] ${this.firstName}: ${phrase}!`);
    },
  };
  // 시간을 고정한 부분 메서드를 추가함
  user.sayNow = partial(
    user.say,
    new Date().getHours() + ":" + new Date().getMinutes()
  );
  user.sayNow("Hello");
  let user2 = {
    firstName: "John",
    sayHi(ok) {
      console.log(`${ok}, ${this.firstName}!`);
    },
  };
  let sayHi = user2.sayHi;
  sayHi.call(user2, "Hiiii");

  return (
    <div>
      <div className="for-space" id='js-bind'></div>
      <h1>bind</h1>

      <h3>binding 하기</h3>
      <h4>func.bind(func); this를 func로 지정함</h4>
      <h4>사라진 'this'</h4>
      <pre>{`let user = {
  firstName: "John",
  sayHi() { alert(this.firstName);  }
};
setTimeout(user.sayHi, 1000); // Hello, undefined!`}</pre>
      <h4>해결책 1; 랩퍼</h4>
      <pre>{`let user = {
  firstName: "John",
  sayHi() { alert(Hello, {this.firstName});  }
};
setTimeout(function() ( user.sayHi()), 1000);
또는 setTimeout(() => ( user.sayHi()), 1000); `}</pre>
      <h4>방법 2: bind</h4>
      <pre>{`let user = {
  firstName: "John",
  sayHi() { alert(Hello, this.firstName);  }
};
let sayHi = user.sayHi.bind(user);
// let sayHi = uer.sayHI; sayHi.call(user);
say("Hello"); // Hello, John (인수 "Hello"가 say로 전달되었습니다.)
say("Bye"); // Bye, John ("Bye"가 say로 전달되었습니다.)
setTimeout(sayHi, 1000);`}</pre>

      <h3>컨텍스트 없는 부분 적용</h3>
      <h4>좀 혼란 스러움...</h4>
      <pre>
        {`function partial(func, ...argsBound) {
  return function(...args) { // (*)
    return func.call(this, ...argsBound, ...args);
  }
}
// 사용법:
let user = {
  firstName: "John",
  say(time, phrase) {
    console.log(time this.firstName phrase);
  }
};
// 시간을 고정한 부분 메서드를 추가함
user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());
user.sayNow("Hello");
// 출력값 예시:
// [10:00] John: Hello!`}
      </pre>
    </div>
  );
}

export default JSBind;
