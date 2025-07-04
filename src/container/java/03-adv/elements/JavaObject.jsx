import React from 'react'

function JavaObject() {
  return (
    <div>
      <h1>Object class</h1>
  <h2>모든 클래스의 조상</h2>
<section>
  <h2>Object class method</h2>
  <h3>쓰레드와 관련된 메서드 : notify(), wait() 등</h3>
  <h3>override 필요 : equals(), hashCode(), toString()</h3>
  <h3>public Class getClass(); </h3>
</section>
<section>
  <h2>equals(Object obj)</h2>
  <pre>{`class Person {
  int id;
  Person(){};
  Person(int id){
    this.id = id;
  }
  @override
  public boolean equals(Object o) {
    if(o != null && o instanceof Person){
      return id == (Person) o.id;
    }
  }
}`} </pre>
</section>
    </div>
  )
}

export default JavaObject
