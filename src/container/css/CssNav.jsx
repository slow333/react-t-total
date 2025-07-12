import {useLocation} from 'react-router-dom';

function CssNav() {
  const location = useLocation();
  const compare = (path) => location.hash.includes(path) ? " aside__current" : "";

  return (
    <div >
      <a href="#css-basic" 
          className={`aside__a-text${compare('#css-basic')}`}>
         CSS Basic</a>
      <a href="#css-color"
          className={`aside__a-text${compare('#css-color')}`}
          >CSS Color</a>
      <a href="#css-medium"
           className={`aside__a-text${compare('#css-medium')}`}
           >CSS Medium</a>
      <a href="#css-align-elements" 
          className={`aside__a-text${compare('#css-align-elements')}`}
          >CSS Align Elements</a>
      <details className="open:bg-slate-100 open:ring-3 open:ring-black/5 
          open:rounded-sm open:shadow-lg open:border-2">
        <summary className="text-xl text-slate-900 font-semibold select-none 
          cursor-pointer hover:text-teal-900 dark:text-gray-900">
          Tailwind
        </summary>
        <div className="mt-3 ml-2 text-xl text-slate-100 dark:text-slate-900">
          <a href="#tw-basic" 
            className={`aside__a-text${compare('#tw-basic')}`}
            >TW Basic</a>
          <a href="#tw-layout" 
            className={`aside__a-text${compare('#tw-layout')}`}
            >TW layout</a>
          <a href="#tw-media-handle" 
            className={`aside__a-text${compare('#tw-media-handle')}`}
            >TW media handle</a>
          <a href="#tw-custom" 
            className={`aside__a-text${compare('#tw-custom')}`}
            >TW custom</a>
          <a href="#tw-etc" 
            className={`aside__a-text${compare('#tw-etc')}`}
            >TW etc</a>
          <a href="#tw-acme" 
            className={`aside__a-text${compare('#tw-acme')}`}
            >TW acme</a>
        </div>
      </details>

    </div>
  )
}

export default CssNav
