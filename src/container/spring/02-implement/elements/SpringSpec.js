import React from 'react'

function SpringSpec() {
  return (
    <div>
      <div className="for-space" id='spring-spec'></div>
      <h1>Specification</h1>
      <h4>Spec</h4>
  <pre>{`
public class ArtifactSpecs{

  public static Specification[Artifact] hasId(String providedId) {
    return new Specification[] {
      public Predicate toPredicate(Root[Artifact] root,
        CriteriaQuery[] query,
        CriteriaBuilder criteriaBuilder) {
        return criteriaBuilder.equal(criteriaBuilder.toLowercase(root.get("id")),
              providedId.toLowercase());
      }
    }
  }
  // to lambda
  public static Specification[Artifact] hasId(String providedId) {
    (root, query, criteriaBuilder) - criteriaBuilder.equal(root.get("id"), providedId);
  }
  public static Specification[Artifact] containsName(String providedName) {
    (root, query, criteriaBuilder) -
      criteriaBuilder.like(criteriaBuilder.lower(root.get("name")),
         "%" + providedId.toLowercase() + "%");
  }
  containsDescription
  hasOwnerName
  (root, query, criteriaBuilder) -
      criteriaBuilder.like(criteriaBuilder.lower(root.get("owner").get("name")),
         "%" + providedName.toLowercase() + "%");

}`}
  </pre>
      <h4>Repository add implements JpaSpecificationExecutor</h4>
      <h4>Controller</h4>
  <pre>{`  @PostMapping("/search")
  public Result findArtifactsByCriteria(
      @RequestBody Map[String, String] searchCriteria,
      Pageable pageable ) {
    Page[Artifact] artifactPage = artifactService.findByCriteria(searchCriteria, pageable);
    Page[ArtifactDto] dtoPage = artifactPage.map(
      a - converter(a);
    );
    return new Result(..., dtoPage);
  }`}
  </pre>
      <h4>Service</h4>
<pre>{`    public Page[Artifact] findByCriteria(
        Map[String, String] searchCriteria, Pageable pageable){
    Specification[] spec = Specification.where(null);
    if(StringUtils.hasLength(searchCriteria.get("id"))){
      this.spec = spec.and(ArtifactSpec.hasId(searchCriteria.get("id"));
    }
    if name
    if description
    if ownerName
    return artifactRepository.findAll(spec, pageable);
  }`}
  </pre>
      <h4>security에 "search" 추가</h4>
      <h4>integration test</h4>
  <pre>{`  findByDescription
  Map[String, String] searchCriteria = new HashMap();
  searchCriteria.put("description", "찾는 단어");
  String json = objectMapper.writeValueAsString(searchCriteria);
  // page
  MultiValueMap requestParams
  requestParams.add("page", "0");
  requestParams.add("size", "2");
  requestParams.add("sort","name,asc");
  mockMvc.perform(post("/search").params(requestParams)...
    .andExpect(jsonPath("$.data.content", Matchers.hasSize(2)));`}
  </pre>
    </div>
  )
}

export default SpringSpec
