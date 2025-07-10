import React from 'react'
import '../ReactApp.css';
import ReactPropsJsonServer from './ReactPropsJsonServer';

function JsonServer() {
  return (
    <div className='jsonserver__container'>
      <div  id='fetch__api' className="for-space"></div>
      <h1>json server</h1>
      <h3>json data를 가상의 서버를 만들어서 api 형태로 제공해줌</h3>
      <h3>install json-server and run from data file</h3>
      <pre>{`npx json-server -p 3500 -w src/container/react/jsonServer/db.json
        -p: 포트, -w : watch db.json 파일
    result terminal
    Endpoints:  http://localhost:3500/items`}</pre>
      <p>json server에서 3500 포트로 items를 제공해줌</p>
      <h2>json server CRUD</h2>
      <h3>POST</h3>
      <pre>{`const postOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(myNewItem)
}
const result = await apiRequest(API_URL, postOptions);`}</pre>
      <h3>PATCH : cors 발생: header에 추가 필요</h3>
      <pre>{`const updateOptions = {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'PATCH, GET, POST, DELETE, OPTIONS'
  },
  body: JSON.stringify({checked: updatedItem[0].checked })
};`}</pre>
<pre>const reqUrl = &#96;&#36;&#123;API_URL&#125;/&#36;&#123;id&#125;&#96; <br/>
const result = await apiRequest(reqUrl, updateOptions);<br/>
if(result) setFetchErr(result);</pre>
      <h3>delete</h3>
      <pre>{`const deleteOptions = { method: 'DELETE'}`}</pre>
    <pre>const reqUrl = &#96;&#36;&#123;API_URL&#125;/&#36;&#123;id&#125;&#96; <br/>
const result = await apiRequest(reqUrl, deleteOptions);<br/>
if(result) setFetchErr(result);</pre>
      <ReactPropsJsonServer />
     
    </div>
  )
}

export default JsonServer
