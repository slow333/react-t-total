import {Link, useLocation} from 'react-router-dom';

function JavaNav() {
  const location = useLocation();
  const compare = (linkPath) => (location.pathname) === linkPath ? " aside__current" : "";

  return (
    <div >
      <Link to="/java-basic" className={`aside__a-text${compare('/java-basic')}`}>Java Basic</Link>
      <Link to="/java-advance" className={`aside__a-text${compare('/java-advance')}`}>Java Advanced</Link>
      <Link to="/java-collection" className={`aside__a-text${compare('/java-collection')}`}>Java Collection</Link>
    </div>
  )
}

export default JavaNav
