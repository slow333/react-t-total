import React from 'react'

function JavaDataType() {
  return (
    <div>
      <main>
      <div id='java-basic'className="for-space"></div>

      <h1>About JAVA</h1>
      <section>
        <h2>변수</h2>
        <h4>문자 : char, 문자를 저장하는데 사용되며, 변수 당 하나의 문자만을 저장</h4>
        <h4>정수: byte(1), short(2), int*(4, 2(-31) ~ 2(31)-1, long(8)</h4>
        <h4>실수 : float(4), double*(8)</h4>
        <h4>논리 : boolean(1), true와 false</h4>

        <h2>변수 기본값</h2>
        <pre>{`  boolean isGood = false;
  char grade = ' ';  // 공백
  byte b = 0;
  short s = 0;
  int i = 0;
  long l = 0;   // 0L로 자동변환
  float f = 0;  // 0.0f로 자동변환
  double d = 0; // 0.0로 자동변환
  String s1 = null;
  String s2 = “”; // 빈 문자열

  char ch = 'aa'; // 애러
  char ch = ''; // 애러`}</pre>

        <h2>형변환</h2>
        <h3> boolean을 제외한 7개의 기본형은 서로 형변환이 가능하다.</h3>
        <h3>int보다 크기가 작은 타입은 int로 변환한다.( byte, char, short → int )</h3>
        <h3>피연산자 중 표현 범위가 큰 타입으로 형변화</h3>
        <pre>{`  byte + short → int + int → int
  char + int   → int + int → int
  float + int   → float + float → float
  long + float  → float + float → float
  float + double → double + double → double
  작은 범위에서 큰범위로 가는 거는 그냥 가능
  큰 범위에서 작은 범위로 가능 거는 casting 필요
  char ch = (char)65; // 'A;
  float f = 1.6f;
  int i = (int)f;
  (int)'A'; // 65`}</pre>
        <h3>형 변환 시 조심할 사항</h3>
        <pre>{`  int a = 1000000;  // 1,000,000
  int b = 2000000;  // 2,000,000
  long c = a * b;   // c는 -727379968
  int * int → int → no casting to Long so…
  long c = (long)a * b; // c는 2,000,000,000,000 !

  char c1 = 'a';
  char c2 = c1 + 1;// error
  char c2 =(char)(c1 + 1); // OK
  char c2 = ++c1
  int i = 'b' - 'a';
  int i = '2' - '0';`}</pre>
        <h3>비교 연산자는 형변환 후에 비교함 : {`< > == !`}</h3>
        <pre>{`  'A' < 'B' ->  65 < 66 → true
  '0' == 0  → 48 == 0 → false
  'A' != 65  → 65 != 65 → false
  10.0d == 10.0f  → 10.0d == 10.0d → true
  0.1d == 0.1f  → 0.1d == 0.1d → true? false?
  double d = (double)0.1f;
  System.out.println(d);  // 0.10000000149011612
  (float)0.1d == 0.1f → 0.1f == 0.1f → true`}</pre>
        </section>
      </main>
    </div>
  )
}

export default JavaDataType
