import './cssRoot.css';
import {CssBasic, CssAdvanced, CssMedium, CssAlignElements} from './'
import CssNav from './cssNav';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import {useEffect, useState} from 'react';

function CssApp() {
  const [showAside, setShowAside] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 850) {
        setShowAside(true);
      } else {
        setShowAside(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div className="hamburger" onClick={() => setShowAside(!showAside)}>
          {showAside ? <IoMdClose /> : <GiHamburgerMenu />}</div>
      <div className="main-wrapper">
        <div className="aside-wrapper">
        {showAside && 
        <div className="aside-container">
            <CssNav />
          </div>}       
        </div>
        
        <div className="content-wrapper">
          <CssBasic />
          <CssMedium />
          <CssAdvanced /> 
          <CssAlignElements />
        </div>
      </div>
    </div>
  )
}

export default CssApp
