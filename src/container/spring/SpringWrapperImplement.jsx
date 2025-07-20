import './SpringStyle.css'
import MainWrapper from "../../MainWrapper";
import SpringNav from './SpringNav';
import SpringImplementApp from './02-implement/SpringImplementApp';

function SpringWrapperImplement() {
  return (
    <MainWrapper aside={<SpringNav />}>
      <SpringImplementApp />
    </MainWrapper>
  )
}

export default SpringWrapperImplement
