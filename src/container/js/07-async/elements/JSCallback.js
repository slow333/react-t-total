import React from 'react'

function JSCallback() {
  function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error('failed to load script'));
    document.head.append(script);
  }
/*   loadScript('/js/exercises/printFor.js', function (error, script) {
    if (error) {
      console.log(error.message);
    } else {
      console.log(script);
      printText(location.href)
    }
  }); */

  return (
    <div>
      <div className="for-space" id='js-callback'></div>
      <h1>callback</h1>
  <p>setTimeout은 스케줄링에 사용되는 대표적인 함수. 모든 스크립트가 실행되고 난 후에 실행됨</p>
  <section>
    <h3>loadScript </h3>
    <pre>{`function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(null, script); // null을 앞에 넣야함
  script.onerror = () => callback(new Error('failed to load script'));
  document.head.append(script);
}
loadScript('/js/exercises/printFor.js', function (error, script) {
  if (error) {
    console.log(error.message);
  } else {
    console.log(script);
    printText(location.href)
    loadScript('/js/exercises/printFor.js', function (error, script) {
      if (error) {
        console.log(error.message);
      } else {
        console.log(script);
        loadScript('/js/exercises/printFor.js', function (error, script) {
          ...
        }
      }
    }
  }
});`}</pre>
  </section>
    </div>
  )
}

export default JSCallback
