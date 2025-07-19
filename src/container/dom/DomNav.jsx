import { useLocation, Link } from "react-router-dom";

function DomNav() {
  const location = useLocation();
  const compare = (path) =>
  location.hash.includes(path) ? " aside__current" : "";

  return (
    <div className="accordian__container">
      <details className="open:bg-slate-100 open:ring-3 open:ring-black/5
           accordian__details mb-3" >
        <summary className="text-xl font-semibold select-none 
          cursor-pointer hover:text-teal-900 details__summary" >
          <Link to="/dom-document">DOM Document</Link>
        </summary>
        <div className="bg-slate-200 ps-4 py-4 details__div" >
          <a href="#dom-browser-env"
            className={`aside__a-text${compare("#dom-browser-env")}`} >
            Browser env </a>
          <a href="#dom-search"
            className={`aside__a-text${compare("#dom-search")}`} >
            dom search </a>
          <a href="#dom-node-property"
            className={`aside__a-text${compare("#dom-node-property")}`} >
            dom node property </a>
          <a href="#dom-attribute"
            className={`aside__a-text${compare("#dom-attribute")}`} >
            dom attribute </a>
          <a href="#dom-change"
            className={`aside__a-text${compare("#dom-change")}`} >
            dom change </a>
          <a href="#dom-style-class"
            className={`aside__a-text${compare("#dom-style-class")}`} >
            style class </a>
          <a href="#dom-elem-size-scroll"
            className={`aside__a-text${compare("#dom-elem-size-scroll")}`} >
            elem-size, scroll </a>
          <a href="#dom-browser-size"
            className={`aside__a-text${compare("#dom-browser-size")}`} >
            dom browser-size </a>
          <a href="#dom-position"
            className={`aside__a-text${compare("#dom-position")}`} >
            dom position </a>
          <a href="#dom-etc"
            className={`aside__a-text${compare("#dom-etc")}`} >
            dom etc </a>  
        </div>
      </details>
      <details className="open:bg-slate-100 open:ring-3 open:ring-black/5
           accordian__details mb-3" >
        <summary className="text-xl font-semibold select-none 
          cursor-pointer hover:text-teal-900 details__summary" >
          <Link to="/dom-event">DOM Event</Link>
        </summary>
        <div className="bg-slate-200 ps-4 py-4 details__div" >
          <a href="#dom-browser-event"
            className={`aside__a-text${compare("#dom-browser-event")}`} >
            Browser event </a>
          <a href="#dom-event-bubbling"
            className={`aside__a-text${compare("#dom-event-bubbling")}`} >
            event-bubbling </a>
          <a href="#dom-event-change-input"
            className={`aside__a-text${compare("#dom-event-change-input")}`} >
            event-change-input </a>
          <a href="#dom-submit-event"
            className={`aside__a-text${compare("#dom-submit-event")}`} >
            submit-event </a>
          <a href="#dom-drag-drop"
            className={`aside__a-text${compare("#dom-drag-drop")}`} >
            drag-drop </a>
          <a href="#dom-scroll-event"
            className={`aside__a-text${compare("#dom-scroll-event")}`} >
            scroll-event </a>
        </div>
      </details>
      <details className="open:bg-slate-100 open:ring-3 open:ring-black/5
           accordian__details mb-3" >
        <summary className="text-xl font-semibold select-none 
          cursor-pointer hover:text-teal-900 details__summary" >
          <Link to="/dom-form">Form</Link>
        </summary>
        <div className="bg-slate-200 ps-4 py-4 details__div" >
          <a href="#dom-property-method"
            className={`aside__a-text${compare("#dom-property-method")}`} >
            property-method</a>
          <a href="#dom-focus-blur"
            className={`aside__a-text${compare("#dom-focus-blur")}`} >
            focus-blur</a>
          <a href="#dom-event-change-input"
            className={`aside__a-text${compare("#dom-event-change-input")}`} >
            event-change input </a>
          <a href="#dom-submit-event"
            className={`aside__a-text${compare("#dom-submit-event")}`} >
            submit-event </a>
        </div>
      </details>
    </div>

  )
}

export default DomNav
