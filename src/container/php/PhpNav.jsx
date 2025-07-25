import { Link, useLocation } from 'react-router-dom';

function PhpNav() {
  const location = useLocation();
  const compare = (path) => location.hash.includes(path) ? " aside__current" : "";
  
  return (
    <>
      <a
        href="#php-start"
        className={`aside__a-text${compare('#php-start')}`}
      >
        php 초기 설정
      </a>

    </>
  )
}

export default PhpNav
