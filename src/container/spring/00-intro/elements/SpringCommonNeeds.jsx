import React from 'react'

function SpringCommonNeeds() {
  return (
    <div>
      <div className="for-space" id='spring-common-needs'></div>
      <h1>공통 사항 들</h1>
      <h2>H2 Database with Test Data</h2>
      <h3>초기 데이터 입력하기 : implements CommandLineRunner</h3>
      <h4>CommandLineRunner 하면 컴파일이 다 끝나고 run을 수행함</h4>
  <pre>{`
  public class DBDataInitializer implements CommandLineRunner {

    private final ArtifactRepository artifactRepository;
    private final WizardRepository wizardRepository;
    == constructor ==;

    public void run(String... args) throws Exception {
      Artifact a1 = new Artifact();
      Artifact a1 = new Artifact();
      ...
      Artifact a6 = new Artifact();
      Wizard w1 = new Wizard();
      Wizard w2 = new Wizard();
      Wizard w3 = new Wizard();
      w1.addArtifact(a1); // 새로운 메서드를 추가
      // cascade에 PERSIST 가 있어서 관련된 artifact도 저장됨
      wizardRepository.save(w1); 
      wizard에 없는 artifact는 artifactRepository에서 저장해야함
    }
  }
  // wizard class에 아래 메서드 추가
    void addArtifact(Artifact artifact) {
      this.artifacts.add(artifact); // wizard list에 artifact 추가
      artifact.setOwner(this); // artifact에 wizard를 설정
    }`}
  </pre>
      <h3>H2 db application.yml 설정</h3>
  <pre>{`
spring:
  h2:
    console:
      enabled: true
      path: /h2-console #h2 console 위치
  datasource:
    driver-class-name: org.h2.Driver # 드라이버 설정
    url: jdbc:h2:mem:fullstack # 사용한 db 정의
    username: sa
    password:`}
  </pre>
    <h3>security를 적용하면 h2 db security setting 필요 </h3>

{/* ===================== Postman ===================== */}
    <h2>Postman, JSON Infinite Recursion, and DTO</h2>
    <h3>Postman을 설치해서 통함 시험 수행</h3>
    <h3>Artifact와 Wizard 간에 서로 참조해서 ping-pong 해서 무한 loop가 발생함</h3>
      <h4>이를 해결하기 위해서 dto class를 생성해서 관계를 끊음</h4>
      <h4>그리고 민감한 정보(암호)를 숨기거나 추가 정보를 제공함</h4>
      <h3>Dto class를 생성</h3>
      <h3>Dto는 일반적인 class나 record로 생성 가능</h3>
      <h4>dto to entity, entity to dto로 변환을 위한 class를 생성: implements Converter[From, To] 해서 사용</h4>
      <h4>@Component 잊지 마세요.</h4>

{/* =================== github ==================== */}

      <h2>GitHub</h2>
      <h3>GitHub repository 생성</h3>
        <ul>local pc 수행
          <li>git add .  </li>
          <li>git commit -m "내용" </li>
          <li>git branch -M main</li>
          <li>git remote add origin https://해당 repostitory 주소.git</li>
          <li>git push -u origin main</li>
          <li>git branch --all</li>
        </ul>
      <h3>git hub issues 만들기</h3>
      <ul>해당 repository로 이동 {`> Issues > 생성`}
        <li>Artifact CRUD : 요구 사항을 정의 (labels: enhancement)</li>
        <li>Artifact Assignment : 요구 사항을 정의 (labels: enhancement)</li>
        <li>Wizard CRUD</li>
        <li>User CRUD</li>
        <li>User authentication and authorization</li>
      </ul>
      <h3>새로 이슈를 시작할 때</h3>
      <ol>
        <li>git branch something-do</li>
        <li>작업을 수행하고 다 끝났으면</li>
        <li>git switch main</li>
        <li>git pull</li>
        <li>git switch something-do</li>
        <li>git add .</li>
        <li>git commit -m "some comment"</li>
        <li>git push(git push --set-upstream origin something-do)</li>
        <li>github로 이동해서 merge를 수행하면 main으로 통합됨(Reviewer 생성해야함)</li>
        <li>pc로 이동</li>
        <li>git switch main</li>
        <li>git pull(git fetch + git merge)</li>
      </ol>


      <h2>command</h2>
      <h3>curl </h3>
        <h4>curl http://localhost:8080/api/v1/users -H "Authorization: Bearer abcsdfjo2839..."</h4>
        <h4>curl -X POST http://localhost:8080/api/v1/users/login -u admin:321widu</h4>
      <h3>spring run app</h3>
        <h4>./mvnw spring-boot:run</h4>
        <h4>./mvnw package -DSkipTests</h4>
<pre> {`
  target 밑에 tomcat을 내장한 실행 가능한 jar 파일이 생성됨
  java -jar jar파일 // jar파일을 실행하는 명령어
  jar 파일 압축 풀기:  jar xf jar파일
  실행 가능한 파일들이 나타남`}</pre>

      <h3>redis cli command</h3>
<pre>{`
  $ redis-cli --version # Redis 버전 조회
  set [key값] [value값]
  get [key값]
  $ 127.0.0.1:6379> set os_key window
  $ 127.0.0.1:6379> get os_key
  $ "window"

  mset [key값] [value값] [key값] [value값] ...
  mget [key값] [key값]
  $ 127.0.0.1:6379> mset test_key1 value1 test_key2 value2
  $ 127.0.0.1:6379> mget test_key1 test_key2
  $ 1) "value1"
  $ 2) "value2"`}
</pre>
      <h3>docker</h3>
        <h4>docker-compose up</h4>
<pre> {` docker build -t kalpa/hogwart-artifact:1.0 .
  docker images
  docker run -d -p 8080:8080 kalpa/hogwart-artifact:1.0 // background 실행
  docker ps -a // 실행중인 도커 보기
  docker stop 8923c`}</pre>

      <h3>git; command shell</h3>
  <pre> {` git init // 초기 시작시 에만 필요
  git add .
  git branch -M main // 초기 시작시 에만 필요
  git remote add origin git@github.com:slow333/js-spring-home.git // 초기 시작시 에만 필요
  git commit -m 'comments what i want'
  git push -u origin main
  // 기존 git 삭제
  git remote remove git@github.com:slow333/js-spring-home.git`} </pre>

{/* ================ update spring framework =================== */}
      <h2>Spring boot application upgrade</h2>
        <h3>절차</h3>
      <ol>
        <li>release note와 migration guideline을 검토; 변경사항</li>
        <li>backup and use version control</li>
        <li>update dependencies</li>
        <li>update configuration properties in application.yml and application-*.yml</li>
        <li>Replace/remove deprecated classes/methods/constructors.
        <div>(github.com/spring-projects/spring-boot/wiki/Spring-boot-3.2.0-Configuration-Changelog)</div>
        </li>
        <li>test after upgrading</li>
        <li>upgrade는 우선 minor version을 최신으로 하고 다음 major version을 업그레이드
        <div>2.7.0 ; 2.7.8 ; 2.8.8 ; 3.3.4 이렇게 순차적으로 해야 안전함</div></li>
        <li>start with a test environment</li>
        <li>log 검토</li>
        <li>spring actuator 보기</li>
        <li>업그레이드 문서화 하기</li>
      </ol>
        <h3>intellij migrator</h3>
        <h4>pom.xml; runtime: org.springframework.boot: spring-boot-propteries-migrator</h4>
        <h4>console 창에 변경 할 내용을 볼수 있음 BUT 이거 없이 자체 기능을 활용하는게 더 좋음</h4>
        <h4>menu; Code ; Inspect Code.. ; whole project 하면 변경할 내용을 보여줌 </h4>
        <h4>해당 클레스로 가서(download 해야 자세한 내용 보임) 어떻게 변경하지는 참고해서 애러난 곳 수정</h4>
        <h4>꼼꼼히 읽어 보면 알수 있음, 이직은 잘 못하겠음</h4>


{/* ====================== spring securtiy setting ================= */}
        <h2>일반적으로 적용되는 Security 설정</h2>
<pre>{`
@Configuration
public class SecurityConfiguration {

   @Bean
   SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
      http
        .authorizeHttpRequests(request -> request
          .requestMatchers(HttpMethod.GET, "/**")
              .permitAll() // 방법 1. method와 경로를 지정
          .requestMatchers(new AntPathRequestMatcher("/board/**"))
              .permitAll() // 2. 경로에 대해 정의
          .requestMatchers(new AntPathRequestMatcher("/masool/**"))
              .permitAll()
          .requestMatchers(new AntPathRequestMatcher("/swagger-ui/**"))
              .permitAll()
          .requestMatchers(AntPathRequestMatcher.antMatcher("/h2-console/**"))
              .permitAll() // h2 db 경로 설정
        )
          .csrf(AbstractHttpConfigurer::disable) // csrf 설정
          .cors(Customizer.withDefaults())  // cors 설정(WebMvcConfigurer 별도 설정 필요
          .httpBasic(AbstractHttpConfigurer::disable) // 기본 login 설정
          .headers(header -> header
              .frameOptions(Customizer.withDefaults()).disable()) // h2 db frame options 설정
          .formLogin((formLogin) ->  formLogin
              .loginPage("/board/login")
              .defaultSuccessUrl("/board/question/question_list"))
          .logout(logout -> logout
              .logoutRequestMatcher(new AntPathRequestMatcher("/board/logout"))
              .logoutSuccessUrl("/")
              .invalidateHttpSession(true))
      ;
     return http.build();
   }

   @Bean // 암로화를 위한 설정
   PasswordEncoder passwordEncoder() {
      return new BCryptPasswordEncoder();
   }

   @Bean // full stack으로 할 때 필요
   AuthenticationManager authenticationManager(
           AuthenticationConfiguration authenticationConfiguration) throws Exception{
      return authenticationConfiguration.getAuthenticationManager();
   }
}`}
</pre>
    </div>
  )
}

export default SpringCommonNeeds
