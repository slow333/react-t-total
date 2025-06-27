import { Routes, Route } from 'react-router-dom';
import Note from './../note';
import {TwPages} from "./../tailwind/index";
// import {BasicTw, LayoutEls, MediaHandle, EtcMore, TwCustome, TwPages} from "./../tailwind/index";
import { Article, Brand, CTA, Feature } from "./../jsMastery/index";
import Acme from "./../acme/acme"

function MyRoutes() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Note />} />
        {/* tailwind practice pages */}
        <Route path="/tw-pages" element={<TwPages />} />
        {/* acme rocket page */}
        <Route path="/acme" element={<Acme />} />
        {/* === JavaScript Mastery : Build and Deploy 4 Modern React Apps and
          Get Hired as a Frontend Developer | Full 10-Hour Course === */}
        <Route path="/brand" element={<Brand />} />  
        <Route path="/article" element={<Article />} />  
        <Route path="/CTA" element={<CTA />} />  
        <Route path="/feature" element={<Feature />} />  
      </Routes>
    </>
  )
}

export default MyRoutes
