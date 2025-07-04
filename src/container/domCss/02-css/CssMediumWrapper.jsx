import MainWrapper from '../../../MainWrapper'
import CssNav from './CssNav';
import CssMedium from './css-elements/CssMedium';

function CssMediumWrapper() {
  return (
    <MainWrapper aside={<CssNav />}>
      <CssMedium />
    </MainWrapper>
  )
}

export default CssMediumWrapper
