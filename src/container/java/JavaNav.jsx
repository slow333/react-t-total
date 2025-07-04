import {Link} from 'react-router-dom';

function JavaNav() {
  return (
    <div >
      <Link to="/java-basic" className="aside__a-text">Java Basic</Link>
      <Link to="/java-advance" className="aside__a-text">Java Advanced</Link>
    </div>
  )
}

export default JavaNav
