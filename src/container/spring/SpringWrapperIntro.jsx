import './SpringStyle.css'
import MainWrapper from "../../MainWrapper";
import SpringNav from './SpringNav';
import SpringIntroApp from './00-intro/SpringIntroApp';

function SpringWrapperIntro() {
  return (
    <MainWrapper aside={<SpringNav />}>
      <SpringIntroApp />
    </MainWrapper>
  )
}

export default SpringWrapperIntro
