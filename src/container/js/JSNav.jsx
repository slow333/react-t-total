import "./JSMain.css";
import { useLocation, Link } from "react-router-dom";

function JSNav() {
  const location = useLocation();
  const compare = (path) =>
    location.hash.includes(path) ? " aside__current" : "";

  return (
    <>
    <div class="accordian__container">
      <details className="open:bg-slate-100 open:ring-3 open:ring-black/5
           accordian__details mb-3" >
        <summary className="text-xl font-semibold select-none 
          cursor-pointer hover:text-teal-900 details__summary" >
          <Link to="/javascript">JS Basic</Link>
        </summary>
        <div className="bg-slate-200 ps-4 py-4 details__div" >
          <a href="#js-intro"
            className={`aside__a-text${compare("#js-intro")}`} >
            js intro </a>
          <a href="#js-basic"
            className={`aside__a-text${compare("#js-basic")}`} >
            js Basic </a>
          <a href="#js-middle"
            className={`aside__a-text${compare("#js-middle")}`} >
            js middle </a>
        </div>
      </details>
      <details className="open:bg-slate-100 open:ring-3 open:ring-black/5
           accordian__details mb-3">
        <summary
          className="text-xl font-semibold select-none 
          cursor-pointer hover:text-teal-900 details__summary">
          <Link to="/js-advance">JS Advanced</Link>
        </summary>
        <div className="bg-slate-200 ps-4 py-4 details__div" >
          <a href="#js-recursion"
            className={`aside__a-text${compare("#js-recursion")}`} >
            recursion stack </a>
          <a href="#js-spread"
            className={`aside__a-text${compare("#js-spread")}`} >
            Spread Rest </a>
          <a href="#js-lexical"
            className={`aside__a-text${compare("#js-lexical")}`} >
            lexical</a>
          <a href="#js-setTimeout"
            className={`aside__a-text${compare("#js-setTimeout")}`} >
            setTimeout, interval</a>
          <a href="#js-call-apply"
            className={`aside__a-text${compare("#js-call-apply")}`} >
            call, apply </a>
          <a href="#js-bind"
            className={`aside__a-text${compare("#js-bind")}`} >
            bind </a>
          <a href="#js-arrow-func"
            className={`aside__a-text${compare("#js-arrow-func")}`} >
            arrow function </a>
          <a href="#js-try-catch"
            className={`aside__a-text${compare("#js-try-catch")}`} >
            arrow try-catch </a>
        </div>
      </details>
    </div>
    </>
  );
}

export default JSNav;
