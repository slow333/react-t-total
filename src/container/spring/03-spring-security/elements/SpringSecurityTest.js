import React from 'react'

function SpringSecurityTest() {
  return (
    <div>
      <h1>Test with Spring Security</h1>
      <h3>controller integration test</h3>
      <h5>org.springframework.boot:spring-boot-starter-test</h5>
      <h5>org.springframework.security:spring-security-test</h5>
  <pre>{`
    String token;
    @BeforeEach
    void setup() {
      ResultActions ra = mockMvc.perform(post(url + "/login")
          .with(httpBasic("admin", "321")));
      MvcResult result = ra.andDo(print()).andReturn();
      String response = result.getResponse().getContentAsString();
      JSONObject jsonObject = new JSONObject(response);
      this.token = "Bearer " + jsonObject.getJSONObject("data").getString("token");
    }
    // 위 값을 mvcMock에 header("Authorization", token)으로 해서 넣어줌`}
  </pre>
    </div>
  )
}

export default SpringSecurityTest
