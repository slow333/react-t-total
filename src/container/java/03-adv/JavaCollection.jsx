import React from 'react'

function JavaCollection() {
  return (
    <div>
      <h1>Collection Framework</h1>
      <h2>java.util 패키지에 포함; ArrayList, HashSet 등</h2>
      <h3>Collection 인터페이스 : List 인터페이스, Set 인터페이스</h3>
      <h4>List 구현 클래스: ArrayList, LinkedList, Stack, Vector 등</h4>
      <h4>Set 구현 클래스 : HashSet, TreeSet 등</h4>
      <h3>Map interface 구현 클래스 : HashMap, TreeMap, Hashtable, Properties 등</h3>
      <section>
      <h2>Collection interface method</h2>
        <h4>booleand add(Object o); boolean addAll(Collection c); </h4>
        <h4>void clear(); boolean remove(Object o); boolean removeAll(Collection c);</h4>
        <h4>boolean contains(Object o); boolean containsAll(Object o);</h4>
        <h4>boolean equals(Object o);</h4>
        <h4>int hashCode();</h4>
        <h4>boolean isEmpty();</h4>
        <h4>iterator iterator(); Collection의 itorator를 얻어서 반환</h4>
        <h4>boolean retainAll(Collection c); Collection에 포함된 객체만 남기고 삭제(삭제했으면 true);</h4>
        <h4>int size();</h4>
        <h4>Object[] toArray(); Collection에 저장된 객체를 Object[]로 반환</h4>
        <h4>Object[] toArray(Object[] a); 지정된 배열에 Collection의 객체를 저장해서 반환</h4>
      </section>
      <section>
        <h2>List interface method</h2>
        <h4>void add(int index, Object element) : 주어진 인덱스에 객체 추가</h4>
        <h4>boolean addAll(int index, Collection c) : 주어진 인덱스에 컬렉션 추가</h4>
        <h4>Object set(int index, Object element) : 지정된 위치(인덱스)에 객체 저장</h4>
        <h4>Object get(int index) : 지정된 위치(인덱스)에 있는 객체 반환</h4>
        <h4>int indexOf/lastIndexOf(Object o) : 지정된 객체의 위치(인덱스) 반환<br/>
            (첫번째 요소부터 순방향/마지막 요소부터 역방향)</h4>
        <h4>ListIterator listIterator()/listIterator(int index) : List의 객체에 접근할 수 있는 ListIterator 반환</h4>
        <h4>List subList(int fromIndex, int toIndex) : 지정된 범위에 있는 객체 반환</h4>
        <h4>Object remove(int index) : 주어진 인덱스에 있는 객체를 삭제하고 지운 객체를 반환</h4>
        <h4>boolean remove(Object o) : 주어진 객체 삭제</h4>
        <h4>void sort(Comparator c) : 주어진 비교자(comparator)로 List 정렬</h4>
      </section>
      <section>
        <h2>Set interface method</h2>
        <h4>boolean add(Object o);</h4>
        <h4>void clear();</h4>
        <h4>boolean contains(Object o);</h4>
        <h4>boolean equals(Object o);</h4>
        <h4>int hashCode();</h4>
        <h4>boolean isEmpty();</h4>
        <h4>iterator iterator(); Collection의 itorator를 얻어서 반환</h4>
        <h4>boolean remove(Object o) : 주어진 객체 삭제</h4>
        <h4>int size();</h4>
        <h4>Object[] toArray(); Collection에 저장된 객체를 Object[]로 반환</h4>
        <h4>Object[] toArray(Object[] a); 지정된 배열에 Collection의 객체를 저장해서 반환</h4>
        <h3>Set을 통해 적용된 객체에는 equals()와 hashCode()가 오러바이드되어 있어야함</h3>
      </section>
      <section>
        <h2>집합과 관련된 메서드(Collection에 변화가있으면 true, 아니면 false)</h2>
        <h4>boolean addAll(Collection c); 지정된 Collection의 객체를 Collection에 추가(합집합)</h4>
        <h4>boolean containsAll(Collection c); 지정된 Collection의 객체에 Collection이 포함되어 있는지 확인(부분집합)</h4>
        <h4>boolean removeAll(Collection c); 지정된 Collection에 포함된 객체들을 삭제(차집합)</h4>
        <h4>boolean retainAll(Collection c); 지정된 Collection에 포함된 객체만 남기고 삭제(교집합)</h4>
      </section>
      <section>
        <h2>Map interface Methods</h2>
        <h4>void clear();</h4>
        <h4>boolean containsKey(Object key); boolean containsValue(Object value);</h4>

        <h4>Set entrySet(); Map에 저장되있는 key-value쌍을 Map.Entry 타입의 객체로 저장한 Set으로 반환</h4>
        <h4>Set keySet(); Map에 저장된 모든 key객체를 반환</h4>
        <h4>Collection values(); Map에 저장된 모든 value 객체를 반환</h4>

        <h4>Object get(Object key);</h4>
        <h4>boolean equals(Object o);</h4>
        <h4>int hashCode();</h4>
        <h4>boolean isEmpty();</h4>
        <h4>Object put(Object key, Object value);</h4>
        <h4>void putAll(Map t); 지정된 Map의 모든 key-value쌍을 추가</h4>
        <h4>Object remove(Object key);</h4>
        <h4>int size();</h4>
      </section>
      <section>
        <h2>Iterator</h2>
        <h4>boolean hasNext() : 있다면 true, 없다면 false 반환</h4>
        <h4>Object next() : 다음 요소 읽어오기(hasNext()로 확인 후 사용하는 것이 안전)</h4>
        <h4>void remove() : 읽어온 요소 삭제하기(next()로 읽어온 후 사용해야 함)</h4>
        <h3>ListIterator는 Iterator의 접근성을 향상 시킨 것</h3>
    <pre>{`Iterator<String> iterator = fruit.iterator();
  while(iterator.hasNext()){
    String str = iterator.next();
    if(str.equals("banana")){
        iterator.remove();
    }
  }`}</pre>
      <h3>ListIterator에는 더 많은 메서드가 있음: Iterator + </h3>
      <h4>Object previous();</h4>
      <h4>int nextIndex(); int previousIndex();</h4>
      <h4>void add(Object o); next()/previous()로 읽어 온 뒤에 지정된 객체를 추가</h4>
      <h4>void set(Object o); next()/previous()로 읽어 온 요소를 지정된 객체로 변경</h4>
    </section>
    <section>
      <h2>Arrays; 배열을 다루기 편한 메서드 제공</h2>
      <h4>toString(); 배열의 출력</h4>
      <pre>static String toString(boolean[], byte[], char[], int[], ...)</pre>
      <h4>다차원 배열의 비교와 출력: deepEquals(), deepToString(), equals();</h4>
    <pre>{`System.out.println(Arrays.deepToString(2Darray);//아니면 객체 ref를 출력
    Arrays.deepToEquals(str2D, str2D2);
    Arrays.equals(str, str2);`}</pre>
    <h4>copyOf(), copyOfRange();</h4>
    <pre>{`int[] arrCopy = Arrays.copyOf(OriginalArray, wantedLength);//넘치면 0으로 채움
    int[] arrayRange = Arrays.copyOfRange(OriginalArray, startIndex, endIndex);`}</pre>
    <h4>fill(), setAll();</h4>
    <pre>{`int[] intarr = new int[5];
    Arrays.fill(intarr, 9); // [9,9,9,9,9]
    Arrays.setAll(arr, () -> (int)(Math.random()*5)+1);// [1,2,3,2,5]`}</pre>
    <h4>asList(Object... a);</h4>
<pre>{`List list = Arrays.asList(1,3,5,6,6);
List list = Arrays.asList(new Integer[] {1,3,4,5,6,4});
위방법으로 하면 추가 안됨; list.add(99); 애러남
List list = new ArrayList(Arrays.asList(1,2,3,4));// 변경 가능한 ArrayList 생성`}</pre>
      <h4>sort(), binarySearch();</h4>
  <pre>int idx = ArrayList.binarySearch(arr, 2);// 결과 이상함
Arrays.sort(arr);
int idx = ArrayList.binarySearch(arr, 2);// sort 후에는 정상 </pre>
      </section>
      <section>
        <h2>Comparator, Comparable interface</h2>
<pre>{`Arrays.sort(arr, new DescComp());

class DescComp implements Comparator {
  public int compare(Object a, Object b) {
    if(!(a instanceof Integer)) return -1;
    if(!(b instanceof Integer)) return -1;
  Integer i1 = (Integer) a;
  Integer i2 = (Integer) b;
  return i1.compareTo(i2)*-1; // 기본 정렬의 반대
  }`}</pre>
      </section>
      <section>
        <h2>HashSet</h2>
<pre>{`HashSet<String> coffee = new HashSet&lt>();
  coffee.add("americano");
  coffee.add("americano");
  coffee.add("latte");
  coffee.add("espresso");
  coffee.add("cold brew");

  Iterator it = coffee.iterator();

  while(it.hasNext()){
      System.out.println(it.next());
  }`}</pre>
        <h3>Set을 활용해 객체를 추가할려면 equals(), hashCode()를 오버라이드 해야함</h3>
    <pre>{`class Person {
  String name; int age;
  Person(String name, int age){
    this.name = name;
    this.age = age;
}
  public boolean equals(Object o){
    if(!(o instanceof Person)) return false;
    return o.name.equals(name) && age == o.age;
  }
  public int hashCode(){
    return (age+name).hashCode();
  }
}`}</pre>
    <h3>TreeSet: 정렬된 Set</h3>
    </section>
    <section>
      <h2>HashMap</h2>
      <h3>hashing 기법으로 데이터를 저장. 데이터가 많아도 검색이 빠름</h3>
      <h3>Methods</h3>
      <h4>HashMap(); HashMap(int initialCapacity); HashMap(int initialCapacity, float loadFactory);</h4>
      <h4>HashMap(Map m);</h4>
      <h4>Object get(Object key) : 주어진 key객체에 대응하는 value객체를 찾아서 반환</h4>
      <h4>Object getOrDefault(Object key, Object  defaultValue);</h4>
      <h4>Set entrySet() : key-value쌍으로 구성된 모든 Map.Entry 타입의 객체를 Set에 담아서 리턴</h4>
      <h4>Set keySet() : Map에 저장된 모든 key를 Set 객체에 담아서 리턴</h4>
      <h4>Collection values() : Map에 저장된 모든 value 객체 반환</h4>
      <h4>int size() : 저장된 key-value 쌍의 총 갯수 리턴</h4>
      <h4>Object put(Object key, Object value) : Map에 저장<br/>
        (새로운 키 null 리턴, 동일한 키가 있을 경우 값 대체하고 이전값 리턴)</h4>
      <h4>void putAll(Map m);</h4>
      <h4>Object remove(Object key) : 주어진 key객체와 일치하는 key-value 객체 삭제</h4>
      <h4>void clear() : 모든 Map.Entry(key-value) 삭제</h4>
      <h4>Object replace(Object key, Object value);</h4>
      <h4>boolean replace(Object key, Object Old, Object new);</h4>
      <h4>boolean containsKey(Object key)	: true, false 리턴</h4>
      <h4>boolean containsValue(Object value) : true, false 리턴</h4>
      <h4>boolean isEmpty();</h4>
      <h4>boolean isEmpty() : 컬렉션이 비어 있는지 확인</h4>
    <pre>{`Map<String, Integer> map = new HashMap<>();
map.put("빨", 1);  map.put("주", 2);  map.put("노", 3);  map.put("초", 4);
map.put("파", 5);  map.put("남", 6);  map.put("보", 7);

System.out.println("총 entry 수 : " + map.size());
System.out.println("빨 : " + map.get("빨"));

Set<String> keySet = map.keySet();
Iterator<String> keyIterator = keySet.iterator();
while(keyIterator.hasNext()){
    String key = keyIterator.next();
    Integer value = map.get(key);
    System.out.println(key + " : " + value);
}    `}</pre>
      </section>
      <section>
        <h2>TreeMap</h2>
        <h3>TreeSet 처럼 데이터를 정렬(키)해서 저장</h3>
        <h3>TreeSet은 TreeMap을 이용해서 구현되어 있음</h3>
      </section>
      <section>
        <h2>Collectins static methods</h2>
        <h4>fill(), copy(), sort(), binarySearch()</h4>
        <h4>컬렉션 동기화 : syncronizedConllection,List,Set,Map,SortedMap,...</h4>
        <h4>변경불가 컬렉션 : unmodifiableCollection,List,Set,Map,...</h4>
        <h4>싱글톤 컬렉션 : singletonList, Map and singleton(Set은 Set없음)</h4>
      </section>

    </div>
  )
}

export default JavaCollection
