import './SpringStyle.css'
import MainWrapper from "../../MainWrapper";
import SpringNav from './SpringNav';
import SpringSecurityApp from './03-spring-security/SpringSecurityApp';

function SpringWrapperSecurity() {
  return (
    <MainWrapper aside={<SpringNav />}>
      <SpringSecurityApp />
    </MainWrapper>
  )
}

export default SpringWrapperSecurity
