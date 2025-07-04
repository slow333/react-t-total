import React from 'react'

function JavaEnum() {
  return (
    <div>
      <h1>enum</h1>
  <h3>열거형으로 선언된 순서에 따라 0 부터 인덱스 값을 가진다. 순차적으로 증가된다.</h3>
  <h3>enum 열거형으로 지정된 상수들은 모두 대문자로 선언</h3>
<section>
  <h2>클래스 선언</h2>
  <h3>별도의 .java 선언</h3>
  <pre>{`//DevType.java
package EnumExample;

public enum DevType {
  MOBILE, WEB, SERVER
}

//Developer.java
package EnumExample;

public class Developer {
  public String name;
  public int career;
  public DevType type;
}  `}</pre>
  <h3>Class 내부에서 선언</h3>
  <pre>{`//Developer.java

package EnumExample;
package EnumExample;

public class Developer {
  public String name;
  public int career;
  public enum DevType {
    MOBILE, WEB, SERVER
  }
}`}</pre>
  <h3>Class 외부에서 선언</h3>
  <pre>{`//  Develoer.java
package EnumExample;

public class Developer {
  public String name;
  public int career;
  public DevType type;
}
enum DevType {
  MOBILE, WEB, SERVER
  }`}</pre>

  <h2>특징</h2>
  <h3>클래스를 상수처럼 사용 할 수 있다.</h3>
  <p>Rank.FIVE 와 같은 형태로 상수처럼 사용</p>
<pre>{`public enum Rank {
  THREE(3, 4_000),
  FOUR(4, 10_000),
  FIVE(5, 30_000);

  private final int match;
  private final int money;
  private int count;

  Rank(int match, int money) {  // Default 생성자는 private 으로 설정되어 있음.
    this.match = match;
    this.money = money;
}`}</pre>
<pre>{`package EnumExample;

public class Developer {
  public String name;
  public int career;
  public DevType type;

  public static void main(String[] args) {
    Developer developer = new Developer();
    developer.name = "홍길동";
    developer.career = 3;
    developer.type = DevType.WEB;
    System.out.println("개발자 이름 : " + developer.name);
    System.out.println("개발자 경력 : " + developer.career);
    System.out.println("직무파트 : " + developer.type);
  }
}
enum DevType {
  MOBILE, WEB, SERVER
}
//  개발자 이름  : 홍길동   개발자 경력  : 3  직무파트     :  WEB`}</pre>
  <h3>상수 값과 같이 유일하게 하나의 인스턴스가 생성됨</h3>
  <p>Enum 클래스에서 선언한 상수들은 클래스가 로드될 때 하나의 인스턴스로 생성되어 싱글톤 형태로 어플리케이션 전체에서 사용된다. 싱글톤으로 사용되기 때문에 각각의 Enum 인스턴스에 변수를 추가하여 사용하는 것은 Multi Thread 환경에서 위험할 수 있다. 아래의 예시를 보면 각각의 인스턴스에 count 라는 변수가 추가되어 있는데 외부에서 각 등수에 맞게 plusCount() 를 호출 할 수 있다. 하지만 멀티 쓰레드 환경에서는 각 인스턴스의 count가 공유되고 있기 때문에 조심해야 한다.</p>
<pre>{`public enum Rank {
  THREE(3, 4_000),
  FOUR(4, 10_000),
  FIVE(5, 30_000);

  private final int match;
  private final int money;
  private int count;
  Rank(int match, int money) {
    this.match = match;
    this.money = money;
  }
  public void plusCount() {
    this.count++;
  }
}`}</pre>
  <p>모든 enum들은 내부적으로 java.lang.enum 클래스에 의해 상속된다. 자바는 다중 상속을 지원하지 않기 때문에 Enum은 다른 클래스를 상속받을 수 없다. toString() 메서드는 상수의 이름을 리턴하도록 구현되어 있다.</p>
<pre>{`public static void main(String[] args) {
System.out.println(Rank.FIVE.toString());
} // 결과 : FIVE`}</pre>
</section>
<section>
  <h2>Enum의 내부 Api:Enum 메소드</h2>
  <h3>values(): 전체 값(인스턴스를 반환)</h3>
<pre>{`public static void main(String[] args) {
  Rank[] values = Rank.values();
  for(int i = 0; i< values.length; i++) {
  System.out.println(values[i]);
  }
} // 실행 결과 : THREE, FOUR, FIVE`}</pre>
  <h3>valueOf(): index를 반환</h3>
<pre>{`public static void main(String[] args) {
  System.out.println(Rank.valueOf("THREE"));
}  // 실행 결과 : THREE`}</pre>
  <h3>ordinal()</h3>
  <p>Enum 클래스 내부에 있는 상수들의 Index 를 리턴하는 메소드이다. 배열과 마찬가지로 0부터 인덱스가 시작하며 인덱스의 length 는 상수의 수 - 1 이다.</p>
<pre>{`public static void main(String[] args) {
  Rank[] values = Rank.values();
  for(int i = 0; i< values.length; i++) {
  System.out.println(values[i] + "인덱스는 : " + values[i].ordinal());
  }
}  // 실행 결과 THREE인덱스는 : 0 FOUR인덱스는 : 1 FIVE인덱스는 : 2`}</pre>

    <h2>사용 및 활용</h2>
    <h3>데이터의 그룹화 및 관리에 용이</h3>
    <p>관련되어 있지만 관련성을 표시하기 힘든 형태의 데이터를 한 곳에서 관리할 수 있다. 예를 들어 경기 이 후 승리한 사람과 패배한 사람을 리스트로 관리한다고 생각해보자. 이 경우 리스트의 변수명을 통해 관리하거나 Player 라는 클래스를 각기 상속 받는 형태로 관리하는 등의 방법으로 관리 될 수 있다. 하지만 Enum을 사용한다면 보다 명확한 방법으로 이들의 관계를 가시적으로 표현 할 수 있다.</p>
  <pre>{`public enum  Winner {
  WINNER("승리", Arrays.asList("kyle","pobi","hello","world")),
  LOSER("패배", Arrays.asList("hodol","dunddoung","rutgo");

  private final String winner;
  private final List&lt;String> list;

  Winner(String winner, List&lt;String> list) {
    this.winner = winner;
    this.list = list;
  }
  public boolean isWinner(String name) {
  return WINNER.list.contains(name);
  }

  public int getWinnerSize() {
  return WINNER.list.size();
  }
}`}</pre>
    <h3>데이터 모아서 관리</h3>
    <p>비슷한 예로 구매한 로또와 당첨번호가 같은 갯수, 그리고 각 갯수에 대응하는 상금 등과 같이 관련된 데이터도 하나의 Enum으로 관리</p>
<pre>{`public enum Statistic {
  THREE(3, 5000),
  FOUR(4, 50_000),
  FIVE(5, 1_500_000),
  BONUS(5, 3_000_000),
  SIX(6, 2_000_000_000);

  private final int matchingNumbers;
  private final int prize;

  Statistic(int matchingNumbers, int prize) {
    this.matchingNumbers = matchingNumbers;
    this.prize = prize;
  }

  public static Statistic getRank(int numberOfMatch) {
    return Arrays.stream(values())
      .filter(statistic -> statistic.matchingNumbers == numberOfMatch)
      .findFirst()
      .orElseThrow(new IllegalArgumentException("일치하는 번호가 3미만입니다."))
}`}</pre>
    <h3>Lambda를 활용한 Enum 사용 극대화</h3>
    <p>Enum은 자바의 익명함수 인터페이스 및 커스터마이징 익명 함수를 이용하면서 다양한 방법으로 활용 될 수 있다. 간단한 계산기 프로그램을 살펴보자.</p>
<pre>{`public interface Calculator {
  int calculate(int a, int b);
}
class Plus implements Calculator{
  @Override
  public int calculate(int a, int b) {
    return a + b;
  }
}
class Minus implements Calculator{
  @Override
  public int calculate(int a, int b) {
    return a - b;
  }
}
class Multiply implements Calculator{
  @Override
  public int calculate(int a, int b) {
  return a * b;
  }
}
class Divide implements Calculator{
  @Override
  public int calculate(int a, int b) {
    if(b == 0)
      throw new ArithmeticException();
    return a / b;
  }
}

import java.util.function.BiFunction;
public enum Operator {
  PLUS("더하기", (a, b) -> (a + b)),
  MINUS("빼기", (a, b) -> (a - b)),
  MULTIPLY("곱하기", (a, b) -> (a * b)),
  DIVIDE("나누기", (a, b) -> (a / b));

  private final String name;
  private final BiFunction&lt;Double, Double, Double> biFunction;

  Operator(String name, BiFunction&lt;Double, Double, Double> biFunction) {
    this.name = name;
    this.biFunction = biFunction;
  }

  public Double calculate(double a, double b) {
    return this.biFunction.apply(a,b);
  }
}`}
</pre>
  </section>
    </div>
  )
}

export default JavaEnum
