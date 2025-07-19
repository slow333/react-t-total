import JSAsyncGenerator from './elements/JSAsyncGenerator'
import JSBigInt from './elements/JSBigInt'
import JSCurrying from './elements/JSCurrying'
import JSGenerator from './elements/JSGenerator'
import JSModule from './elements/JSModule'
import JSProxy from './elements/JSProxy'

function JSYieldModuleApp() {
  return (
    <div>
      <JSGenerator />
      <JSAsyncGenerator />
      <JSModule />
      <JSProxy />
      <JSCurrying />
      <JSBigInt />
    </div>
  )
}

export default JSYieldModuleApp
