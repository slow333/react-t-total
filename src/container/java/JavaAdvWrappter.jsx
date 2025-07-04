import './cssJava.css';
import JavaNav from './JavaNav';
import MainWrapper from '../../MainWrapper';
import JavaAdvApp from './03-adv/JavaAdvApp';

function JavaAdvWrappter() {
  return (
    <MainWrapper aside={<JavaNav />}>
      <JavaAdvApp />
    </MainWrapper>
  )
}
export default JavaAdvWrappter
