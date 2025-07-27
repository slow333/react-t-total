import MainWrapper from '../../MainWrapper';
import PhpIntro from './01-setting-window/PhpIntro';
import PhpWinSetting from './01-setting-window/PhpWinSetting';
import PhpNav from './PhpNav';
import './PhpStyle.css';

function PhpWrapper() {
  return (
      <MainWrapper aside={<PhpNav />}>
        <PhpWinSetting />
        <PhpIntro />
      </MainWrapper>
  )
}

export default PhpWrapper
