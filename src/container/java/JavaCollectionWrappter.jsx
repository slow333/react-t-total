import './cssJava.css';
import JavaNav from './JavaNav';
import MainWrapper from '../../MainWrapper';
import JavaCollection from './03-adv/JavaCollection';

function JavaAdvWrappter() {
  return (
    <MainWrapper aside={<JavaNav />}>
      <JavaCollection />
    </MainWrapper>
  )
}
export default JavaAdvWrappter
