function CssAlignElements() {
  return (
    <>
      <div className="for-space" id='css-align-elements'></div>

      <h1>요소 정렬하기</h1>
      <h2>flex 속성</h2>

      <p>display: flex; flex-direction: row/column/row-reverse/column-reverse</p>
      <p>flex-wrap: nowrap/wrap/wrap-reverse;</p>
      <p>flex-flow: flex-direction과 flex-warp을 한번에 적용</p>
      <p>flex-flow: row wrap;</p>

      <h3>정렬하기</h3>
      <h4>justify-content: flex-start/flex-end/center/space-between/space-around/space-evenly</h4>
      <h4>align-items: stretch/flex-start/flex-end/center/baseline;</h4>

      <br />
    </>
  )
}

export default CssAlignElements
