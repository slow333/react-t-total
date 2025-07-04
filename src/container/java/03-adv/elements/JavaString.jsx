import React from 'react'

function JavaString() {
  return (
    <div>
      <h1>String class</h1>
<section>
  <h3>Constructor</h3>
  <h4>String(char[] c); String(String str);</h4>
  <h2>methods</h2>
  <h4>char charAt(int index); String concat(String str); boolean contains(str);</h4>
  <h4>String reverse();</h4>
  <h4>int indexOf(char or String [, int pos]); int lastIndexOf(char or String); </h4>
  <h4>boolean equals(Object obj); boolean equalsIgnoreCase(str);</h4>
  <h4>boolean startsWith(str)/endsWith(str);</h4>
  <h4>int length();</h4>
  <h4>String replace(old, new); String replaceAll(regex, replacement); String replaceFirst(regex, replacement)</h4>
  <h4>String[] split(regex [, int limit]);</h4>
  <h4>String substring(int begin [, int end]);</h4>
  <h4>String toLowerCase()/toUpperCase();</h4>
  <h4>String trim();</h4>
  <h4>String valueOf(boolean || char || int || long || float || double || Object )</h4>
</section>
<section>
<pre>{`public class StringCount {
  private int count;
  private String source = "";

  public StringCount(String src) {
    this.source = src;
  }
  public int stringCount(String s){
    return stringCount(s, 0);
  }

  public int stringCount(String s, int pos){
    int index = 0;
    if(s == null || s.length() == 0){
      return 0;
    }
    if( (index = source.indexOf(s, pos)) != -1) {
      count++;
      stringCount(s, index + s.length());
    }
    return count;
  }
  public static void main(String[] args) {
    String str = "aabbccAABBCCaa";
    StringCount sc = new StringCount(str.toLowerCase());
    System.out.println(sc.stringCount("aa"));
  }
}`}</pre>
</section>

<h1>StringBuffer class</h1>
<pre>{`public final class StringBuffer implements java.io.Serializable{
  private char[] value;
  ...  
}`}</pre>
<section>
  <h3>String class와 달리 내용을 변경할 수 있다.</h3>
  <pre>{`StringBuffer sb = new StringBuffer("abc");
sb.append("123"); 
public StringBuffer(int length){
  value = new char[length];
  shared = false;
}
public StringBuffer(String str) {
  this(str.length() + 16);
  append(str);
}`}</pre>
  <h4>String class와 달리 equals()를 오버라이딩하지 않음. sb.equals(sb2); //false</h4>
</section>
<section>
  <h2>StringBuffer 생성자와 메서드</h2>
  <h3>생성자</h3>
  <h4>StringBuffer(); 16개 문자를 담는 인스턴스 생성</h4>
  <h4>StringBuffer(int length); StringBuffer(String str);</h4>
  <h3>method</h3>
  <h4>append(value); == boolean, char/char[], float/int/logn/double, Object, String</h4>
  <h4>int capacity(); //설정된 용량, int length(); //string size</h4>
  <h4>char charAt(int index);</h4>
  <h4>StringBuffer delete(int begin, int end);</h4>
  <h4>StringBuffer deleteCharAt(int index);</h4>
  <h4>StringBuffer insert(int pos, value); == boolean</h4>
  <h4>StringBuffer revers();</h4>
  <h4>void setLength(int newLength);</h4>
  <h4>String substring(int start [,int end])</h4>
</section>
    </div>
  )
}

export default JavaString
