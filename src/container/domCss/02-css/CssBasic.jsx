import './cssRoot.css'
import CssColor from './CssColor'
import React from 'react'

function CssBasic() {
  return (
    <>
    <div  id='css-basic' className="for-space"></div>
      <h1>CSS Basic</h1>
      <h2>* and body</h2>
      <h4>브라우져에서 기본적으로 margin, padding을 적용해서 이를 무시할려면 *에 margin, padding을 0으로 적용해야함</h4>
      <h4>그리고 box-sizing: border-box로 해야함</h4>
      <p>*는 모든 box에 적용되는 규칙을 적용</p>
      <pre>{`* { padding:0; margin:0; box-sizing: border-box; }`}</pre>
      <h2>inheritance</h2>
      <h4>font, padding, margin 관련된 사항은 상속 받으며, border는 상속되지 않음</h4>
      <h4>width, height는 parent에서 정한 것에 대한 비율로 지정됨</h4>
      <h5>rem은 root em으로 html, body에 대한 비율</h5>
      <h5>em은 자신이 속한 element 내의 font size에 대한 비율로 정해짐(1em은 font size 임)</h5>
      <h2>CSS Basic Colors</h2>

      <CssColor />

    </>
  )
}

export default CssBasic
