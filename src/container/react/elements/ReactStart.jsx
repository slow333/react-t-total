
function ReactStart() {
   return (
      <div id="react-start">
         <div id='react-start' className="for-space"></div>
          <h1>Basic Setting</h1>
          <h3>설치할 것</h3>
          <p>npm create-react-app</p>
          <p>npm install react-icons</p>
          <p>npm install react-router</p>

          <h3>index.js 활용하기</h3>
          <h4>폴더 밑에 index.js를 넣어두면 import에서 폴더까지만 지정해도 자동으로 가저옮</h4>
          <h4>한번에 import, export해서 사용할 때 어려개를 한번에 가져오기 편함</h4>
          <h5>index.js 생성</h5>
          <pre>{` import Component1 from './Comp/Component1'; 
 import About from './Comp/About'; //comp 폴더에서 About을 가져옮

 export { Component1, About }`}</pre>
          <h3>index.js 사용</h3>
          <pre>{` import {Component1, About } form './'; 
          //현재 폴더의 index.js에서 가져옮 `}</pre>

         <h2>install tailwind</h2>
         <pre>{`Terminal 
  npm install tailwindcss @tailwindcss/cli
src/input.css  
  @import "tailwindcss/preflight";
  @tailwind utilities;
  @import "tailwindcss";
Terminal
  npx @tailwindcss/cli -i ./css/input.css -o ./css/output.css --watch
  npx @tailwindcss -i ./src/input.css -o ./src/output.css --watch
src/index.html
  link href="/css/output.css" rel="stylesheet"
settings: CSS > Lint: Unknown At Rules ; ignore
package.json 추가
  "scripts": {
    "tailwind": "npx @tailwindcss/cli -i ./css/input.css -o 
        ./css/output.css --watch"
  }
터미널 실행 : npm run tailwind`}</pre>
       </div>
   );
}

export default ReactStart;