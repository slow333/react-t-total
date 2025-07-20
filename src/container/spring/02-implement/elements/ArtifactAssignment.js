import React from 'react'

function ArtifactAssignment() {
  return (
    <div>
      <div className="for-space" id='spring-artifact-assignment'></div>
      <h1>Artifact Assignment</h1>
      <h3>wizard에 생성함 : "wizards/wizardId/artifact/artifactId</h3>
      <h5>artifact의 소유자를 변경함(wizard1 에서 wizard2로)</h5>
      <h5>Given에서 findById 2개(artifact, wizard) 실행</h5>
      <h5>then에서 w.getArtifacts() 헤서 contains(artifact)함</h5>
      <h3>wizard service test</h3>
  <pre>{`
   @Test
   @DirtiesContext(methodMode = DirtiesContext.MethodMode.BEFORE_METHOD)
   void testAssignSuccess() {
      // Given
      Artifact a = new Artifact();
      a.setId("12306");
      a.setName("Sixth Artifact");
      a.setDescription("Sixth Artifact brain");
      a.setImageUrl("image");

      Wizard w = new Wizard();
      w.setId(2);
      w.setName("SuperMan");
      w.addArtifact(a);

      Wizard w3 = new Wizard();
      w3.setId(3);
      w3.setName("Neville Longbottom");

      given(artifactRepository.findById("12306")).willReturn(Optional.of(a));
      given(wizardRepository.findById(3)).willReturn(Optional.of(w3));
      // When
      wizardService.assignArtifact(3, "12306");
      // Then
      assertThat(a.getOwner().getId()).isEqualTo(3);
      assertThat(w3.getArtifacts().size()).isEqualTo(1);
   }`}
  </pre>
  <h3>main service</h3>
  <pre>{`
    if(artifactToBeAssigned.getOwner() != null) {
      artifactToBeAssigned.getOwner().removeArtifact(artifactToBeAssigned);
    }
    wizard.addArtifact(artifactToBeAssigned);`}
  </pre>
  <pre>{`
    // wizard
    public void removeArtifact(Artifact a) {
      artifacts.remove(a);
      a.setOwner(null);
    }`}
  </pre>
      <h3>controller test(PatchMapping)</h3>
      <h5>return 값이 void 이니까 doNothing해야함</h5>
    </div>
  )
}

export default ArtifactAssignment
