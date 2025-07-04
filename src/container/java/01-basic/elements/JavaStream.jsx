import React from 'react'

function JavaStream() {
  return (
    <div>
      <h1>stream</h1>
    <section>
      <h2>스트림의 특징</h2>
      <p>Java 8부터 추가된 기술로 람다를 활용해 배열과 컬렉션을 함수형으로 간단하게 처리할 수 있는 기술이다.</p>
      <p>foreach, map, sort, reduce 등을 통합해서 사용 가능</p>
      <h5>원본 데이터 소스를 변경하지 않는다: 읽기만 한다.</h5>
      <h5>일회용이다: 한번 사용하면 닫혀서 재사용이 불가능하다.</h5>
      <h5>최종 연산 전까지 중간 연산을 수행하지 않는다.</h5>
      <h5>작업을 내부 반복으로 처리한다: forEach()는 매개변수에 대입된 람다식을 데이터 소스의 모든 요소에 적용한다.</h5>
      <h5>병렬 처리가 쉽다: 멀티쓰레드 사용</h5>
      <h5>기본형 스트림을 제공한다: Stream{`<Integer>`} 대신 IntStream이 제공되어서 오토박싱과 언박싱 등의 불필요한 과정이 생략되고 
        숫자의 경우 유용한 메소드를 추가로 제공한다. (.sum(), .average() 등) </h5>
    
      <h2>스트림 사용 절차</h2>
      <h4>배열 스트립: Arrays.stream();</h4>
  <pre>{`String[] arr = new String[]{"a", "b", "c"};
  Stream<String> stream = arr.stream();`}</pre>
      <h4>컬렉션 스트림: List.stream();</h4>
  <pre>{`List<String> list = Arrays.asList("a","b","c");
  Stream<String> stream = list.stream();`}</pre>
      <h4>Stream.builder();</h4>
  <pre>{`Stream<String> builderStream = Stream.<String>builder()
    .add("a").add("b").add("c")
    .build();`}</pre>
      <h3>람다식 : Stream.generate(), iterate()</h3>
  <pre>{` Stream<String> generatedStream = Stream.generate(() -> "a").limit(3);
  //"a","a","a" limit 없으면 무한대로 순환
  Stream<Integer> iteratedStream = Stream.iterate(0, n -> n*2).limit(5);
  //0,2,4,6,8`}</pre>
      <h3>기본 타입형 스트림</h3>
  <pre>{`IntStream intStream = IntStream.range(1, 5); //[1,2,3,4]`}</pre>
      <h3>병렬 스트림: parallelStream();</h3>
  <pre>{`Stream<String> parallelStream = list.parallelStream();`}</pre>
    </section>
  <section>
    <h2>중간 연산</h2>
    <h3>Filtering</h3>
    <h4>람다식의 리턴값은 boolean이고 true인 경우만 다음 단계진행</h4>
<pre>{`List<String> list = Arrays.asList("a","b","c");
Stream<String> stream = list.stream()
  .filter(list -> list.contains("a")); // [a]`}</pre>
    <h3>Mapping</h3>
    <h4>변하는 작업으로 값을 반환하여 새로운 스트림을 만듦</h4>
<pre>{`Stream<String> stream = list.stream()
  .map(String::toUpperCase); // [A, B, C]
  OR .map(Integers::parseInt); // 문자열 -> 정수`}</pre>
    <h3>Sorting</h3>
    <h4>Comparator 사용</h4>
<pre>{`Stream<String> stream = list.stream()
  .sorted() // [a,b,c]
  .sorted(Comparator.reverseOrder()); // [c,b,a]
List<String> list = Arrays.asList("a","bb","ccc")
  .sorted(Comparator.comparingInt(String::length)); // [ccc,bb,a] `}</pre>
    <h3>기타연산</h3>
<pre>{`Stream<String> stream = list.stream()
  .distinct()  // 중복제거
  .limit(max)  //최대크기 제한
  .skip(n)    //앞에서 n개 건너뛰기
  .peek(System.out::println) // 중간 작업결과 확인`}</pre>

    <h2>연산, 결과 만들기</h2>
    <h3>Calculating</h3>
<pre>{`IntStream stream = list.stream()
  .count()   //스트림 요소 개수 반환
  .sum()     //스트림 요소의 합 반환
  .min()     //스트림의 최소값 반환
  .max()     //스트림의 최대값 반환
  .average() //스트림의 평균값 반환`}</pre>
    <h3>Reduction</h3>
<pre>{`IntStream stream = IntStream.range(1,5)
  .reduce(10, (total,num)->total+num);
    //reduce(초기값, (누적 변수,요소)->수행문) 10 + 1+2+3+4+5 = 25`}</pre>
    <h3>Collecting</h3>
<pre>{`List<Person> members = Arrays.asList(
  new Person("lee",26),
  new Person("kim", 23),
  new Person("park", 23));

// toList() - 리스트로 반환
members.stream()
	.map(Person::getLastName)
  .collect(Collectors.toList()); // [lee, kim, park]
  OR .toList();

// joining() - 작업 결과를 하나의 스트링으로 이어 붙이기
members.stream()
  .map(Person::getLastName)
  .collect(Collectors.joining(delimiter="+",prefix="<",suffix=">");
  // <lee+kim+park>

//groupingBy() - 그룹지어서 Map으로 반환
members.stream()
  .collect(Collectors.groupingBy(Person::getAge));
	// {26 = [Person{lastName="lee",age=26}],
  // 23 = [Person{lastName="kim",age=23}, Person{lastName="park",age=23}] }

//collectingAndThen() - collecting 이후 추가 작업 수행
members.stream()
  .collect(Collectors.collectingAndThen
    (Collectors.toSet(), Collections::unmodifiableSet));
	//Set으로 collect한 후 수정불가한 set으로 변환하는 작업 실행`}</pre>
    <h3>Matching</h3>
    <h4>특정 조건을 만족하는 요소가 있는지 체크한 결과를 반환: anyMatch(하나라도 만족하는 요소가 있는지), allMatch(모두 만족하는지), noneMatch(모두 만족하지 않는지)</h4>
<pre>{`List<String> members = Arrays.asList("Lee", "Park", "Hwang");
boolean matchResult = members.stream()
  .anyMatch(members -> members.contains("w"));
  //w를 포함하는 요소가 있는지, True
boolean matchResult = members.stream()
  .allMatch(members -> members.length() >= 4);
  //모든 요소의 길이가 4 이상인지, False
boolean matchResult = members.stream()
  .noneMatch(members -> members.endsWith("t"));
  //t로 끝나는 요소가 하나도 없는지, True`}</pre>
    <h3>Iterating</h3>
<pre>{`members.stream()
  .map(Person::getName)
  .forEach(System.out::println); //결과를 출력(peek 중간, forEach 최종)`}</pre>
    <h3>Finding</h3>
    <h4>스트림에서 하나의 요소를 반환</h4>
<pre>{`Person person = members.stream()
  .findAny()
  //먼저 찾은 요소 하나 반환, 병렬 스트림의 경우 첫번째 요소가 보장되지 않음
  .findFirst() //첫번째 요소 반환`}</pre>
  </section>
  <section>
    <h2>toList(), collect(Collectors.toList())</h2>
    <pre>{` List<String> list = new ArrayList<>();
  list.add("Apple");
  list.add("Strawberry");
  list.add("Banana");
  list.add("Orange");
  list.add("Mango");
  list.add("Watermelon");

  List<String> result = list.stream()
      .filter(fruit -> fruit.length() > 5)
      .collect(Collectors.toList());
    // .toList(); 하면 추가 안됨

  result.add("Pineapple"); // 추가 가능
    // .toList();하면 UnsupportedOperationException 발생

  for (String fruit : result) {
      System.out.println(fruit);
  } `}</pre>
  </section>
    </div>
  )
}

export default JavaStream
