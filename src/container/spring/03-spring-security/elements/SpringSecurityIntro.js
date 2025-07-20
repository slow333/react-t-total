import React from 'react'

function SpringSecurityIntro() {
  return (
    <div>
      <h1>Introduction Spring Security</h1>
      <h4>Result data: userInfo(username,enabled,roles,id), token(jwt)으로 구성</h4>
      <h4>Spring Security Highlights</h4>
      <h5>HTTP 기본 인증과 Spring Data Jpa를 사용하여 데이터베이스에 대한
        username과 password에 대한인증을 수행합니다.</h5>
      <h5>JSON web token(JWT) 생성과 검증은 Spring Security OAuth2 Resource server를 사용(dependency)</h5>
      <h5>Role-Based authorization or access control(RBAC)</h5>
      <h5>authentication(사용자 인증) and authorization(사용자 권한 검증) exception</h5>
      <h32>검증 절차(간략)</h32>
  <pre>{`
  username, passowrd  --- Authenticate ---- DB
                  (HTTP basic authentication)
                                |
                                | (Success Authentication)
                                |
                                |--- Generate a JWT
                                                |
  token ----------------------------------------|`}
  </pre>
{/* <img src="/images/authProcess.png" alt="auth process" width="94%"> */}
      <img src="/images/authProcessDetails.png" alt="auth process detail" 
     width="100%" style={{marginLeft:"20px"}} />

      
    </div>
  )
}

export default SpringSecurityIntro
