import React from 'react'

function JSAsyncIntro() {
  class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  async function loadJson(url) {
    let response =await fetch(url);
    if(response.status === 200) {
      return response.json();
    } else {
      throw new HttpError(response);
    }
  }
  // loadJson('no-such-user.json').then(json => console.log(json)).catch(console.log); // Error: 404

  // 유효한 사용자를 찾을 때까지 반복해서 username을 물어봄
  function demoGithubUser() {
    let name = "slow333";
    // let name = prompt("GitHub username을 입력하세요.", "slow33");

    return loadJson(`https://api.github.com/users/${name}`)
      .then(user => {
        console.log(`이름: ${user.name}.`);
        return user;
      })
      .catch(err => {
        if (err instanceof HttpError && err.response.status === 404) {
          console.log("일치하는 사용자가 없습니다. 다시 입력해 주세요.");
          return demoGithubUser();
        } else {
          throw err;
        }
      });
  }

  demoGithubUser();

  return (
    <div>
      <div className="for-space" id='js-async'></div>
      <h1>JS Async </h1>

      <h2>JS Asyncronous 이벤트 처리기</h2>
      <h3>이벤트 처리기</h3>
      <p>방금 들은 비동기 함수에 대한 설명으로 여러분은 이벤트 처리기를 떠올릴 수 있습니다. 만약 떠올랐다면 맞습니다. 이벤트 처리기는 실제로 비동기 프로그래밍의 한 형태입니다. 이벤트가 발생할 때마다 호출되는 함수(이벤트 처리기)를 제공하는 것으로 말이죠. "이벤트"가 "비동기 작업 완료"인 경우, 이 이벤트를 사용하여 호출자에게 비동기 함수 호출의 결과를 알릴 수 있습니다.</p>
      <p>일부 초기 비동기 API는 이러한 이벤트 방식을 사용했습니다. XMLHttpRequest 는 JavaScript를 사용하여 원격 서버에 HTTP 요청을 할 수 있는 API입니다. HTTP 요청은 시간이 걸릴 수 있는 작업이라 비동기 API이며 이벤트 수신기를 XMLHttpRequest 객체에 연결해 요청의 진행 상태 및 최종 완료에 대한 알림을 받습니다.</p>
      <p>다음 예제에서는 이를 실제로 보여 줍니다. "Click to start request"를 클릭하여 요청을 보내보세요. 새로운 XMLHttpRequest를 생성하고 이것의 loadend 이벤트를 수신합니다. 처리기는 상태 코드와 함께 "Finished!" 메시지를 기록합니다.</p>
      <p>이벤트 수신기를 추가한 후 요청을 보냅니다. 이때 요청이 시작된 이후 "Started XHR request"를 기록할 수 있는데, 이는 요청이 진행되는 동안 프로그램이 계속 실행되고 있음을 뜻하며 요청이 완료될 때 이벤트 처리기가 호출됩니다</p>

    <pre>{`const log = document.querySelector(".event-log");
document.querySelector("#xhr").addEventListener("click", function() {
  log.textContent = "";
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",);
  xhr.send();
  xhr.onloadend = function () {
    log.textContent = {log.textContent} Finished with status {xhr.status};
  }
  log.textContent = 백틱 {log.textContent} Started XHR request \n;
});

document.querySelector("#reload").addEventListener("click", function() {
  log.textContent = "";
  document.location.reload();
});`}  </pre>
      <p>이전에 접한 이벤트 처리기와 유사하지만, 이벤트가 버튼 클릭과 같은 사용자 행동이 아닌 어떤 객체의 상태 변화라는 점이 다릅니다.</p>


      <h2>콜백</h2>
      <p>이벤트 핸들러는 콜백의 특정 유형입니다. 콜백은 그냥 적절한 시점에 호출될 것으로 예상하여 다른 함수로 전달되는 함수입니다. 방금 살펴본 것처럼 콜백은 JavaScript에서 비동기 함수를 구현하는 주요 방식이었습니다.<br/>
      그러나 콜백 기반 코드는 콜백이 콜백을 가지는 함수를 호출하는 경우 이해하기 어려울 수 있습니다. 이것은 일련의 비동기 함수로 분해되는 작업을 수행해야 하는 일반적인 상황입니다. 예를 들어, 다음을 한번 보겠습니다.</p>

      <p>
      콜백 내부에서 콜백을 호출하기 때문에 깊게 중첩된 doOperation() 함수가 생깁니다. 이 함수는 읽고 디버깅하기 훨씬 어렵습니다. 이것은 때때로 "콜백 지옥(callback hell)" 또는 "파라미드 오브 둠(pyramid of doom)"이라고 불립니다. (왜냐하면 들여 써진 부분이 옆에서 봤을 때 피라미드처럼 보이거든요.)
      </p>
      <p>이렇게 콜백을 중첩하면 오류 처리도 매우 어려워질 수 있습니다. 상위 레벨에서 한 번만 오류를 처리하는 대신 "피라미드"의 각 레벨에서 오류를 처리해야 하는 경우가 많습니다.</p>
      <p>이러한 이유로 대부분의 최신 비동기 API는 콜백을 사용하지 않습니다. 대신 JavaScript에서 비동기 프로그래밍의 토대는 다음에 소개할 Promise 입니다</p>

      <h2>JS Asyncronous Basic</h2>
        <p>비동기 프로그래밍은 프로그램이 잠재적으로 오래 실행되는 작업을 시작하고 해당 작업이 실행되는 동안 다른 이벤트에 응답할 수 있는 기술로, 해당 작업이 완료될 때까지 기다릴 필요가 없습니다. 해당 작업이 완료되면 프로그램에 결과가 표시됩니다. </p>
        <p> 브라우저에서 제공하는 많은 기능, 특히 가장 흥미로운 기능은 잠재적으로 오랜 시간이 걸릴 수 있으므로 비동기적입니다. 예를 들어:</p>
        <ul>
          <li>HTTP 요청을 사용하여 만들기 : fetch()</li>
          <li>사용자의 카메라 또는 마이크에 액세스하기 : getUserMedia()</li>
          <li>사용자에게 파일을 선택하도록 요청 : showOpenFilePicker()</li>
        </ul>
        <p><i>비동기 함수를 직접 구현할 필요는 없더라도 올바르게 사용해야 할 수 있어야합니다.</i></p>

        <h3>동기 프로그래밍</h3>
      <pre>{`const name = "Miriam";
  const greeting = 백틱 Hello, my name is {name}!;
  console.log(greeting);`}</pre>
      <p>브라우저가 효과적으로 프로그램을 한 번에 한 줄씩, 우리가 쓴 순서대로 단계별로 실행한다는 점에 유의해야 합니다.
        각 지점에서 브라우저는 다음 줄로 넘어가기 전에 줄이 작업을 마칠 때까지 기다립니다.
        이렇게 해야 하는 이유는 각 줄이 이전 줄에서 수행된 작업에 따라 달라지기 때문입니다. </p>
        <p> 이것은 동기적 프로그램 이다 . 우리가 다음과 같이 별도의 함수를 호출하더라도 여전히 동기적일 것이다.</p>
  <pre>{`function makeGreeting(name) {
  return 백틱 Hello, my name is {name}
}
const name = "Bp Group";
const greeting = makeGreeting(name);`}  </pre>
      <p>makeGreeting()은 동기 함수입니다.
        왜냐하면 호출자는 함수의 작업이 완료될 때까지 기다렸다가 값을 반환해야 계속 진행할 수 있기 때문입니다.</p>

      <h3>시간이 오래 걸리는 동기 함수</h3>
      <p>동기함수에 시간이 오래 걸리면 어떨까요.</p>
      <p>아래 프로그램은 매우 비효율적인 알고리즘을 사용하여 "Generate primes" 버튼을 클릭할 때 여러 개의 큰 소수를 생성합니다.
        사용자가 입력하는 숫자가 커질수록 작업 시간도 더 오래 걸립니다.(JS 파일 참조)</p>
      <p>동기 함수에서 코드가 실행되는 동안 다음에 실행되는 코드는 실행되지 않습니다.</p>

      <div id="generatePrimes">
        <label for="quota">Number of primes:</label>
        <input type="text" id="quota" name="quota" value="1000000" />

        <button id="generate">Generate primes</button>
        <button id="reload">Reload</button>
        <div id="output"></div>
      </div>
      <div>
        <textarea name="testLongTime" id="testLongTime"></textarea>
      </div>
      <p>이는 장기 실행 동기 함수의 기본적인 문제입니다. 우리의 프로그램이 필요로 하는 것은 다음과 같습니다.</p>
      <ol>
        <li>함수를 호출함으로써 장기적으로 실행되는 작업을 시작한다.</li>
        <li>이 함수로 작업을 시작하고 즉시 복귀하여 다른 이벤트에 계속 응답할 수 있게 한다.</li>
        <li>작업이 완료되면 결과를 알려준다.</li>
      </ol>
      <h5>이것이 바로 비동기 함수가 할 수 있는 일입니다. </h5>

      <h1>async, await</h1>
  <pre>{`async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("완료!"), 1000)
  });
  let result = await promise; // 프라미스가 이행될 때까지 기다림
  alert(result); // "완료!"
}
f();`}</pre>
  <pre>{`async function loadJson(url) {
  let response =await fetch(url);
  if(response.status === 200) {
    return response.json();
  } else {
    throw new Error(response.status);
  }
}
 loadJson('no-such-user.json').catch(alert); // Error: 404`}</pre>

    <h2>showAvatar</h2>
    <pre>{`async function showAvatar() {
  // JSON 읽기
  let response = await fetch('/article/promise-chaining/user.json');
  let user = await response.json();
  // github 사용자 정보 읽기
  let githubResponse = await fetch(백틱 https://api.github.com/users/{user.name});
  let githubUser = await githubResponse.json();
  // 아바타 보여주기
  let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);
  // 3초 대기
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  img.remove();
  return githubUser;
}

showAvatar();`}</pre>
    <h2>Promise.all 과도 함께 쓸 수 있음</h2>
    <pre>{`// 프라미스 처리 결과가 담긴 배열을 기다립니다.
let results = await Promise.all([
  fetch(url1),
  fetch(url2),
  ...
]);</pre>

    <h2>애러 다시 던지기</h2>
    <pre>class HttpError extends Error {
  constructor(response) {
    super(백틱 {response.status} for {response.url});
    this.name = 'HttpError';
    this.response = response;
  }
}

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) return response.json();
      else throw new HttpError(response);
    })
}

// 유효한 사용자를 찾을 때까지 반복해서 username을 물어봄
function demoGithubUser() {
  let name = prompt("GitHub username을 입력하세요.", "slow333");
  return loadJson(백틱 https://api.github.com/users/name)
    .then(user => {
      alert( 백틱 이름: {user.name}.);
      return user;
    })
    .catch(err => {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("일치하는 사용자가 없습니다. 다시 입력해 주세요.");
        return demoGithubUser();
      } else throw err;
    });
}

demoGithubUser();`}</pre>
    </div>
  )
}

export default JSAsyncIntro
