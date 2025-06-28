import { Routes, Route } from 'react-router-dom';
import Note from './../../Note';
import CssApp from './../../container/domCss/02-css/CssApp';

function MyRoutes() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Note />} />
        <Route path="/css" element={<CssApp />} />
      </Routes>
    </>
  )
}

export default MyRoutes
