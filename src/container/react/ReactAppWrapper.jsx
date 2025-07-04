import  { ReactNav, ReactStart, ReactMd, ReactAdv}  from '.';
import MainWrapper from '../../MainWrapper';
import './ReactApp.css';

function ReactAppWrapper() {

   return (
      <MainWrapper aside={<ReactNav />}>
         <ReactStart />
         <ReactMd />
         <ReactAdv />
      </MainWrapper>
   )
}

export default ReactAppWrapper
