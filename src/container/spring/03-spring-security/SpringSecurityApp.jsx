import React from 'react'
import SpringSecurityIntro from './elements/SpringSecurityIntro'
import HttpBasicAuthentication from './elements/HttpBasicAuthentication'
import SpringJwt from './elements/SpringJwt'
import ExceptionControllerAdvice from './elements/ExceptionControllerAdvice'
import SpringSecurityTest from './elements/SpringSecurityTest'
import SpringAccessControll from './elements/SpringAccessControll'
import PasswordChangeRedis from './elements/PasswordChangeRedis'
import CorsSetting from './elements/CorsSetting'

function SpringSecurityApp() {
  return (
    <div>
      <SpringSecurityIntro />
      <HttpBasicAuthentication />
      <SpringJwt />
      <ExceptionControllerAdvice />
      <SpringSecurityTest />
      <SpringAccessControll />
      <PasswordChangeRedis />
      <CorsSetting />
    </div>
  )
}

export default SpringSecurityApp
