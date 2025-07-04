import React from 'react'

function JavaArray() {
  return (
    <div>
      <h1>배열</h1>
<section>
  <h2>배열이란 ?</h2>
  <h3>서로 연속적인 같은 유형의 값의 집함</h3>
  <h3>배열의 선언과 생성</h3>
  <pre>{`int[] score; String[] name; OR, int score[]; String name[];
  int[] score = {20,3,2,4,5};
  int[] score = new int[]{3,4,5,6};
  int[] score;
  score = { … } //error
  score = new int[]{ … }; // OK

  int add(int[] arr) { … };
  int result = add({…}); // error
  int result = add(new int[]{…}); // OK`}</pre>
      <h3>배열의 복사</h3>
      <p>System.arraycopy(arr1, 0, arr2, 0, arr1.length);
          arr1의 0부터 arr2의 0에 arr1.length만큼 복사 </p>
      <h3>사용자 입력 받기-커맨드 라인</h3>
  <pre>{`public static void main(String[] args) {
    args.length;
    for(int i =0; i< args.length; i++) {
     System.out.println("args index"+ i + "args value" + args[i]);
    }
}
  사용: cmd; c:\...> java FileName abc 123 "hello"`}</pre>
    </section>
    </div>
  )
}

export default JavaArray
