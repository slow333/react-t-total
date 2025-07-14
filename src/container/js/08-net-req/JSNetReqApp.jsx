import JSCors from "./elements/JSCors"
import JSFetch from "./elements/JSFetch"
import JSFetchAbort from "./elements/JSFetchAbort"
import JSFormdata from "./elements/JSFormdata"
import JSUrlObject from "./elements/JSUrlObject"
import JSWebSocket from "./elements/JSWebSocket"
import JSXMLHttpReq from "./elements/JSXMLHttpReq"

function JSNetReqApp() {
  return (
    <div>
      <JSFetch />
      <JSFormdata />
      <JSFetchAbort />
      <JSCors />
      <JSUrlObject />
      <JSXMLHttpReq />
      <JSWebSocket />
    </div>
  )
}

export default JSNetReqApp
