import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MdDarkMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
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
          +' p, h1, h2, h3, h4, h5, h6, ul, li, ol, a, table, td, tr,'
        + ' .accordian__container, .accordian__details, .details__div, .details__summary');
    rootElements.forEach(el => 
      darkMode ? el.classList.add('dark') : el.classList.remove('dark')
    );
  }, [darkMode]);

  useEffect(() => {
    document.querySelectorAll('.nav__item').forEach(link => 
       location.pathname.split('-')[0] === link.pathname.split('-')[0] 
        ? link.classList.add("currentUrl") : link.classList.remove("currentUrl") )
  }, [location.pathname]);

  return (
    <>
    <div className='nav__container' >
      <nav className='row-space-between-items' >
        <div className="nav__home">
          <Link to={'/'}><FaHome size={40} className='nav__home-animate'/></Link>
        </div>
        <div className='row-end-items'>
          <Link to='/css' className='nav__item' >CSS </Link>

          <Link to='/js-javascript' className='nav__item' >javascript </Link>
          
          <Link to='/dom-document' className='nav__item' >DOM </Link>

          <Link to='/react-start' className='nav__item' >React</Link>

          <Link to='/java-basic' className='nav__item' >Java</Link>
          
          <Link to='/spring-intro' className='nav__item' >Spring</Link>

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
