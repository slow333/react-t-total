import { Routes, Route } from 'react-router-dom';
import Note from './Note';
import ReactAppWrapper from './container/react/ReactAppWrapper';
import JavaBasicWrapper from './container/java/JavaBasicWrapper';
import JavaAdvWrappter from './container/java/JavaAdvWrappter';
import JavaCollectionWrappter from './container/java/JavaCollectionWrappter';
import PostgresAppWrapper from './container/psql/PostgresAppWrapper';
import CssWrapper from './container/css/CssWrapper';
import JSWrapperBasic from './container/js/JSWrapperBasic';
import JSWrapperAdvance from './container/js/JSWrapperAdvance';
import JSWrapperAsync from './container/js/JSWrapperAsync';
import JSWrapperNetReq from './container/js/JSWrapperNetReq';
import JSWrapperObject from './container/js/JSWrapperObject';

function MainRoutes() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Note />} />

        <Route path="/css" element={<CssWrapper />} />

        <Route path="/js-javascript" element={<JSWrapperBasic />} />
        <Route path="/js-advance" element={<JSWrapperAdvance />} />
        <Route path="/js-callback" element={<JSWrapperAsync />} />
        <Route path="/js-net-req" element={<JSWrapperNetReq />} />
        <Route path="/js-object" element={<JSWrapperObject />} />

        <Route path="/react-start" element={<ReactAppWrapper />} />

        <Route path="/java-basic" element={<JavaBasicWrapper />} />
        <Route path="/java-advance" element={<JavaAdvWrappter />} />
        <Route path="/java-collection" element={<JavaCollectionWrappter />} />

        <Route path="/psql-installation" element={<PostgresAppWrapper />} />
        
      </Routes>
    </>
  )
}

export default MainRoutes
