import { Link, useLocation } from 'react-router-dom';

function ReactNav() {
  const location = useLocation();
  const compare = (path) => location.hash.includes(path) ? " aside__current" : "";
  
  return (
    <>
      <a
        href="#react-start"
        className={`aside__a-text${compare('#react-start')}`}
      >
        React 초기 설정
      </a>
      <a 
        href="#react-props-index" 
        className={`aside__a-text${compare('#react-props-index')}`}
      >
        React Props</a>
      <a 
        href="#fetch__api" 
        className={`aside__a-text${compare('#fetch__api')}`}
      >
        fetch API</a>
      <a 
        href="#react-router-index" 
        className={`aside__a-text${compare('#react-router-index')}`}
      >
        React Router</a>
    </>
  )
}

export default ReactNav
