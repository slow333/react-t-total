import  { ReactNav, ReactStart, ReactProps, ReactColorBox, 
   JsonServer, ReactFetchApi, ReactRouter}  from '.';
import MainWrapper from '../../MainWrapper';
import './ReactApp.css';

function ReactAppWrapper() {

   return (
      <MainWrapper aside={<ReactNav />}>
         <ReactStart />
         <ReactColorBox />
         <ReactProps />
         <JsonServer />
         <ReactFetchApi />
         <ReactRouter />
      </MainWrapper>
   )
}

export default ReactAppWrapper
