import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { RiToggleFill } from "react-icons/ri";
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  const [darkMode, setDarkMode] = useState(() => {
    // localStorage에서 초기값 불러오기
    const saved = localStorage.getItem('darkMode');
    return saved === 'true';
  });

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    // body에 다크모드 클래스 적용 (선택)
    const rootElements = document.querySelectorAll('#root, body, .aside-wrapper, .aside-container, .content-wrapper, .aside__a-text, .main-wrapper, .currentUrl, p, h1, h2, h3, h4, h5, h6, ul, li, ol, a, table, td, tr');
    rootElements.forEach(el => {
      if (darkMode) {
        el.classList.add('dark');
      } else {
        el.classList.remove('dark');
      }
    });
  }, [darkMode]);

  useEffect(() => {
    
  }, [darkMode]);

  useEffect(() => {
    document.querySelectorAll('.nav__item').forEach(l => {
      if (l.pathname === location.pathname) {
        l.classList.add("currentUrl");
      } else {
        l.classList.remove("currentUrl");
      }
    });
  }, [location.pathname]);

  return (
    <>
    <div className='nav__container' >
      <nav className='row-space-between-items' >
        <div className="nav__home">
          <Link to={'/'}>
            <div className="custom-pulse"> </div>
          </Link>
        </div>
        <div className='row-end-items'>
          <Link to='/css-basic' className='nav__item' >CSS </Link>
          <Link to='/react-start' className='nav__item' >React</Link>
          <Link to='/java-basic' className='nav__item' >Java</Link>
          <div
              onClick={() => setDarkMode((prev) => !prev)}
              className="nav__toggle"
            >
              {darkMode ?  <RiToggleFill color="white" size={50} /> : <RiToggleFill  size={50}/>}
          </div>
        </div>
      </nav>
    </div>
    </>
  )
}

export default Navbar
