import { Routes, Route } from 'react-router-dom';
import Note from './Note';
import ReactAppWrapper from './container/react/ReactAppWrapper';
import {CssBasicWrapper, CssAlignElementsWrapper, CssMediumWrapper} from './container/domCss/02-css';
import JavaBasicWrapper from './container/java/JavaBasicWrapper';
import JavaAdvWrappter from './container/java/JavaAdvWrappter';
import JavaCollectionWrappter from './container/java/JavaCollectionWrappter';
import PostgresAppWrapper from './container/psql/PostgresAppWrapper';

function MainRoutes() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Note />} />

        <Route path="/css-basic" element={<CssBasicWrapper />} />
        <Route path="/css-medium" element={<CssMediumWrapper />} />
        <Route path="/css-align" element={<CssAlignElementsWrapper />} />

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
