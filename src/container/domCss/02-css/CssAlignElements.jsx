import React from 'react'

function CssAlignElements() {
  return (
    <div>
      <div className="for-space" id='css-align-elements'></div>

      <h1>flex</h1>
      <h2>flex 속성</h2>

      <p>display: flex; flex-direction: row/column/row-reverse/column-reverse</p>
      <p>flex-wrap: nowrap/wrap/wrap-reverse;</p>
      <p>flex-flow: flex-direction과 flex-warp을 한번에 적용</p>
      <p>flex-flow: row wrap;</p>

      <h3>정렬하기</h3>
      <p>justify: 메인축 정렬 방향, align: 수직축 방향으로 정렬</p>
      <p>justify-content: 메일축 방향으로 아이템을 정렬</p>
      <p>justify-content: flex-start/flex-end/center/space-between/space-around/space-evenly</p>
      <p>align-items: stretch/flex-start/flex-end/center/baseline;</p>
<pre>{` stretch                      center
  |----- |------ | ----- |   |-----|------ | ----- |
  |item1 | item2 | item3 |   |     |       |       |
  |      |       |       |   |item1 | item2 | item3 |
  |      |       |       |   |     |       |       |
  |----- |------ | ----- |   |-----|------ | ----- |`}</pre>
    </div>
  )
}

export default CssAlignElements
