import React from 'react'

function SpringJwt() {
  return (
    <div>
      <h1>JWT(Json web token)</h1>
      <h3>basic auth만 가지고도 가능하나, jwt를 사용하면 </h3>
      <p>여러모로 좋다고 함, no session, 메모리 절약, 범용성 그러나 복잡하고 cache server(redis) 필요</p>
      <h3>Structure of a signed JWT</h3>
        <p>header, payload, signature로 구성</p>
        <p>payload: claims라고도 함</p>
        <p>iss(issues), sub(user or subject), exp(expiration), iat(issue at), authorities</p>
      <h5>jwt관련 oath2ResouceServer dependency 필요</h5>
      <h3>AuthController</h3>
  <pre>{`  private static final Logger LOGGER = LoggerFactory.getLogger(AuthController.class);
  @PostMapping("/login")
  public Result getLoginInfo(Authentication authentication){
    return new Result(true, ...., authService.createLoginInfo(authentication);
  }`}
  </pre>
        <h3>AuthService</h3>
  <pre>{`  public Map[String, Object] createLoginInfo(Authentication authentication){
    MyPrincipal principal = (MyPrincipal) authentication.getPrincipal();
    HoUser hoUser = principal.getHoUser();
    HoUserDto dto = userToDto.converter(hoUser);
    String token = jwtProvider.generateToken(authentication);
    Map[String, Object] tokenMap = new HashMap();
    tokenMap.put("userInfo", dto);
    tokenMap.put("token", token);
    return tokenMap;
  }`}
  </pre>
      <h3>JwtProvider</h3>
        <h5>어기서 JwtEncoder를 사용하기 위해, SecurityConfiguration에 RSA key 필요(아래 참조) </h5>
  <pre>{`    public String GenerateToken(Authentication authentication){
      Instant now = Instant.now();
      long expiresIn = 2;
      String authorities = authentication.getAuthorities().stream()
        .map(grantedAuthority - grantedAuthority.getAuthority())
        .collect(Collectors.joining(" "));
      JwtClaimsSet claims = JwtClaimsSet.builder()
        .issuer("self")
        .issueAt(now)
        .expiresAt(now.puls(exiresIn), ChronoUnit.HOURS))
        .subject(authentication.getName())
        .claim("authorities", authorities)
        .build();
      return this.jwtEncoder.encode(JwtEncoderParameters.from(claims))
         .getTokenValue();
    }`}
  </pre>
      <h3>SecurityConfiguration</h3>
  <pre>{`
    private final RSAPublicKey publicKey;
    private final RSAPrivateKey privateKey;

    constructor{
      keypairGenerator = KeyPairGenerator.getInstance("RSA");
      keypairGenerator.initialize(2048);
      Keypair keypair= keypairGenerator.generateKayPair();
      this.publicKey = (RSAPublicKey) keypair.getPublic();
      this.privateKey = (RSAPrivateKey) keypair.getPrivate();
    }

    @Bean
    public JwtEncoder jwtEncoder() {
      JWK jwk = new RSAKey.Builder(publicKey).privateKey(privateKey).Build();
      JWKSource[SecurityContext] jwkSet = new ImmutableJWKSet[](new JWKSet(jwk));
      return new NimbusJwkEncoder(jwkSet);
    }
    @Bean
    public JwtDecoder jwtDecoder() {
      return NimbusDecoder.withPublicKey(publicKey).build();
    }`}
  </pre>
      <h3>권한 설정을 위해 security configuration에 필요</h3>
  <pre>{`
    .oauth2ResourceServer(oauth2 -> oauth2.jwt())
    .sessionManagement(sessionManagement -> 
       sessionManagement.sessionCreationPolicy(SessionCreationPolicy.STATELESS))`}
  </pre>
  <h3>위 보안 설정을 적용하기 위해서 아래 설정 필요(JWT와 spring security 간의 연동을 위한 변환 필요)</h3>
<pre>{`    public JwtAuthenticationConverter jwtAuthenticationConverter() {
    JwtGrantedAuthoritiesConverter jwtGrantedAuthoritiesConverter = 
        new JwtGrantedAuthoritiesConverter();
    jwtGrantedAuthoritiesConverter.setAuthoritiesClaimName("authorities");
    jwtGrantedAuthoritiesConverter.setAuthorityPrefix("");
    JwtAuthenticationConverter jwtAuthenticationConverter = 
        new JwtAuthenticationConverter();
    jwtAuthenticationConverter
        .setJwtGrantedAuthoritiesConverter(jwtGrantedAuthoritiesConverter);
    return jwtAuthenticationConverter;
  }`}
  </pre>
      <h3>여기 까지 해야 spring security 와 jwt 간 연동을 통해 권한 설정이 적용됨</h3>
      <h3>client 에서 요청하기 </h3>
  <pre>{`
  axios.interceptors.request.use(function(config) {
      config.headers.Authorization = Bearer 달러{token};
      return config;
    },
    function(error) {
      Promise.reject(error);
    });`}
  </pre>
    </div>
  )
}

export default SpringJwt
