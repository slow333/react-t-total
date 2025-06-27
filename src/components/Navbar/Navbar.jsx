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
      <nav className="fixed w-full z-100 bg-gray-800 mx-auto max-w-7xl sm:px-6 lg:px-8 
      flex h-16 items-center justify-between top-0">
        <div className="flex shrink-0 items-center mr-8">
          <Link to={'/'}>
            <h1 className="bg-emerald-400 w-10 h-10 rounded-full shadow-2xl grid place-content-center">
              <div className="bg-teal-700 w-7 h-7 rounded-full grid place-content-center">
                <div className="animate-ping bg-green-100 w-4 h-4 rounded-full"></div>
              </div>
            </h1>
          </Link>
        </div>
        <div className='rowCenterItems gap-1'>
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
