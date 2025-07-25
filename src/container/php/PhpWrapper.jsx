import MainWrapper from '../../MainWrapper';
import PhpWinSetting from './01-setting-window/PhpWinSetting';
import PhpNav from './PhpNav';
import './PhpStyle.css';

function PhpWrapper() {
  return (
      <MainWrapper aside={<PhpNav />}>
        <PhpWinSetting />
      </MainWrapper>
  )
}

export default PhpWrapper
