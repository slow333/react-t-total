import CssNav from './CssNav';
import CssBasic from './css-elements/CssBasic';
import MainWrapper from '../../../MainWrapper';

function CssBasicWrapper() {
  return (
    <MainWrapper aside={<CssNav/>}>
      <CssBasic />
    </MainWrapper>
  )
}

export default CssBasicWrapper
