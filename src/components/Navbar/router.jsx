import { Routes, Route } from 'react-router-dom';
import Note from './../../Note';
import CssApp from './../../container/domCss/02-css/CssApp';
import ReactApp from './../../container/react/ReactApp';

function MyRoutes() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Note />} />
        <Route path="/css" element={<CssApp />} />
        <Route path="/react" element={<ReactApp />} />
      </Routes>
    </>
  )
}

export default MyRoutes
