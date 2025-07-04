import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import {useEffect, useState} from 'react';

function MainWrapper({aside, children}) {
    const [showAside, setShowAside] = useState(true);
  
    useEffect(() => {
      const handleResize = () => 
        (window.innerWidth > 850) ? setShowAside(true) : setShowAside(false);
  
      window.addEventListener('resize', handleResize);
      window.addEventListener('DOMContentLoaded', handleResize);
    }, []);

  return (
    <div>
      <div className="hamburger" onClick={() => setShowAside(!showAside)}>
          {showAside ? <IoMdClose /> : <GiHamburgerMenu />}</div>
      <div className="main-wrapper">
        <div className="aside-wrapper">
          {showAside && <div className="aside-container"> { aside } </div>}
        </div>
        
        <div className="content-wrapper"> {children} </div>
      </div>
    </div>
  )
}

export default MainWrapper
