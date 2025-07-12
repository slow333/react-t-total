import './JSMain.css';
import { useLocation } from 'react-router-dom';

function JSNav() {
  const location = useLocation();
  const compare = (path) => location.hash.includes(path) ? " aside__current" : "";

  return (
    <div>
      <details className="open:bg-slate-100 open:ring-3 open:ring-black/5 
          open:rounded-sm open:shadow-lg open:border-2">
        <summary className="text-xl text-slate-900 font-semibold select-none 
          cursor-pointer hover:text-teal-900 dark:text-gray-900">
          JS Basic
        </summary>
        <div className="mt-3 ml-2 text-xl text-slate-100
             dark:text-slate-900">
          <a href="#js-intro" 
            className={`aside__a-text${compare('#js-intro')}`}
            >js intro</a>
          <a href="#js-basic" 
            className={`aside__a-text${compare('#js-basic')}`}
            >js Basic</a>
          <a href="#js-middle" 
            className={`aside__a-text${compare('#js-middle')}`}
            >js middle</a>
        </div>
      </details>
    </div>
  )
}

export default JSNav
