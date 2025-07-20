
function SpringObserving() {
  return (
    <div>
      <div className="for-space" id='spring-observing'></div>
      <h1>Spring Actuator</h1>
      <h3>제공 기능</h3>
      <ul>
        <li>app과 상호작용하면서 모니터링 수행</li>
        <li>다양한 metrics를 수집</li>
        <li>db상태와 트래픽을 알고 있음</li>
      </ul>
      <h3>pom.xml</h3>
      <h4>implements org.springframework.boot:spring-boot-starter-actuator</h4>
      <p>경로; /actuator, env, health, metrics, beans, configprops, loggers, httpexchanges, mappings,  ...</p>
      <p>경로; heapdump, prometheus,  ...</p>
      <p>관련 자료 : https://docs.spring.io/spring-boot/reference/actuator/index.html</p>
      <h3>관련 설정</h3>
      <h4>exception handler를 ExceptionHandlerAdvice에 추가</h4>
      <h4>application.yml에 관련 config 추가 필요</h4>
      <h3>공통 적용</h3>
  <pre>{`management:
  endpoints:
    web:
      exposure: # /actuator에 내역 추가
        include: |
                health,info,metrics,env,beans,confiprops
                ,heapdump,httpexchanges,logger,mappings
#            include: "*"
#            exclude: 제거할 내역`}
  </pre>
    <h4>include에 정의한 항목이 보임(/actuator)</h4>

    <h3>health 관련</h3>
  <pre>{`management:
  endpoint:
    health: # health 항목에 대한 설정
      show-details: always # health에 대해 자세한 내용을 보여줌(안하면 up만 나옴)
      probes:
        enabled: true # livenessState, readinessState를 보여줌`}
  </pre>
      <h5>디스크 상태 모니터링 만들기; implements HealthIndicator</h5>
      <h5>/health에 usableDisk 추가</h5>
  <pre>{`@Component
public class UsableDiskHealthIndicator  implements HealthIndicator {
  public Health health() {
    File file = new File("."); // disk space 경로
    long usableDiskInBytes = file.getUsableSpace();
    boolean isHealth = usableDiskInBytes >= 10 * 1024 * 1024; // 10MB
    Status status = isHealth ? Status.UP : Status.DOWN;
    return Health
      .status(status)
      .withDetail("usable disk", usableDiskInBytes)
      .withDetail("threshold", 10 * 1024 * 1024)
      .build();
  }
}`}
  </pre>
  <pre>{`health indicator:
       https://docs.spring.io/spring-boot/reference/actuator/endpoints.html
  #actuator.endpoints.health.auto-configured-health-indicators`}</pre>
      <h3>info</h3>
      <h4>default에는 아무것도 없음: {}</h4>
  <pre>{`# 우선 endpoint를 추가
management:
  info:
    env: # 기본 정보
      enabled: true
    git: # 깃 정보, pom.xml에 plugin 필요
      enabled: true
      mode: full
    build: # pom.xml에 plugin 필요
      enabled: true # default false
    java:
      enabled: true
    os:
      enabled: true

# infor 정보를 추가
info:
  app:
    name: app 이름
    description: 설명
    version: @project.version@ # pom.xml에서 정보 가져오기
    links:
      youtube: http://lllllll
      gitHub: https://slslsls`} </pre>
      <h5>git 정보 생성하기; pom.xml</h5>
  <pre>{`build.plugins.plugin
  groupId: io.github.git-commit-id
  artifactId: git-commit-id-maven-plugin`}
  </pre>
    <h5>위 적용을 위해서는 git properties 파일을 가져오기 위해 실행시 ./mvnw spring-boot:run </h5>
    <h5>target에 git.properties 파일을 생성함</h5>
  <pre>
{`build.plugins.plugin 밑의 artifactId와 같은 계위에
  executions.execution.goals.goal: build-info`}
  </pre>
    <h5>위 적용을 위해서는 git properties 파일을 가져오기 위해 실행시 ./mvnw spring-boot:run </h5>
    <h5>target에 build-info.properties 파일을 생성함</h5>

    <h3>metrics</h3>
    <h4>세부 정보 보기: metrics/이름</h4>
    <h5>/actuator/metrics/spring.data.repository.invocations; 실행된 repository</h5>
    <h5>접속하면 우선 userRepository에 접속한 후에 실행하는 repository를 실행해서 2개 또는 3개가 실행됨</h5>
    <h4>좀더 세부정보 검색 : spring.data.repository.invocations?tag=method:findByUsername</h4>
    <h5>tag에서 method를 검색하고 values에서 findByUsername을 검색</h5>
    <h4>http.server.requests; http requests에 대한 정보</h4>
  <pre>{`metrics 정보 : https://docs.spring.io/spring-boot/reference/actuator/metrics.html
      #actuator.metrics.supported`}</pre>
  <h4>특정 controller에서 metrics 추출하기</h4>
  <pre> {`// controller로 가서
  private final MeterRegistry meterRegistry;

  @GetMapping
  ...
  원하는 action 다음에(ex; artifactService.findById())
  meterRegistry. // timer(시작 종료 시간), gauge(upper bound 등)
  meterRegistry.counter("artifact.id."+ artifactId).increment();`}
  </pre>
      <h5>metrics에 artifact.id.12302 가 새로 생김(해당 id를 실행했으면)</h5>
      <h5>metrics/artifact.id.12302로 가서보면 실행한 횟수가 표시됨</h5>
      <h4>특정 service의 latency 측정하기</h4>
      <h5>해당 서비스 메서드로 가서 @Timed("findAllArtifactsService.time") 추가하면됨</h5>
      <h5>metrics에서 보면 findAllArtifactsService.time 생성되어 있음</h5>
      <h5>metrics/findAllArtifactsService.time ; max, total time 등이 보임</h5>

      <h3>/actuator/env ; activeProfiles 등 많은 정보를 보여줌</h3>
      <h4>기본적으로 value 정보는 안보여줌, 볼려면 management:endpoint:env:show-values: always 추가</h4>
  <pre>{`management:
  endpoint:
    env:
      enabled: true
      show-values: always `} </pre>

      <h3>/actuator/beans ; loading된 모든 bean 정보를 보여줌</h3>
      <h3>/actuator/configprops ; @ConfigurationProperties 정보를 보여줌</h3>
      <h4>spring datasource를 받는 클레스는 ? 숙제, 어디가서 찾지 ?</h4>
      <h4>기본은 안보임, 볼려명</h4>
  <pre>{`management:
  endpoint:
    configprops:
      show-values: always `}</pre>

      <h3>/actuator/heapdump ; memory관련 정보를 보여줌(다운로드)</h3>
      <h4>파일을 받아서 MAT(Eclipse Memory Analyzer Tool, VisualVM, Intellij에서 분석 가능</h4>

      <h3>httpexchanges</h3>
      <h4>기본 적으로 접근이 안됨</h4>
      <h5>/system/actuator/ActuatorConfiguration</h5>
  <pre>{`@Configuration
public class ActuatorConfiguration {
  @Bean
  public HttpExchageRepository httpExchangeRepository() {
    InMemoryHttpExchangeRepository repo = new InMemoryHttpExchangeRepository();
//        repo.setCapacity(1000); // 마지막 1000개의 request, response exchange만 보여줌
    return repo;
  }
} `}</pre>
      <h4>다양한 요청 답변 관련 세부 정보를 보여줌</h4>

      <h3>loggers; log 정보를 보여줌</h3>
      <h4>임시로 log level을 정의 할 수 있음</h4>
  <pre>{`postman : (post) /actuator/loggers/edu.tcu.cs.hogwart
body: { "configureLevel": "DEBUG" }
postman : (get) /actuator/loggers/edu.tcu.cs.hogwart # 정보보기
//원복하기
postman : (post) /actuator/loggers/edu.tcu.cs.hogwart
body: { "configureLevel": null }`}
  </pre>

      <h3>mappings ; controller의 mapping 정보를 보여줌</h3>

      <h3>enabled, exposed</h3>
      <h4>shutdown 빼고 모든 endpoint는 enble 됨</h4>
      <h5>enabled하면 spring bean을 생성해서 등록 해줌, 효과적임</h5>
      <h4>기본으로 health endpoint 만 http에 exposed 됨</h4>
      <h5>expose는 원격에서 http request에 대해 응답해주는 것, 보안관련</h5>

      <h3>사용자 endpoint 만들기</h3>
      <h4>/system/actuator/CustomBeansEndpoint</h4>
  <pre>{`@Component
@Endpoint(id = "custom-beans")
public class CustomBeansEndpoint {
  private final ApplicationContext appContext;

  @ReadOperation // @WriteOperation, @DeleteOperation 있음
  public int beanCount() {
    return appContext.betBeanDefinitionCount();
  }
}`}
  </pre>
      <h4>exposure에 추가: custom-beans</h4>

      <h3>Security 설정하기</h3>
  <pre>{`.requestMatchers(EndpointRequest.to("health","info")).permitAll()
.requestMatchers(EndpointRequest.toAnyEndpoint().excluding("health","info"))
    .hasAuthority("ROLE_admin")`}
  </pre>

{/* ===================== docker container install ==================== */}

      <h1>Grafana Prometheus Zipkin MailPit</h1>
      <h3>기본 설정</h3>
      <h5>pom.xml; runtime: io.micrometer: micrometer-registry-prometheus</h5>
      <h5>yml; exposure add prometheus</h5>
      <h5>security; actuator 관련에 prometheus 추가</h5>

      <h3>설치하기 : project root,  docker-compose.yml</h3>
  <pre>{`services:
  prometheus:
    image: prom/prometheus
    volumes: # 폴더와 파일 생성해야함
      - ./docker/prometheus/prometheus.yml:/etc/prometheus/prometheus.yml
    ports:
      - 9090:9090
  grafana:
    image: grafana/grafana-enterprise
    volumes:
      - ./docker/grafana:/var/lib/grafana
    env_file: # 폴더와 파일 생성 필요
      - ./docker/grafana/grafana-config.env
    ports:
      - 3000:3000
  mailpit:
    image: axllent/mailpit
    restart: unless-stopped
    ports:
      - 8025:8025
      - 1025:1025
  zipkin:
    image: openzipkin/zipkin
    ports:
      - 9411:9411`}
  </pre>
  <h3>project root에 docker/prometheus/prometheus.yml 생성</h3>
  <pre>{`scrape_configs:
  - job_name: "hogwarts-artifacts-online"
    metrics_path: "/actuator/prometheus"
    scrape_interval: 3s # how often to scrape
    static_configs:
     # This is for demo purpose.
    # During  production, change this to the production host address.
      - targets: ["host.docker.internal:80"] # windows
      - targets: ["docker.for.mac.localhost:80"] # mac`}
  </pre>
  <h3>project root에 docker/grafana/grafana-config.env 생성</h3>
  <pre>{`GF_SMTP_ENABLED=true
GF_SMTP_HOST=mailpit:1025 # mailpit에서 smtp로 1025포트를 listen함
GF_SMTP_FROM_ADDRESS=myaddress@bingyang.dev
GF_SMTP_FROM_NAME=Grafana`}
  </pre>
      <h3>실행; docker compose up</h3>
      <h4>접속 경로 : localhsot:9090, :3000, 9025, 9411</h4>

      <h3>실행</h3>
      <h4>prometheus ; localhost:9090 </h4>
      <h5>search: up == 1 , execute</h5>
      <h5>기타 세부 정보 확인(app 실행 필요)</h5>

      <h4>grafana ; localhost:3000</h4>
      <h5>admin, admin ; password change</h5>
      <h5>data source ; http://prometheus:9090 , 기타 등등 설정</h5>
      <h5>dashboard 생성(기존 템플릿 가져와서 사용하기)</h5>
      <ol>
        <li>dashboard로 이동해서 create dashboard</li>
        <li>grafana.com/grafana/dashboards 검색해서 id를 가져와서</li>
        <li>import a dashboard에서 import에서 붙여 넣고</li>
        <li>datasource 선택; prometheus</li>
        <li>import </li>
      </ol>
      <h4>alerting </h4>
      <h5>1. 이름, 2. 경계값 지정, 3. 알람 정책, 4. 정보입력, 5. 알람 레벨, 저장</h5>
  <pre>{`
  1. 이름 지정
  2. 알림 할 값 지정
    A 항목 정의; 조건값 지정
    metrics; up, label filters; instance, docker.for.mac.localhost:80
    and run queries(upper button)
    B 항목에 추가
    condition, threshold 등 선택
    when; last() of A ; willReturn 1 1 1 1 1 1
    is below 선택 1 또는 다른 조건 선택
  3. evaluation behavior 지정
    폴더 이름 지정
    evaluation group 지정; prod_serviceHealth_every10s
    모든 evaluation group은 인터벌을 갖고 있음
    pending period; 이 기간 이후에 알람을 보냄, 이 시간 이내에 없어지면 안보냄(0이면 없음)
  4. annotations
    정보 입력
  5. configure notifications
    alert level 지정
    severity; critical`}
  </pre>
      <h5>notification policies</h5>
      <p>contact points ; 수정, 추가</p>
      <p>slack 등 많은 전달 방법이 있음</p>

      <h3>mailpit; localhost:8025</h3>
      <h5>서비스 상태가 변경되면 prometheus에서 감지하고 grafana에서 알림 메일을 보냄</h5>

      <h3>Zipkin: localhost:9411</h3>
      <h5>application의 성능, latency 등 한명의 사용자에 대한 trace를 보여줌</h5>
      <h5>어디서 와서 어디로 가는 전체 인스턴스/bean에 대한 경로 및 딜레이를 보여줌</h5>
      <h5>pom.xml; io.micrometer: micrometer-tracing-bridge-brave</h5>
      <h5>pom.xml; io.zipkin.reporter2: zipkin-reporter-brave</h5>
      <h5>yml; management:tracing:sampling:probability: 0.1 #default 10%</h5>
      <h5>yml; management:tracing:sampling:probability: 1 # demo purpose</h5>


      <h3>이모든 걸 위해서는 spring-boot-starter-aop 필요하나 기본적으로 설정되어 있음</h3>

      <h4>서비스에 metrics observe 적용하기</h4>
      <h4>service의 원하는 method에 @Observed(name="artifact", contextualName = "findByIdService", 다른 설정 등)</h4>
      <h5>merics에 artifact 항목으로 보임(/metrics/artifact)</h5>
      <h5>zipkin에서 세부정보를 보면 findByIdService 항목이 새로 생김</h5>

    </div>
  )
}

export default SpringObserving
