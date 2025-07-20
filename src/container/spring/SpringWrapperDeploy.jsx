import './SpringStyle.css'
import MainWrapper from "../../MainWrapper";
import SpringNav from './SpringNav';
import SpringDeployApp from './04-deploy/SpringDeployApp';

function SpringWrapperDeploy() {
  return (
    <MainWrapper aside={<SpringNav />}>
      <SpringDeployApp />
    </MainWrapper>
  )
}

export default SpringWrapperDeploy
