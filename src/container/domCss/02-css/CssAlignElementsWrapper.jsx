import CssNav from './CssNav';
import  CssAlignElements from './css-elements/CssAlignElements';
import MainWrapper from '../../../MainWrapper';

function CssAlignElementsWrapper() {
  return (
    <MainWrapper aside={<CssNav/>}>
      <CssAlignElements />
    </MainWrapper>
  )
}

export default CssAlignElementsWrapper
