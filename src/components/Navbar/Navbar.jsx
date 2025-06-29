import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { RiToggleFill } from "react-icons/ri";
import './Navbar.css';

function Navbar() {
  const location = useLocation().pathname;
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const links = document.querySelectorAll('.navItem');
    links.forEach(l => {
      if(l.href.indexOf(location) !== -1) {
        l.classList.add("currentUrl");
      } else {
        l.classList.remove("currentUrl");
      };
    })
  },[location])

  useEffect(() => {
    darkMode ? document.body.classList.add('dark')
            : document.body.classList.remove('dark');
  }, [darkMode]);

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
          <Link to='/css' className='nav__item' >CSS </Link>
          <Link to='/react' className='nav__item' >React </Link>
          <div
              onClick={() => setDarkMode((prev) => !prev)}
              className="nav__toggle"
            >
              {darkMode ?  <RiToggleFill color='white' size={30} /> : <RiToggleFill  size={30}/>}
          </div>
        </div>
      </nav>
    </div>
    </>
  )
}

export default Navbar
