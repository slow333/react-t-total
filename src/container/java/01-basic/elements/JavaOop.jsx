import React from 'react'

function JavaOop() {
  return (
    <div>
      <h1>OOP 기본</h1>
      <section>
        <h2>객체와 인스턴스</h2>
        <h3>객체는 인스턴스를 포함하는 일반적인 의미</h3>
        <h3>{`클래스 -> 인스턴스화 -> 인스턴스(객체)`}</h3>
      </section>
    <section>
      <h2>class에서 변수 선언 위치에 따른 변수의 종류</h2>
      <h3>인스턴스 변수: int iv;</h3>
        <h4> 각 인스턴스의 개별적인 저장 공간. 인스턴스마다 다른 값 저장 가능</h4>
        <h4>인스턴스 생성 후, '참조변수.인스턴스변수명' 으로 접근 가능</h4>
      <h3>클래스 변수: static int classValiable;</h3>
        <h4>같은 클래스의 모든 인스턴스들이 공유하는 변수</h4>
        <h4>인스턴스 생성없이 '클래스이름.클래스변수명'으로 접근</h4>
      <h3>지역변수: 매서드에서 선언한 변수</h3>
      <h3>this</h3>
        <h4>객체 자신을 가리키는 참조변수</h4>
        <h4>인스턴스메서드에서만 사용 가능</h4>
        <h4>지역변수와 인스턴스변수를 구별할 때 사용</h4>
        <h4>클래스 메서드 내에서는 사용할 수 없다.</h4>
    </section>
    <section>
      <h2>변수의 초기화 순서</h2>
      <h3>클래스변수의 초기화 시점 : 클래스가 처음 로딩될 때 단 한번 초기화 된다</h3>
      <h3>클래스변수의 초기화 순서 :  기본값 → 명시적 초기화 → 클래스 초기화 블럭</h3>
      <h3>인스턴스변수의 초기화 시점 : 인스턴스가 생성될 때마다 각 인스턴스별로 초기화가 이루어진다</h3>
      <h3>인스턴스변수의 초기화 순서 : 기본값 → 명시적 초기화 → 인스턴스 초기화 블럭 생성자</h3>
    </section>
    <section>
      <h2>JVM 메모리구조</h2>
      <h3>Method Area: 글래스 정보와 클래스 변수가 저장되는 곳</h3>
      <h3>Call stack: 메서드의 작업 공간. 메서드가 호출되면 메서드 수행에 필요한 메모리 공간을 할당 받고
        메서드가 종료되면 메모리를 반환</h3>
      <h3>heap : 인스턴스가 생성되는 공간, new 연산자에 의해서 생성되고 배열과 객체는 모두 여기에 생성</h3>
    </section>

    <h1>OOP 1</h1>
    <section>
      <h2>멤버변수 초기화</h2>
  <pre>{`class Product {
    static int counter = 0;
    int serialNumber;
    { // 인스턴스 초기화 블럭: 모든 생성자 생성시 수행
      counter++;
      serialNumber = counter;
    }
    public Product() {};

    public static void main(String[] args) {
      Product product = new Product();
      Product p2 = new Product();
      Product p3 = new Product();
      System.out.println(Product.counter);
    };
  }`} </pre>
    </section>
    <section>
      <h2>인터페이스</h2>
      <h3>모든 멤버변수는 public static final 이면 생략가능</h3>
      <h3>모든 메서드는 public abstract 이며 생략 가능</h3>
      <h3>interface는 Object 클래스와 같은 최고 조상이 없다.</h3>
      <pre>{`interface PlayingCard {
  public static final int SPADE =4;
  final int DIAMOND =3;
  static int HEART = 2;
  int CLOVER = 1;
  public abstract String getCardNumber();
  String getCardKind();  
}`}</pre>
    <h4>Unit interface 활용 예시</h4>
    <pre>{`interface Repairable {};

  public class Unit {
    int hitPoint;
    final int MAX_HP;
    
    Unit(int hp){  MAX_HP = hp;  }
  }

  class AirUnit extends Unit {
    AirUnit (int hp){ super(hp); }
  }
  class GroundUnit extends Unit {
    GroundUnit (int hp){ super(hp);  }
  }

  class Marine extends Unit implements Repairable {
    Marine (int hp) { super(hp); }
  }
  class Goliat extends GroundUnit implements Repairable {
    Goliat(int hp) { 
      super(100); 
      hitPoint = MAX_HP;
    }
  }
  class Tank extends GroundUnit implements Repairable{
    Tank(){
      super(150);
      hitPoint = MAX_HP;
    }
    public String toString() { return "Tank"; }
  }
  class SCV extends GroundUnit implements Repairable {
    SCV() {
      super(60);
      hitPoint = MAX_HP;
    }

    void repair(Repairable r) {
      if( r instanceof Unit) {
        Unit u = (Unit) r;
        while (u.hitPoint < u.MAX_HP) {  u.hitPoint++; }
      }
    }
  }
  class UnitEx {
    public static void main(String[] args) {
      SCV scv = new SCV();
      Tank tank = new Tank();
      tank.hitPoint = 100;
      scv.repair(tank);
      System.out.println(tank.hitPoint);
    }
  }`}</pre>
  </section>
    </div>
  )
}

export default JavaOop
