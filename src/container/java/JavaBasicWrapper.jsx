import './cssJava.css';
import JavaBasicApp  from './01-basic/JavaBasicApp';
import JavaNav from './JavaNav';
import MainWrapper from '../../MainWrapper';

function JavaBasicWrapper() {
  return (
    <MainWrapper aside={<JavaNav />}>
      <JavaBasicApp />
    </MainWrapper>
  )
}

export default JavaBasicWrapper
