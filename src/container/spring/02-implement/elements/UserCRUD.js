import React from 'react'

function UserCRUD() {
  return (
    <div>
      <div className="for-space" id='spring-user-crud'></div>
      <h1>User CRUD</h1>
      <h4>user는 기본 class에 있어서 다른 이름으로 해야함. SiteUser</h4>
      <h4>user entity 생성</h4>
        <p>user는 id, username, password, enabled, roles로 구성(validation 적용)</p>
      <h4>User Dto 생성(record)</h4>
        <p>password 제외</p>
        <p>conveter 생성</p>
      <h4>controller 생성</h4>
        <p>add(save)에서 받을 객체는 entity 개체로 받음(생성시 패스워드 필요)</p>
        <p>update 할 때 패스워드 없이 dto로 함(password는 별도로 처리 필요)</p>
      <h4>service, repository 생성</h4>
      <h4>DB initializer에 user 생성 및 저장</h4>
        <p>DB에서 password가 plain text로 보임</p>
      <h4>Test 생성 및 수행</h4>
    </div>
  )
}

export default UserCRUD
