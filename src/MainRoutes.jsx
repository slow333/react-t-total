import { Routes, Route } from 'react-router-dom';
import Note from './Note';
import ReactAppWrapper from './container/react/ReactAppWrapper';
import JavaBasicWrapper from './container/java/JavaBasicWrapper';
import JavaAdvWrappter from './container/java/JavaAdvWrappter';
import JavaCollectionWrappter from './container/java/JavaCollectionWrappter';
import PostgresAppWrapper from './container/psql/PostgresAppWrapper';
import CssWrapper from './container/css/CssWrapper';
import JSWrapper from './container/js/JSWrapper';

function MainRoutes() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Note />} />

        <Route path="/css" element={<CssWrapper />} />

        <Route path="/javascript" element={<JSWrapper />} />

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
