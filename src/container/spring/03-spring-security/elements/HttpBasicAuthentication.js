import React from 'react'

function HttpBasicAuthentication() {
  return (
    <div>
      <h1>1단계: Http Basic Authentication</h1>
      <h3>검증 절차(간략)</h3>
  <pre>{`
                                          UserService                UserRepository
                  loadUserByUserName(username)  |  findByUsername(username) |
username  __▶ AuthenticationProvider ----------▶|-------------------------▶|
password               |                        |                           | ◀--▶ DB
                       |                        |     Optional(MiUser)      |
                       |                        |◀-------------------------|
                       |      MyUserPrincipal   |
                       |◀-----------------------|
(Authentication done)  |___
                          |
                          ▼
                    (JWT process)`}
  </pre>
      <h3>pom.xml</h3>
        <h4>spring-boot-starter-security, spring-boot-starter-oauth2-resource-server</h4>
        <h4>이상태면 기본 적으로 spring에셔 제공하는 login 창이 보임</h4>
      <h3>Spring Security</h3>
        <h4>app에 접근하기 위해 사용자 인증을 요구하는 기본 login form을 생성</h4>
        <h4>username "user"인 in-memory user를 생성</h4>
        <h4>form-base authentication을 위해 console에 password를 생성해서 보여줌</h4>
        <h4>이때 새션 유지를 위해 Cookie로 JESSESIONID를 생성함(284728rAFD8239AGD)</h4>
        <h4>이 세션을 이용해서 연결 상태를 유지함</h4>
        <h4>이런 로그인 방식을 변경하기 위해서는 SecurityFilterChain을 구현 필요</h4>
<pre>{`
@Configuration
public class SecurityConfiguration {

  @Value("달러{api.endpoint.base-url}")
  String baseUrl;

  @Bean
  SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
      .authorizeHttpRequests(request -> request
        .requestMatchers(HttpMethod.GET, 
            baseUrl + "/artifacts/**").permitAll() // 방법 1. method와 경로를 지정
        .requestMatchers(HttpMethod.GET, 
            baseUrl + "/users/**").hasAuthority("ROLE_admin")
        // /users/** 하면 login도 포함되서 안됨.
        .requestMatchers(HttpMethod.POST, baseUrl + "/users")
            .hasAuthority("ROLE_admin")
        .requestMatchers(HttpMethod.PUT, baseUrl + "/users/**")
            .hasAuthority("ROLE_admin")
        .requestMatchers(HttpMethod.DELETE, baseUrl + "users/**")
            .hasAuthority("ROLE_admin")
        .requestMatchers(new AntPathRequestMatcher("/board/**"))
            .permitAll() // 2. 경로에 대해 정의
        .requestMatchers(AntPathRequestMatcher.antMatcher("/h2-console/**"))
            .permitAll() // h2 db 경로 설정
        .anyRequest().authenticated() // 위 제외 모든 접속은 이증 필요
      )
        .csrf(AbstractHttpConfigurer::disable) // csrf 설정
        // cors 설정(WebMvcConfigurer 별도 설정 필요)
        .cors(Customizer.withDefaults())  
        .headers(header -> header
          // h2 browser options 설정
          .frameOptions(Customizer.withDefaults()).disable()) 
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
}`}
</pre>
      <h4>위 상태에서 접근하면 접속 불가함: Access to localhost was denied.</h4>
      <h3>userService 에서 add(save) 시에 password를 암호화를 추가</h3>
        <h4>DBInitializer에서 저장시 service를 사용</h4>
      <h3>Basic auth</h3>
      <h4>controller는 authController에서 수행 예정(/login)</h4>
      <h4>순서</h4>
      <ol>
          <li>userService(implements UserDetailService) return UserDetails</li>
          <li>MyUserPrincipal implements UserDetails(get authed userInfo)</li>
          <li>RestControllerAdvice; Exception 추가</li>
          <li>FilterChain; httpBasic 추가</li>
      </ol>
      <h4>user service implements UserDetailService </h4>
        <h5>loadUserByUsername은 return으로 UserDetails를 줌</h5>
        <h5>UserDetails를 implements한 MyUserPrincipal를 생성해야함</h5>
        <p>나머지는 하고, authorities관련</p>
  <pre>{`  Arrays.stream(StringUtils.tokenizeToStringArray(kUser.getRoles(), " "))
    .map(role - new SimpleGrantedAuthority("ROLE_" + role)).toList();`}
  </pre>
      <h5>userRepository에 findByUsername 생성</h5>
    <pre>{`return userRepository.findByUsername(username)
  .map(user - new MyUserPrincipal(user))
  .orElseThrow(() -> 
    new UsernameNotFoundException("The username " + username +" is not found.");`}
    </pre>
      <h4>@RestControllerAdvice 에 애러 내용 추가</h4>
      <pre>{`@ExceptionHandler({UsernameNotFoundException.class, 
      BadCredentialsException.class})
  @ResponseStatus(HttpStatus.UNAUTHORIZED) // 실제는 UNAUTHENTICATED
  message = "The username or password is invalid."`}</pre>
      <h4>SecurityFilterChain에 httpBasic(Customizer.withDefaults) 추가</h4>
    </div>
  )
}

export default HttpBasicAuthentication
