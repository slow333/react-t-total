import React from 'react'

function ExceptionControllerAdvice() {
  return (
    <div>
      <h1>Handle Spring Security Exceptions in a ControllerAdvice</h1>
      <h3>Spring Security Exceptions</h3>
        <h4>Authentication Exceptions</h4>
          <p>UsernameNotFoundException; 사용자 정보 없음</p>
          <p>BadCredentialsException; 패스워드 틀림</p>
          <p>InvalidBearerTokenException ; 토큰 비정상</p>
        <h4>Authorization Exceptions</h4>
          <p>AccessDeniedException ; 권한 없음(No permission)</p>
        <h4>AccountStatusException ; username, password 미입력 애러</h4>
          <p>이거 custom entry point 만들고 적용</p>

      <h3>@ControllerAdvice에 예외 정의</h3>
  <pre>{`@ControllerAdvice
    @ExceptionHandler({UsernameNotFoundException.class, 
          BadCredentialsException.class})
    @ExceptionHandler(InvalidBearerTokenException.class)
    // 이거 임포트 할때 조심해야함.io. 뭐 아님
    @ExceptionHandler(AccessDeniedException.class) 
    
    //id, password 없을 때에 대한 예외 처리
    @ExceptionHandler(InsufficientAuthenticationException.class)
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    Result handleInsufficientAuthenticationException(
        InsufficientAuthenticationException ex){
      return new Result(true, StatusCode.UNAUTHORIZED, 
         "Login credentials are missing", ex.getMessage());
    }
    // Fallback handles any unhandled exception //`}
  </pre>
  <h4>이상태에서는 controller advice에서 exception을 받지 못함</h4>
  <p>controller에서 도착하기 전에 security에서 애러를 먼저 처리함</p>

  <h3>security exception을 controller advice에서 처리하기</h3>
  <h4>basic authentication에 대해 처리시 AuthenticationEntryPoint에 대한 정의가 필요</h4>
<pre>{`  // 이 class에서 basic authentication에 대해 처리
  // resolver에 AuthenticationEntryPoint를 적용함
  public class CustomBasicAuthenticationEntryPoint implements 
      AuthenticationEntryPoint {

    // DefaultHandlerExceptionResolver를 통해서 
    // security exception을 controller advice에서 처리 가능하게 함
    private final HandlerExceptionResolver resolver;
    public CustomBasicAuthenticationEntryPoint(@Qualifier("handlerExceptionResolver")
        HandlerExceptionResolver resolver) {
      this.resolver = resolver;
    }

    @Override
    public void commence(HttpServletRequest request, 
          HttpServletResponse response, 
          AuthenticationException exception){
      // httpBasic에서 사용하기 위해 필요.
      response.addHeader("WWW-Authenticate", "Basic realm=\"Realm\""); 
      this.resolver.resolveException(request, response, null, exception);
    }
  }`}
  </pre>
  <h4>security auth의 httpBasic에 적용</h4>
  <pre>{`
    httpBasic(httpBasic -> 
        httpBasic
          .authenticationEntryPoint(this.customBasicAuthenticationEntryPoint))`}
  </pre>
  <h4>jwt token에 대한 애러 처리</h4>
<pre>{` // JWT authentication에 대한 예외 처리
  public class CustomBearerTokenAuthenticationEntryPoint 
      implements AuthenticationEntryPoint {

    // DefaultHandlerExceptionResolver를 통해서 
    // security exception을 controller advice에서 처리 가능하게 함
    private final HandlerExceptionResolver resolver;
    public CustomBearerTokenAuthenticationEntryPoint
      (@Qualifier("handlerExceptionResolver")
        HandlerExceptionResolver resolver) {
      this.resolver = resolver;
    }

    @Override
    public void commence(HttpServletRequest request, 
        HttpServletResponse response,
        AuthenticationException exception){
      this.resolver.resolveException(request, response, null, exception);
    }
  }`}
  </pre>
  <h4>security auth의 oauth2ResourceServer에 적용</h4>
  <pre>{`
    oauth2ResourceServer(server -> 
      server.authenticationEntryPoint(
        this.customBearerTokenAuthenticationEntryPoint))`}
  </pre>
  <h4>JWT auth의 access deny에 대한 예외 처리</h4>
  <pre>{`
  // entry point가 아니고 handler 임
  public class CustomBearerTokenAccessDeniedHandler 
      implements AccessDeniedHandler {

    // DefaultHandlerExceptionResolver를 통해서 
    // security exception을 controller advice에서 처리 가능하게 함
    private final CustomBearerTokenAccessDeniedHandler resolver;
    public CustomBearerTokenAccessDeniedHandler
        (@Qualifier("handlerExceptionResolver")
      HandlerExceptionResolver resolver) {
      this.resolver = resolver;
    }

    @Override
    public void commence(HttpServletRequest request, 
        HttpServletResponse response, 
        AuthenticationException exception){
      this.resolver.resolveException(request, response, null, exception);
    }
  }`}
  </pre>
  <h4>security auth의 oauth2ResourceServer에 적용</h4>
  <pre>
    oauth2ResourceServer(server - server.accessDeniedHandler(this.customBearerTokenAccessDeniedHandler))
  </pre>
    </div>
  )
}

export default ExceptionControllerAdvice
