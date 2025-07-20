import React from 'react'

function IDESetting() {
  return (
    <div>
      <div className="for-space" id='spring-ide-setting'></div>
      <h1>intelliJ 설정하기</h1>

      <h3>H2 DB설정</h3>
      <h4>application.properties에서 spring.datasource.url=jdbc:h2:~/local;AUTO_SERVER=true 하면</h4>
      <h4>JUnit @Test의 method에 @Transactional을 하면 insert안됨</h4>
      <h4>;AUTO_SERVER=true 해주어야 서버 실행상태에서 추가 작업 가능, 아니면 서버가 연결상태면 lock걸려 다른 작업안됨</h4>
      <h3>Lombok plugin 설치 필요</h3>
      <h3>dev tool 설정</h3>
      <h4>{`setting > Build, Execution... > Compiler > Build project Automatically ; check`}</h4>
      <h4>{`setting > Advanced Settings > Compiler > Allow auto-make to ...  ; check`}</h4>

      <h1>STS 설정하기: MVC</h1>
      <p>이클립스 : https://www.eclipse.org/downloads/packages/ 에 접속해서 Eclipse IDE for Enterprise Java Developers를 다운로드</p>

      <h3>2.3. 이클립스 package explorer 로 프로젝트 뷰 변경</h3>
      <ul>
        <li>window {`->`} show view {`->`} other를 차례로 클릭한다.</li>
        <li>Java {`->`} package explorer {`->`} open을 차례로 클릭한다.</li>
        <li>아래의 탭을 끌어서 왼쪽에 붙여넣는다.</li>
      </ul>
      <h3>2.4. 이클립스 sts 플러그인 설치</h3>
      <ul>
        <li>help {`->`} eclipse marketplace 를 누른다.</li>
        <li>spring tools 3 StandAlone Edition을 검색 후 install 버튼을 클릭한다.</li>
        <li>라이센스에 동의한다.</li>
        <li>오른쪽 하단 installing software 지나가길 기다린다.</li>
        <li>restart now 메세지가 나오면 이클립스를 재시작한다.</li>
      </ul>

      <h3>스프링 툴스를 설치한다.(spring 기본 셋팅된 버젼)</h3>

      <h3>2.5. 마리아디비 설치: root 암호 1111</h3>
      <h4>Enable access ...: check; Use UTF8 as ...: check</h4>
      <h4>Service Name: MariaDB; TCP port: 3306; Buffer pool size: 3056MB; Page size: 16MB</h4>
      <h3>2.6. HeidiSQL 설치: 마리아디비 설치시 설치됨</h3>
      <h4>HeidiSQL은 Mysql GUI 관리 프로그램이다. https://www.heidisql.com/ 에서 다운로드해서 설치해 두자.</h4>

      <h3>실행 Test</h3>
    <pre>{`@Controller
public class HelloController {
  @GetMapping("/")
  @ResponseBody
  public String hello() {
      return "Hello World";
  }
}`}</pre>
      <h4>서비스포트 변경: src/main/resources/application.properties ; server.port = 8090</h4>

      <h3>Spring Boot Devtools; 자동으로 서버 갱신</h3>
      <h4>build.gradle</h4>
      <h5>dependencies 추가 : developmentOnly 'org.springframework.boot:spring-boot-devtools'</h5>
      <h5>build.gradle 우클릭 gradle{` > `}refresh Gradle Project</h5>
      <h5>Boot Dashboard가 devtool로 바뀜</h5>

      <h3>Lombok 설치</h3>
      <h4>소스 코드를 작성할 때 자바 클래스에 애너테이션을 사용하여 자주 쓰는 Getter 메서드, Setter 메서드, 생성자 등을 자동으로 만들어 주는 도구</h4>
    <pre>lombok plug-in download : https://projectlombok.org/download</pre>
    <pre>down 위치에서 : java -jar lombok.jar</pre>
      <h4>specify location에서 sts 설치위치 지정 {` > `} install </h4>
      <h4>sts 재시작 후: build.gradle 수정</h4>
    <pre>compileOnly 'org.projectlombok:lombok'
  annotationProcessor 'org.projectlombok:lombok'</pre>
      <h5>build.gradle 우클릭 gradle{` > `}refresh Gradle Project</h5>

      <h4>lombok으로 Getter, Setter 메서드 만들기</h4>
<pre>{`package com.mysite.sbb;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class HelloLombok {
    private String hello;
    private int lombok;
    public static void main(String[] args) {
        HelloLombok helloLombok = new HelloLombok();
        helloLombok.setHello("헬로");
        helloLombok.setLombok(5);

        System.out.println(helloLombok.getHello());
        System.out.println(helloLombok.getLombok());
    }
}`}</pre>
      <h5>constructor 생성자</h5>
      <p>변수가 반드시 private final 이어야함</p>
<pre>{`import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class HelloLombok {
  private final String hello;
  private final int lombok;

  public static void main(String[] args) {
    HelloLombok helloLombok = new HelloLombok("김이용", 33);

    System.out.println(helloLombok.getHello());
    System.out.println(helloLombok.getLombok());
  }
}`}</pre>

    <h3>이전 버젼 spring boot 만들기</h3>
    <h4>우선 최신 버젼을 만들고 난 후에 pom.xml, build.gradle을 하위 버젼으로 수정</h4>
    </div>
  )
}

export default IDESetting
