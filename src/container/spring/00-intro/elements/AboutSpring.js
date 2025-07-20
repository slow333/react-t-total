import React from 'react'

function AboutSpring() {
  return (
    <div>
      <div className="for-space" id='spring-about'></div>
    <h1>RESTfull web service 기본 사항</h1>

    <h3>REST API 소개 : REpresentational State Transfer</h3>
    <h4>소셜 로그인은 주로 REST나 GraphQL을 사용하는 API를 제공</h4>
    <h4>현재는 주로 REST가 가장 널리 사용되고 있음</h4>
    <h4>REST 스타일을 따르는 웹서비스를 RESTfull 웹서비스라고 함</h4>
    <h4>REST는 3개의 주요 컴포넌트를 사용해서 동작</h4>
    <h5>리소스와 URI, HTTP Method, HATEOAS</h5>

    <h3>WWW상의 모든 문서는 HTTP 관점에서 리소스이며, 리소스는 URI로 표시</h3>
    <h4>URI는 웹세서 리소스의 위치, 이름, 또는 이 둘을 모두 사용해서 리소스를 식별하는 문자열을 의미</h4>
    <h4>URI에는 URL과 URN의 두 가지 타입이 있음</h4>
    <h5>URL은 HTTP뿐만 아니라 FTP, JDBC, MAILTO 등에 많이 사용</h5>
    <h3>URI 구문</h3>
    <h4>scheme:[//authority]path[?query][#fragment]</h4>
    <h5>scheme {`=>`}  HTTP, HTTPS, FILE, MAILTO ETC</h5>
    <h5>권한 {`=>`} 선택적 필드(authority = [userinfo "@"] host [":" port]) "//"가 앞에온다.</h5>
    <h5>userinfo : 선택, 사용자 이름과 암호를 포함</h5>
    <h5>host: ip주소 또는 등록된 호스트 또는 도메인 이름</h5>
    <h5>port: 콜론(:) 뒤에오는 포트 번호</h5>
    <h5>path {`=>`} /로 구분되는 일련의 세그먼트가 포함</h5>
    <pre>{`mailto:support@packt.com
    telnet://192.168.8.12:23
    ldap://[2020:ab9::9]/c=AB?objectClass?obj`}</pre>
    <h4>REST 관점에서 URI의 경로 컴포넌트는 리소의 경로를 표시</h4>
    <pre>GET https://www.domain.com/api/vi/order/1</pre>
    <h4>URL은 식별자 뿐만아니라 리소스에 도달하는 방법도 알려움</h4>

    <h3>HTTP 메소드 : POST, GET, PUT, DELETE, PATCH</h3>
    <h4>POST: GET쿼리는 문자열 256자 또는 2048자에서 실제경로를 뺀 문자수로 제한</h4>
    <h5>POST는 이름과 값 쌍을 제출할 때 크기 제한이 없음</h5>
    <h5>제출된 입력 매개변소에 비공개 또는 보안 정보가 포함된 경우 읽기 호출에 대해서 HTTPS와 함께 POST 메소드를 사용</h5>
    <h5>생성이 성공하면 201 Created 상대로 응답</h5>
    <h5>검색, 읽기 성공하면 200 OK 또는 204 No Content</h5>
    <h4>GET /licenses : 성공 200 OK 또는 204 No Content</h4>
    <h4>PUT: 업데이트 : 성공  200 OK 또는 204 No Content</h4>
    <h4>DELETE :  204 No Content</h4>
    <h4>PATCH: UPDATE : 200 OK</h4>

    <h3>HTTP 상태 코드</h3>
    <p>정보성(100~199), 성공(200~299), 리다이렉트(300~399),클라이언트애러(400~499), 서버애러(500~599)</p>
    <h5>202 ACCEPTED; 서버가 요청을 수락했지만 일괄 처리와 같이 즉시 등답을 보낼 수 없는 경우</h5>
    <h5>401 UNAUTHORIZED</h5>
    <h5>429: TOO MAY REQUESTS</h5>
    <h5>502 BAD GATEWAY; 업스트림 서버 호출(외부 연결앱) 실패</h5>
    <h5>503 SERVICE UNAVAILABLE </h5>

    <h3>HATEOAS ?</h3>
    <h4>RESTfull 웹서비스는 HATEOAS라는 하이퍼미디어를 통해 동적으로 정보를 제공</h4>
    <h4>이를 통해 다음페이지 정보, 이미지 정보, 파일 정보 등에 대한 경로를 제공</h4>
    <h4>HATEOAS는 REST의 매우 중요한 개념으로 REST와 RPC를 구분하는 개념 중 하나</h4>

    <h3>API 보안</h3>
    <h4> 암호화된 통신을 위해 항상 HTTPS를 사용</h4>
    <h4>적용시에 OWASP의 주요 API 보안 위협 및 위약점을 살핀다</h4>
    <h4>보안 REST API에는 인증이 있어야함. </h4>
    <h5>REST API는 스테이트리스여서 REST API는 쿠키나 세션을 사용해서 안되고 JWT 또는 OAuth 2.0 기반 토큰을 사용해 보안을 유지해야함</h5>

      <h3>caching 보장</h3>
      <h4>HTTP는 자체적으로 캐싱을 제공. REST API 응답에 추가 헤더만 제공하면됨</h4>
      <h4>응답을 받은 REST CLIENT는 캐싱관련 헤더가 추가된 응답을 가지고 유효성을 검사혀 호출할지 아니면 캐시된 응답을 사용하지를 확인</h4>
      <h4>이를 위한 추가 헤더를 제공하는 두가지 방법</h4>
      <h5>Etag: 리소스 표현(즉, 응답객체)의 해시 또는 체크섬 값을 포함하는 특별한 헤더 값</h5>
      <h5>리소스 응답이 변경되지 않으면 동일하게 유지</h5>
      <p>ETag를 설정하면 클라이언트는 ETag 값을 포함하는 If-None-Match라는 다른 헤더 필드와 함께 요청을 보낸수 있다.
        서버가 이요청을 수신하고 리소스 표현 값의 해시 또는 체크섬 값이 If-None-Match와
        다른 경우에만 새로운 표현과 ETag 헤더에 이 해시값을 응답으로 반환한다. 동일하면
        서버는 단순히 304(Not Modified) 상태 코드로 응답해야한다.</p>
      <h5>Last-Modified: 동작방식은 ETag와 동일하나 해시 또는 체크섬을 사용하는
        대신 RFC-1123 형식의 타임스템프 값을 사용</h5>

      <h1>스프링 개념</h1>
      <h3>스프링 부트는 튼튼한 웹 프레임워크다.</h3>
      <p> 예를 들어 SQL 인젝션, XSS(cross-site scripting), CSRF(Cross-Site Request Forgery), 클릭재킹(clickjacking)과 같은 보안 공격을 막아 준다. 즉, 스프링 부트를 사용하면 이런 보안 공격을 막아 주는 코드를 여러분이 짤 필요가 없다는 뜻이다!</p>
      <p>Spring Boot extends the Spring Framework and provides a quick way to create a production-ready Spring-based application.</p>
      <ul>
        <li>SQL 인젝션은 악의적인 SQL을 주입하여 공격하는 방법이다.</li>
        <li>XSS는 자바스크립트를 삽입해 공격하는 방법이다.</li>
        <li>CSRF는 위조된 요청을 보내는 공격 방법이다.</li>
        <li>클릭재킹은 사용자가 의도하지 않은 클릭을 유도하는 공격 방법이다.</li>
      </ul>

      <h3>Spring Framework</h3>
    <pre>{`
      spring boot | Spring Data | Spring Security | Spring Cloud | ...
      |                Spring Framework                              |
      |                     Testing                                  |
      |                IoC Container                                 |`}
    </pre>
      <p>Messaging, AOP, Transactional Data and Persistence, Spring MVC Web Framework,
        Spring WebFlux Reactive Web Framework, ...</p>
      <h3>SPRING PATTERN</h3>
      <h4>스프링은 제어역전(IOC), 의존성 주입(DI), 관점지향 프로그래밍(AOP)을 지원</h4>
      <h4>IOC</h4>
      <p>전통적인 프로그램에서는 코드가 하나씩 순차적으로 실행되나, UI 기반의 응용 프로그램은 사용자 입력과 이벤트를 기반으로 프로그램의 흐름이 결정되는 동적인 방법</p>
      <p>이를 위해 프레임워크나 컴포넌트 같은 외부 소스가 프로그램의 제어 흐름을 경정하도록 바꾸는 방법이 필요했고 이것을 IOC라고 한다. 현재 IOC 매우 일반적인 원칙이자 거의 모든 프래임워크의 일부이다.</p>
      <h4>DI</h4>
      <p>DI는 IoC의 한 타입니다. IoC 컨테이너는 구현 객체를 만들고 유지관리한다. 이러한 타입의 객체(다른 객체가 필요로 하는 객체-일종의 의존성)는 그 객체를 필요로 하는 객체의 생성자, 설정자 또는 인터펭스 안에서 주입된다.</p>
      <h4>AOP</h4>
      <p>로깅, 보안, 트랜젝션 관리, 메트릭과 같은 기능은 여러 클래스/모듈에서 필요하다. 이러한 기능의 코드는 여러 크래스에 나뉘어 있다. 이러한 cross-cutting conserns를 위해 AOP를 통해 구현 가능</p>


    <h2>spring boot project 구조</h2>
    <h3>src/main/java</h3>
    <p>자바 파일을 저장하는 공간</p>
    <h3>패키지</h3>
    <h4>콘트롤러, 폼/DTOO, DB 처리 엔티티, 서비스 등 자바 파일이 위치</h4>
    <h3>프로젝트명+Application.java: 모든 프로그램의 시작 담당</h3>
    <h4>반드시 @SpringBootApplication 애너테이션이 적용</h4>
    <h3>src/main/resources</h3>
    <h4>HTML, CSS, JavaScript, 환경 파일 등을 저장</h4>
    <h43>templates directory</h43>
    <h5>자바 코드를 삽입할수 있는 HTML형식의 파일, 스프링 부트에서 생성한 자바 객체를 HTML 형태로 출력</h5>
    <h5>관련 HTML 파일을 저장</h5>
    <h4>static 디렉토리</h4>
    <h5>CSS, JavaScript, 이미지 파일을 저장</h5>
    <h4>application.properties 파일</h4>
    <h5>프로젝트 환경변수, 데이터베이스 설정 등</h5>
    <h3>src/test/java</h3>
    <h4>프로젝트에서 작성한 파일을 테스트하는 코드를 저장하는 공간</h4>
    <h4>JUnit과 스프링 부트의 테스트 도구를 사용하여 서버를 실행하지 않은 상태에서 src/main/java 디렉터리에 작성한 코드를 테스트</h4>
    <h3>build.gradle</h3>
    <h4>Gradle이 사용하는 환경 파일</h4>

    </div>
  )
}

export default AboutSpring
