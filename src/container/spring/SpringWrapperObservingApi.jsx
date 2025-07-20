import './SpringStyle.css'
import MainWrapper from "../../MainWrapper";
import SpringNav from './SpringNav';
import SpringObservingAPIApp from './05-observing-aiRestClient/SpringObservingAPIApp';

function SpringWrapperObservingApi() {
  return (
    <MainWrapper aside={<SpringNav />}>
      <SpringObservingAPIApp />
    </MainWrapper>
  )
}

export default SpringWrapperObservingApi
