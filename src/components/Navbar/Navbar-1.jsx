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
      <nav style={{ position: 'sticky', top: 0, width: '100%', height: '3.2rem', backgroundColor: 'rgba(31, 41, 55, 0.8)', marginX: 'auto', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
        <div  style={{display: 'flex', flexShrink: 0, marginRight: '2rem' }} >
          <Link to={'/'}>
            <h1 className="animate-pulse bg-emerald-400 w-10 h-10 rounded-full contentCenter"> home
              {/* <div className="animate-pulse bg-teal-700 w-7 h-7 rounded-full contentCenter">
                <div className="animate-pulse bg-green-100 w-4 h-4 rounded-full"></div>
              </div> */}
            </h1>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5rem' }}>
          <Link
            to='/brand'
            className='navItem'
          >
            Brand App
          </Link>
          <Link
            to='/tw-pages'
            className='navItem'
          >
            Tailwind
          </Link>
          <Link
            to='/acme'
            className='navItem'
          >
            Acme Rockets
          </Link>
          <div
              onClick={() => setDarkMode((prev) => !prev)}
              className="m-0 p-0 text-xl ml-3"
            >
              {darkMode ?  <RiToggleFill color='white' size={30} /> : <RiToggleFill  size={30}/>}
            </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
