import React from 'react'
import { FaRocket } from "react-icons/fa";
import {BasicTw, LayoutEls, MediaHandle, TwCustome, EtcMore} from './index';

function TwPages() {
  return (
    <>
      <main className='w-full m-0 px-4 bg-slate-50 dark:bg-black dark:text-white 
              md:scroll-smooth'>
        <header className="bg-teal-700 text-white sticky top-0 z-200 text-sm h-16">
          <div className="w-full mx-auto p-4 rowCenterItems">
            <a href="#basic" className='rowCenterItems text-white text-lg'><FaRocket color='#fa1' size={24}/>
              Basic</a>
            <nav className="hidden md:block space-x-8 m-0 p-0 text-lg">
              <a href="#layoutElements" className="hover:opacity-90">Layout</a>
              <a href="#mediaHandle" className="hover:opacity-90">Media Query</a>
              <a href="#twCustome" className="hover:opacity-90">Customize</a>
              <a href="#etc" className="hover:opacity-90">More...</a>
            </nav>
          </div>
        </header>
        <div className='w-full mx-auto'>
          <section id="basic">
            <BasicTw />
          </section>
          <hr className="mt-6 mb-12 scroll-mt-40"/>
          <section id="layoutElements">
            <LayoutEls />
          </section>
          <hr className='mx-auto bg-black drak:bg-white w-1/2'/>
          <section id="mediaHandle">
            <MediaHandle />
          </section>
          <hr className='mx-auto bg-black drak:bg-white w-1/2'/>
          <section id="twCustome">
            <TwCustome />
          </section>
          <hr className='mx-auto bg-black drak:bg-white w-1/2'/>
          <section id="etc">
            <EtcMore />
          </section>                          
        </div>
      </main>
    </>
  )
}

export default TwPages
