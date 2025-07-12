import './JSMain.css';
import MainWrapper from './../../MainWrapper';
import JSNav from './JSNav';
import { JSBasicApp } from '.';

function JSWrapper() {
  return (
    <MainWrapper aside={ <JSNav /> }>
      <JSBasicApp />
    </MainWrapper>
  )
}

export default JSWrapper
