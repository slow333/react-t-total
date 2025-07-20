import React from 'react'

function SpringDeployApp() {
  return (
    <div>
      <h1>Cloud에 적용하기</h1>
      <h2>Packaging</h2>
<pre>{`// command line
./mvnw package -DSkipTests
target 밑에 tomcat을 내장한 실행 가능한 jar 파일이 생성됨
java -jar jar파일
jar 파일 압축 풀기:  jar xf jar파일
실행 가능한 파일들이 나타남`}
  </pre>
    <h2>Container 만들기</h2>
    <h3>Dockerfile 생성; 패키지 최상단</h3>
  <pre>{`  FROM eclipse-temurin:17-jre as builder
WORKDIR application
ARG JAR_FILE=target/*.jar
COPY 달러{JAR_FILE} application.jar
RUN java -Djarmode=layertools -jar application.jar extract

FROM eclipse-temurin:17-jre
WORKDIR application
COPY --from=builder application/dependencies/ ./
COPY --from=builder application/spring-boot-loader/ ./
COPY --from=builder application/snapshot-dependencies/ ./
COPY --from=builder application/application/ ./
ENTRYPOINT ["java", "org.springframework.boot.loader.launch.JarLauncher"]
# The JarLauncher class has been relocated to a new package since Spring Boot 3.2.0.
  // 실행
  docker build -t kalpa/hogwart-artifact:1.0 .
  docker images
  docker run -d -p 8080:8080 kalpa/hogwart-artifact:1.0 // background 실행
  docker ps -a // 실행중인 도커 보기
  docker stop 8923c
  // 한번 실행하고 나면 캐싱되어서 다음에는 빠름`}
  </pre>



    <h2>CI(Continuous Integration)</h2>
    <h3>빌드하고 github에 올리면 자동으로 패키지에 대해 테스트함</h3>
    <h3>가능하면 잘게 쪼게서 적용하는게 버그 찾는데 용이함</h3>
    <h3>project root; .gitHub/workflows/maven-build.yml</h3>
  <pre>{`
# This workflow will build a Java project with Maven, and cache/restore any dependencies to improve the workflow execution time
# For more information see: https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-java-with-maven

name: Java CI with Maven
on:
  pull_request:
    branches:
      - main
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Check out the repository
        uses: actions/checkout@v4
      - name: Set up JDK 17
        uses: actions/setup-java@v4
        with:
          java-version: '17'
          distribution: 'temurin'
          cache: maven
      - name: Build and test with Maven
        run: mvn --batch-mode package`}
  </pre>
    <h3>이렇게 설정하면 github에서 자동으로 패키지를 만들고 테스트 함. 완료되면 merge하면 됨</h3>
    <h3>git에서 테스트시 애러 나면 pom.xml에 추가 필요</h3>
    <h4> build:plugins:plugin
            org.springframework.boot: spring-boot-maven-plugin
      // 다시 올림
    </h4>

    <h2>Di</h2>
    <h3>project root; .gitHub/workflows/azure-webapps-deploy.yml</h3>
  <pre>{`
name: Build and deploy a container to an Azure Web App
env:
  AZURE_WEBAPP_NAME: hogwarts-artifacts-online # Change this to your webapp name.
on:
  push:
    branches:
      - main
permissions:
  contents: 'read'
  packages: 'write'
jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Check out the repository
        uses: actions/checkout@v4
      - name: Set up JDK 17
        uses: actions/setup-java@v3
        with:
          java-version: '17'
          distribution: 'temurin'
          cache: 'maven'
      - name: Build with Maven
        run: mvn --batch-mode --update-snapshots package -DskipTests
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3
      - name: Log in to GitHub container registry
        uses: docker/login-action@v3
        with:
          registry: ghcr.io
          username: 달러{{ github.actor }}
          password: 달러{{ secrets.GITHUB_TOKEN }}
      - name: Lowercase the repo name
        run: echo "REPO=달러{GITHUB_REPOSITORY,,}" >>달러{GITHUB_ENV}
      - name: Build and push container image to registry
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: ghcr.io/달러{{ env.REPO }}:달러{{ github.sha }}
          file: ./Dockerfile
  deploy:
    runs-on: ubuntu-latest

    needs: build

    steps:
      - name: Lowercase the repo name
        run: echo "REPO=달러{GITHUB_REPOSITORY,,}" >>달러{GITHUB_ENV}
      - name: Deploy to Azure Web App
        id: deploy-to-webapp
        uses: azure/webapps-deploy@v3
        with:
          app-name: 달러{{ env.AZURE_WEBAPP_NAME }}
          publish-profile: 달러{{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}
          images: 'ghcr.io/달러{{ env.REPO }}:달러{{ github.sha }}'`}
  </pre>
      <h3>이렇게 하면 자동으로 azure에 패키지가 올라감</h3>
      <h3>staging 서버를 생성해서 적용하면 우선 staging 서버에 올라가고 테스트 해본후 prod와 교체하면됨</h3>


      <h2>실제 DB 생성 및 연결하기(MySql, Mariadb, ...)</h2>
      <h3>적용하기</h3>
      <h4>@Profile("dev") : dev에서만 실행됨</h4>
      <h5>DBInitializer에 적용 </h5>
      <h4>@ActiveProfiles(value="dev") : prod 상태에서도 dev 설정으로 실행됨</h4>
      <h5>test file 들에 모두 적용하면 prod 에서도 dev로 실행됨</h5>

      <h3>application 파일 내용</h3>
      <h4>공통 사항은 application.yml</h4>
  <pre>{`
spring:
  profiles:
    active: dev # 실행 시 application-dev.yml 적용
api:
  base-url: /api/v1

server:
  port: 80`}
  </pre>
      <h4> application-dev.yml</h4>
  <pre>{`
spring:
  datasource:
    url: jdbc:h2:mem:fullstack
    username: sa
    password:
  jpa:
    show_sql: true
  data:
    redis:
      host: localhost
      port: 6379
  cloud:
    azure:
      storage:
        account-name: 달러{AZURE_STORAGE_ACCOUNT_NAME:my-azure-account-name-from-azure-subscribe}
        account-key: 달러{AZURE_STORAGE_ACCOUNT_KEY:my-azure-account-kye-from-azure-subscribe}
#   최대로 서버에 올릴 수 있는 파일 크기 지정
  servlet:
    multipart:
      max-file-size: 2MB # 한개 파일
      max-request-size: 10MB # 여러개 파일
ai:
  openai:
    endpoint: 달러{AI_OPENAI_ENDPOINT:https://api.openai.com/v1/chat/completions}
    api-key: 달러{AI_OPENAI_API_KEY:MY_API_KEY}`}
  </pre>
      <h4>application-prod.yml</h4>
  <pre>{`
spring:
  datasource:
    # 내가 만든 db 서버의 url
    url: 달러{datasource-url:jdbc:mariadb://127.0.0.1:3306/api}
    # 내가 정의한 개정이름(root는 기본 값임) env variable에 정의하면 그게 값이됨
    username: 달러{datasource-username:root}
    # run > more action > edit > environment variable : datasource-password=내암호
    password: 달러{datasource-password:password}
    driverClassName: org.mariadb.jdbc.Driver
  cloud:
    azure:
      keyvault:
        secret:
          property-sources[0]:
            endpoint: 달러{AZURE_KEY_VAULT_ENDPOINT} # environment variable
      storage:
        blob:
          # azure 서비스 이용하면 환경변수로 지정
          account-name: 달러{AZURE_STORAGE_ACCOUNT_NAME:my-azure-account-name-from-azure-subscribe}
          # production에서는 불필요 대신 스토리지에 대한 app의 접근 권한을 주어야함
#          account-key: 달러{AZURE_STORAGE_ACCOUNT_KEY:my-azure-account-kye-from-azure-subscribe}
  servlet:
    multipart:
      max-file-size: 2MB # 한개 파일
      max-request-size: 10MB # 여러개 파일
  jpa:
    hibernate:
      ddl-auto: none
  # azure에 redis를 설치하고 실행 할때 필요한 구성
  data:
    redis:
      host: 달러{redis-host} # secret from Azure key vault
      port: 6480
      username: 달러{redis-username}  # secret from Azure key vault
      ssl:
        enabled: true
      azure:
        passwordless-enabled: true
ai:
  openai:
    # azure 서비스 이용하면 환경변수로 지정
    endpoint: 달러{AI_OPENAI_ENDPOINT:https://api.openai.com/v1/chat/completions}
    # azure 서비스 이용하면 key vault에 값 저장 필요
    api-key: 달러{AI_OPENAI_API_KEY:MY_API_KEY}`}
  </pre>

      <h3>azure key vault 적용에 필요한 dependency</h3>
  <pre>{`
  com.azure.spring: spring-cloud-azure-starter-keyvault;
  dependencyManagement:
    dependencies:
      dependency:
        com.azure.spring: spring-cloud-azure-depencencies
        version: 달러{spring-cloud-azure.version}
        type: pom
        scope:import
  properties
    java.version: 17
    spring-cloud-azure.version: 5.6.0`}
  </pre>
      <h3>azure에 db, keyvault, 기본 server 설정/가입 필요</h3>
    </div>
  )
}

export default SpringDeployApp
