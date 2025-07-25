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
import JSWrapperYieldModule from './container/js/JSWrapperYieldModule';
import DomWrapperDocument from './container/dom/DomWrapperDocument';
import DomWrapperEvent from './container/dom/DomWrapperEvent';
import DomWrapperForm from './container/dom/DomWrapperForm';
import Missing from './container/Missing';
import SpringWrapperIntro from './container/spring/SpringWrapperIntro';
import SpringWrapperImplement from './container/spring/SpringWrapperImplement';
import SpringWrapperSecurity from './container/spring/SpringWrapperSecurity';
import SpringWrapperDeploy from './container/spring/SpringWrapperDeploy';
import SpringWrapperObservingApi from './container/spring/SpringWrapperObservingApi';
import PhpWrapper from './container/php/PhpWrapper';

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
        <Route path="/js-yield" element={<JSWrapperYieldModule />} />

        <Route path="/dom-document" element={<DomWrapperDocument />} />
        <Route path="/dom-event" element={<DomWrapperEvent />} />
        <Route path="/dom-form" element={<DomWrapperForm />} />

        <Route path="/react-start" element={<ReactAppWrapper />} />

        <Route path="/java-basic" element={<JavaBasicWrapper />} />
        <Route path="/java-advance" element={<JavaAdvWrappter />} />
        <Route path="/java-collection" element={<JavaCollectionWrappter />} />
        
        <Route path="/spring-intro" element={<SpringWrapperIntro />} />
        <Route path="/spring-implement" element={<SpringWrapperImplement />} />
        <Route path="/spring-security" element={<SpringWrapperSecurity />} />
        <Route path="/spring-deploy" element={<SpringWrapperDeploy />} />
        <Route path="/spring-observing-api" element={<SpringWrapperObservingApi />} />

        <Route path="/php-start" element={<PhpWrapper />} />
        
        <Route path="/psql-installation" element={<PostgresAppWrapper />} />

        <Route path='*' element={<Missing />} />
      </Routes>
    </>
  )
}

export default MainRoutes
