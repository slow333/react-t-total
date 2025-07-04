import { Link, useLocation } from 'react-router-dom';

function ReactNav() {
  const location = useLocation();
  const compare = (path) => location.pathname === path ? " aside__current" : "";
  
  return (
    <>
      <a
        href="#react-start"
        className={`aside__a-text${compare('#react-start')}`}
      >
        React 초기 설정
      </a>
      <a 
        href="#react-md" 
        className={`aside__a-text${compare('#react-md')}`}
      >
        React Medium</a>
      <a 
        href="#react-adv" 
        className={`aside__a-text${compare('#react-adv')}`}
      >
        React Advanced</a>
    </>
  )
}

export default ReactNav
