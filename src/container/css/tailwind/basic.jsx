import React, { useState } from 'react'

function BasicTw() {

  return (
    <>
      <div  id='tw-basic' className="for-space"></div>
      <h1 className='m-0'>tailwind 기본: 패딩, 마진, 라운드, pre 등</h1>
      <p className="text-lg font-bold"> 글자 크기는 text-[lg|4xl|sm] or text-[44px] 같이 함 </p>

      <p className="text-blue-400">색지정은 text-blue-400, text-[#aaa] 같이함</p>

      <div className='border-5 border-blue-200 text-center p-2'>
        경계넓이 border-[1|2|3...], 경계색 border-[green|blue|red]-[100|200|...] 같이함</div>

      <div className="font-bold text-xl p-5">
        font weight는 font-[thin|extralight|light|normal|medium|semibold|bold|extrabold|black] 하면됨
      </div>
      <hr/>

      <p className='text-2xl font-light font-mono p-5 mt-5'>
        p[t|b|r|l] px 좌우, py 위아래 / p-5 mt-5, font-mono 적용
      </p>
        <p>margin도 패딩과 같은 방식</p>
      <hr/>

      <p className='border-5 border-blue-90 text-2xl rounded-lg mt-4'>
        라운드는 rounded-[full|sm|lg|2xl]</p>
      <hr/>
      <p className="text-2xl font-black">
        전체 배경 모드:  global.css에서 @media (prefers-color-scheme: light) 어기서 light, dark로 지정
      </p>
      <div className='uppercase'>대소문자는 uppercase, lowercase로 처리</div>
      <p>숨기기는 hidden 하면됨</p>
      <hr/>
      
      <div className="font-mono font-bold text-center underline">
        css module을 정의하고 html에서 사용하기</div>
      <p>import styles from './tw.module.css';
        <br/>module.css에서 정의한 className 이름을 가져다가 사용할 수 있음, css 중복 문제 해결</p>
      <p>
        사용은 className &#61; &#123; &#96; &#36; &#123;styles.css_className &#125; &#96; &#125;
      </p>
      <hr/>

    <h2>react(nextjs) whitespace pre wrap 적용 이슈</h2>

    <p className='my-6 text-2xl font-extrabold'>react 사용 시</p> 
    <p>
      className='whitespace-pre-wrap' 적용하고 내용은 브래킷&#123;&#125;으로 감싸서 백틱(``) 안에 넣어야함</p>
    <pre>{`좋은 점은 < > { } # $ / 등 
      특수 문자를 사용 가능`}</pre>
    <pre>\n은 {`줄바꿈으로 적용됨 줄이 추가됨, <br/>br tag는 먹지 않음 \n linebreak는 먹음`}</pre>
  </>
  )
}

export default BasicTw