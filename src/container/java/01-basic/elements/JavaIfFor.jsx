import React from 'react'

function JavaIfFor() {
  return (
    <div>
      <h1>조건문과 반복문</h1>
      <section>
        <h2>조건문</h2>
        <h3>Math.random()</h3>
          <h4>0.0과 1.0 사이의 double값을 반환{`(0.0 <= Math.random() < 1.0)`}</h4>
          <h3>String 비교는 str.equals(str) 해야 값을 비교</h3>
        <h2>반복문: for, whilt, do-while</h2>
    <pre>{`int input=0;
  System.out.println("문장을 입력하세요");
  System.out.println("입력을 마치려면 x를 입력하세요");
  do {
    input = System.in.read();
    System.out.print((char)input);
  } while (input != -1 && input != 'x'); `}</pre>
        <h3>for문에서 break;를 만나면 자기가 속한 for를 탈출함</h3>
        <h3>원하는 곳으로 가기 위해서는</h3>
    <pre>{`Loop1: for(...) {
  for( ..) { break Loop1;}
  }`}</pre>
          </section>
    </div>
  )
}

export default JavaIfFor
