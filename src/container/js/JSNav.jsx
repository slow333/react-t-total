import "./JSMain.css";
import { useLocation, Link } from "react-router-dom";

function JSNav() {
  const location = useLocation();
  const compare = (path) =>
    location.hash.includes(path) ? " aside__current" : "";

  return (
    <>
    <div className="accordian__container">
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
      <details className="open:bg-slate-100 open:ring-3 open:ring-black/5
           accordian__details mb-3" >
        <summary className="text-xl font-semibold select-none 
          cursor-pointer hover:text-teal-900 details__summary" >
          <Link to="/js-callback">Callback/Async</Link>
        </summary>
        <div className="bg-slate-200 ps-4 py-4 details__div" >
          <a href="#js-callback"
            className={`aside__a-text${compare("#js-callback")}`} >
            callback</a>
          <a href="#js-promise-basic"
            className={`aside__a-text${compare("#js-promise-basic")}`} >
            promise </a>
          <a href="#js-promise-chaining"
            className={`aside__a-text${compare("#js-promise-chaining")}`} >
            promise-chaining </a>
            <a href="#js-promise-api"
            className={`aside__a-text${compare("#js-promise-api")}`} >
            promise-api </a>
            <a href="#js-promise-custom"
            className={`aside__a-text${compare("#js-promise-custom")}`} >
            promise-custom </a>
            <a href="#js-async"
            className={`aside__a-text${compare("#js-async")}`} >
            async-await </a>
            <a href="#js-worker"
            className={`aside__a-text${compare("#js-worker")}`} >
            js worker multi-thread</a>
        </div>
      </details>
      <details className="open:bg-slate-100 open:ring-3 open:ring-black/5
           accordian__details mb-3" >
        <summary className="text-xl font-semibold select-none 
          cursor-pointer hover:text-teal-900 details__summary" >
          <Link to="/js-net-req">Net Req</Link>
        </summary>
        <div className="bg-slate-200 ps-4 py-4 details__div" >
          <a href="#js-fetch-basic"
            className={`aside__a-text${compare("#js-fetch-basic")}`} >
            fetch</a>
          <a href="#js-form-data"
            className={`aside__a-text${compare("#js-form-data")}`} >
            fetch FormData </a>
          <a href="#js-fetch-abort"
            className={`aside__a-text${compare("#js-fetch-abort")}`} >
            fetch-abort </a>
            <a href="#js-cors"
            className={`aside__a-text${compare("#js-cors")}`} >
            cors </a>
            <a href="#js-url-object"
            className={`aside__a-text${compare("#js-url-object")}`} >
            url-object </a>
            <a href="#js-xmlHttpRequest"
            className={`aside__a-text${compare("#js-xmlHttpRequest")}`} >
            XMLHttpRequest </a>
            <a href="#js-web-socket"
            className={`aside__a-text${compare("#js-web-socket")}`} >
            web-socket</a>
        </div>
      </details>
    </div>
    </>
  );
}

export default JSNav;
