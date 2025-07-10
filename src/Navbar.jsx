import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MdDarkMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? saved : 'false';
  });

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    // body에 다크모드 클래스 적용 (선택)
    const rootElements = document
      .querySelectorAll('#root, body, .aside-wrapper, .aside-container, .content-wrapper, '
          +' .aside__a-text, .main-wrapper, .currentUrl, '
          +' p, h1, h2, h3, h4, h5, h6, ul, li, ol, a, table, td, tr');
    rootElements.forEach(el => 
      darkMode ? el.classList.add('dark') : el.classList.remove('dark')
    );
  }, [darkMode]);

  useEffect(() => {
    document.querySelectorAll('.nav__item').forEach(link => 
      link.pathname === location.pathname 
        ? link.classList.add("currentUrl") : link.classList.remove("currentUrl") )
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
          <Link to='/psql-installation' className='nav__item' >Postgres</Link>
          <div
              onClick={() => setDarkMode((prev) => !prev)}
              className="nav__toggle"
            >
              {darkMode ?  <CiDark size={50} /> : <MdDarkMode size={50}/>}
          </div>
        </div>
      </nav>
    </div>
    </>
  )
}

export default Navbar
