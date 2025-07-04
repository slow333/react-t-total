import {Link} from 'react-router-dom';

function CssNav() {
  return (
    <div >
      <Link to="/css-basic" className="aside__a-text">CSS Basic</Link>
      <Link to="/css-medium" className="aside__a-text">CSS Medium</Link>
      <Link to="/css-align" className="aside__a-text">CSS Align Elements</Link>
    </div>
  )
}

export default CssNav
