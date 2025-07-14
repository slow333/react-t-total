import React from 'react'

function JSXMLHttpReq() {
  return (
    <div>
      <div className="for-space" id='js-xmlHttpRequest'></div>
      <h1>XMLHttpRequest</h1>
      <h3>URL 생성</h3>
  <pre>{`let xhr = new XMLHttpRequest();

xhr.open('GET', '/my/url');
xhr.send();
xhr.onload = function() {
  if (xhr.status != 200) { // HTTP error?
    alert( 'Error: ' + xhr.status);
    return;
  }
  // get the response from xhr.response
};

xhr.onprogress = function(event) {
  // report progress
  alert('Loaded' + event.loaded + 'of' + event.total);
};

xhr.onerror = function() {
  // handle non-HTTP error (e.g. network down)
};`}</pre>
      <h5>loadstart – the request has started.</h5>
      <h5>progress – a data packet of the response has arrived, the whole response body at the moment is in response.</h5>
      <h5>abort – the request was canceled by the call xhr.abort().</h5>
      <h5>error – connection error has occurred, e.g. wrong domain name. Doesn’t happen for HTTP-errors like 404.</h5>
      <h5>load – the request has finished successfully.</h5>
      <h5>timeout – the request was canceled due to timeout (only happens if it was set).</h5>
      <h5>loadend – triggers after load, error, timeout or abort.</h5>
      <h5>error, abort, timeout, load 중에서 한개의 이벤트만 발생함</h5>
    </div>
  )
}

export default JSXMLHttpReq
