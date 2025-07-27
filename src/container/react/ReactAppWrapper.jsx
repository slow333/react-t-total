import  { ReactNav, ReactStart, ReactProps, ReactColorBoxApp, 
   JsonServer, ReactFetchApi, ReactRouter}  from '.';
import MainWrapper from '../../MainWrapper';
import './ReactApp.css';

function ReactAppWrapper() {

   return (
      <MainWrapper aside={<ReactNav />}>
         <ReactStart />
         <ReactColorBoxApp />
         <ReactProps />
         <JsonServer />
         <ReactFetchApi />
         <ReactRouter />
      </MainWrapper>
   )
}

export default ReactAppWrapper
