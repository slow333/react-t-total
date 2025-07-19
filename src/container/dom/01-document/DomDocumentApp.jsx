import DomBrowserEnv from './elements/DomBrowserEnv'
import DomSearch from './elements/DomSearch'
import DomNodeProperty from './elements/DomNodeProperty'
import DomAttribute from './elements/DomAttribute'
import DomChange from './elements/DomChange'
import DomStyleClass from './elements/DomStyleClass'
import DomElemSizeScroll from './elements/DomElemSizeScroll'
import DomBrowserSize from './elements/DomBrowserSize'
import DomPosition from './elements/DomPosition'
import DomEtcApp from './elements/DomEtcApp';

function DomDocumentApp() {
  return (
    <div>
      <DomBrowserEnv />
      <DomSearch />
      <DomNodeProperty />
      <DomAttribute />
      <DomChange />
      <DomStyleClass />
      <DomElemSizeScroll />
      <DomBrowserSize />
      <DomPosition />
      <DomEtcApp />
    </div>
  )
}

export default DomDocumentApp
