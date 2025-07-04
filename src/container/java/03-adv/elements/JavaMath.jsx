import React from 'react'

function JavaMath() {
  return (
    <div>
      <h1>Math class</h1>
<section>
  <h3>Method; 모두 static 임</h3>
  <h4>int/float/long/double abs(int || float || double || long)</h4>
  <h4>double ceil/floor(double a); 올림/버림</h4>
  <h4>int/float/long/double max/min(int || float || double || long)</h4>
  <h4>double random(); long round(double || float)</h4>
  <h4>double rint(double a); 주어진 double 값과 가장 가까운 double형 값</h4>
</section>
<section>
  <h3>wrapper class</h3>
  <h4>기본형을 클래스로 정의한 것</h4>
  <h4>Boolean(true || "true"); Character('a'); Byte(10 || "10");</h4>
  <h4>Short(10 || "10"); Integer(100 || "100");</h4>
  <h4>Long(100 || "100"); Float(1.0 || 1.0f || "1.0f");</h4>
  <h4>Double(1.0 || "1.0")</h4>
  <pre>{`public final class Interger extends Number implements Comparable {
    ...
    private int value;  
  }`}</pre>
  <h4>equals()가 오버라이딩되어 있음</h4>
  <pre>i.equals(i2); // true</pre>
</section>
<section>
  <h2>Number class</h2>
<pre>{`Object - Booleand
  - Character
  - Number
  - Byte,Short,Integer,Long,Float,Double,BigInteger,BigDecimal`}</pre>
</section>
    </div>
  )
}

export default JavaMath
