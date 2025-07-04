
function ReactStart() {
   return (
      <div id="react-start">
         <div id='react-start' className="for-space"></div>
          <h1>Basic Setting</h1>
          <h2>설치할 것</h2>
          <h4>npm create-react-app</h4>
          <h4>npm install react-icons</h4>
          <h4>npm install react-router</h4>

          <h2>index.js 활용하기</h2>
          <h4>폴더 밑에 index.js를 넣어두면 import에서 폴더까지만 지정해도 자동으로 가저옮</h4>
          <h4>한번에 import, export해서 사용할 때 어려개를 한번에 가져오기 편함</h4>
          <h5>index.js 생성</h5>
          <pre>{` import Component1 from './Comp/Component1'; comp 폴더에서 Component1을 가져옮
 import About from './Comp/About'; comp 폴더에서 About을 가져옮

 export { Component1, About }`}</pre>
          <h5>index.js 사용</h5>
          <pre>{` import {Component1, About } form './'; 현재 폴더의 index.js에서 가져옮 `}</pre>

          <h2>Router 구성</h2>
          <h3>root : index.js</h3>
          <p>BrowserRouter를 react router에서 가져와서 적용</p>
          <pre>{`  <BrowserRouter>
   <App />
 </BrowserRouter>`}</pre>
          <h2>App.js 구성</h2>
          <p>생성한 Router 내역을 넣어줌, Navbar는 전체에 적용되므로 여기에 적용</p>
          <pre>{` <div>
   <Navbar />
   {/* navbar의 링크가 여기에 자동으로 생성됨 */}
   <MyRoutes />
 </div>`}</pre>
          <h2>Router 구성</h2>
          <p>경로에 대한 component를 정의함</p>
       <pre>{`   <Routes>
     <Route index path="/" element={<Note />} />
     <Route path="/css" element={<CssApp />} />
     <Route path="/react" element={<ReactApp />} />
   </Routes>`}</pre>
          <h2>aside 구성</h2>
          <p>여기서는 별도 링크 보다는 내부 경로에 대한 a 링크만 정의함</p>

          <h2>aside 매뉴 화면 크기에 따라 토글, 숨기기 등</h2>
          <p>1. (css media)main은 row(2:8) to column으로 변경, aside 메뉴 내용은 column to row<br />
          media에 적용된 것은 원래 것에서 모두 상속 받고 작성한 것만 override함</p>
          <pre>{`@media screen and (max-width: 850px) {
  .main-wrapper { flex-direction: column; }
  .aside-wrapper { position: sticky; top: 6.2rem; }
  .aside-container { position: sticky; top: 6rem; padding: 1rem 0 0 2rem; }
  .aside__a-text { display: inline-block;  }
  .content-wrapper { padding-top: 0;  }
  .hamburger { display: inline-block;}
  h1 {  position: relative;  top: 0; }
  .for-space { height: 9.2rem; margin-top: -9.2rem; visibility: hidden;}
}}`}</pre>
          <p>3. 햄버거 클릭시 보이고 숨기기는 react useState에서 적용</p>
          <p>4. 숨김 상태에서 화면 키우면 aside 무조건 보이기는 react useEffect에서 정의</p>
          <p>5. 화면 초기 생성시 aside 무조건 보이기는 react useEffect에서 정의</p>
          <h4>해당 파트에서 취합한 component(ReactApp, CssApp,...)에 아래 내용 정의</h4>
          <pre>{`function ReactApp() {
   const [showAside, setShowAside] = useState(true);
  // 이 부분이 화면 크기에 따라 const를 토글함(화면 커지면 무조건 aside 보임)
   useEffect(() => {
      const handleResize = () => window.innerWidth > 850 
         ? setShowAside(true) : setShowAside(false);
      window.addEventListener('resize', handleResize);
      // 화면 갱신, 초기에 화면 보이기(이거 안하면 초기에 안보임)
      window.addEventListener('DOMContentLoaded', handleResize);
   }, []);

   return (
    <div>
       <div className="hamburger" onClick={() => setShowAside(!showAside)}>
          {showAside ? <IoMdClose /> : <GiHamburgerMenu />}</div> // toggle icon
       <div className="main-wrapper">
          <div className="aside-wrapper">
             {showAside &&
                 <div className="aside-container">
                    <ReactNav />
                 </div>}
          </div>

          <div className="content-wrapper">
             <ReactStart />
{/* 어기에 해당 파트의 component를 넣어줌*/}
          </div>
       </div>
    </div>
   )
}

export default ReactApp`}</pre>
       </div>
   );
}

export default ReactStart;