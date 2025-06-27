import { useEffect, useState } from "react";
import { FaRocket } from "react-icons/fa";

function Acme() {
  const [show, setShow] = useState(false);

  return (
    <>
      <main className='w-full m-0 px-4 bg-slate-50 dark:bg-black dark:text-white 
        md:scroll-smooth'>
        <header className="bg-teal-700 text-white sticky top-0 z-200">
          <div className="max-w-4xl mx-auto p-4 rowCenterItems z-200">
            <div className="text-white text-2xl ">
              <a href="#hero" className='rowCenterItems'><FaRocket color='#fa1'/>
              Acme Rockets</a>
            </div>
            <div className='rowCenterItems m-0'>
              <button id='hamburger-button' onClick={() => setShow(pre => !pre)}
                className="m-0 p-0 text-3xl bg-transparent text-white md:hidden cursor-pointer">
              &#9776;
              </button>
            </div>
            <nav className="hidden md:block space-x-8 text-xl m-0 p-0">
              <a href="#rockets" className="hover:opacity-90">Rockets</a>
              <a href="#testimonials" className="hover:opacity-90">Testimonials</a>
              <a href="#contact" className="hover:opacity-90">Contact</a>
            </nav>
          </div>
          { show && 
          <div id="mobile-menu" className="absolute top-17 bg-black w-full text-7xl 
              flex flex-col justify-content-center z-300 origin-top animate-open-menu ">
            <div className="text-8xl self-end m-0 p-0 px-6 cursor-pointer" onClick={() => setShow(pre => !pre)}>
              &times;
            </div>
            <nav className="flex flex-col min-h-screen items-center py-8" onClick={() => setShow(pre => !pre)}>
              <a href="#hero" className="w-full text-center py-6 hover:opacity-90">
                Home</a>
              <a href="#rockets" className="w-full text-center py-6 hover:opacity-90">
                Rockets</a>                
              <a href="#testimonials" className="w-full text-center py-6 hover:opacity-90">
                Testimonials</a>
              <a href="#contact" className="w-full text-center py-6 hover:opacity-90">
                Contact Us</a>                
              <a href="#footer" className="w-full text-center py-6 hover:opacity-90">
                Legal</a>                
            </nav>
          </div>}
        </header>
        <div className='max-w-4xl mx-auto'>
          <section id="hero" className="colCenterItems mt-10 md:flex-row gap-8 mb-12 scroll-mt-40">
            <article class="sm:w-1/2">
              <h2 class="max-w-md text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-left sm:text-5xl">
                We Boldy Go
                <span class="text-indigo-700 dark:text-indigo-300">Where No Rocket</span>
                Has Gone Before...
              </h2>
              <p class="mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left">
                We're building rockets for the next century today. From the moon to
                Mars, Jupiter and beyond...
              </p>
              <p class="mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left">
                Think Acme Rockets.
              </p>
            </article>
            <img src="/assets/rocketdab.png" className='w-1/3 mt-4' alt='rocketdab'/>
          </section>
          <hr className='mx-auto bg-black drak:bg-white w-1/2'/>
          <section id="rockets" className="colCenterItems p-6 my-10  scroll-mt-40">
            <h2 className="no-underline md:text-4xl mb-6 text-slate-800 dark:text-white">
              Our Rockets
            </h2>
            <ul className="list-none mx-auto my-10 
            flex flex-col justify-center items-center space-y-6 mb-5 md:flex-row md:gap-4">
              <li className="w-2/3 md:w-5/6 colCenterItems border border-solid border-slate-900 dark:border-gray-100 dark:bg-black bg-white py-6 px-2 rounded-2xl shadow-xl">
                <img src="/assets/rocketman.png" className='w-1/2 mb-5' alt="" />
                <h3 className="text-3xl text-center text-slate-900 dark:text-white dark:bg-black">
                  Explorer
                </h3>
                <p className="hidden md:block text-3xl text-center text-slate-400 dark:text-slate-400">
                  $
                </p>
                <p className="md:hidden mt-2 text-2xl text-center text-slate-400 dark:text-slate-400 dark:bg-black">
                  Affordalbe Exploration
                </p>              
              </li>
              <li className="w-2/3 md:w-5/6 colCenterItems border border-solid border-slate-900 dark:border-gray-100 dark:bg-black bg-white py-6 px-2 rounded-2xl shadow-xl">
                <img src="/assets/rocketride.png" className='w-1/2 mb-5' alt="" />
                <h3 className="text-3xl text-center text-slate-900 dark:text-white dark:bg-black">
                  Adventurer
                </h3>
                <p className="hidden md:block text-3xl text-center text-slate-400 dark:text-slate-400">
                  $$
                </p>
                <p className="md:hidden mt-2 text-2xl text-center text-slate-400 dark:text-slate-400 dark:bg-black">
                  가장 잘팔리는 로케트
                </p>              
              </li>         
              <li className="w-2/3 md:w-5/6 colCenterItems border border-solid border-slate-900 dark:border-gray-100 dark:bg-black bg-white py-6 px-2 rounded-2xl shadow-xl">
                <img src="/assets/rocketlaunch.png" className='w-1/2 mb-5' alt="" />
                <h3 className="text-3xl text-center text-slate-900 dark:text-white dark:bg-black">
                  Infinity
                </h3>
                <p className="hidden md:block text-3xl text-center text-slate-400 dark:text-slate-400">
                  $$$
                </p>
                <p className="md:hidden mt-2 text-2xl text-center text-slate-400 dark:text-slate-400 dark:bg-black">
                  고급 우주선
                </p>              
              </li>                         
            </ul>
          </section>
          <hr className='mx-auto bg-black drak:bg-white w-1/2'/>
          <section id="testimonials" className="colCenterItems p-6 my-10">
            <h2 className="no-underline md:text-4xl mb-6 text-slate-800 dark:text-white">
              Testmonials
            </h2>
            <figure class="my-12">
              <blockquote class="relative rounded-3xl bg-teal-600 py-12 pl-14 pr-8 dark:bg-black">
                <p
                  class="mt-2 text-left text-2xl text-white before:absolute before:top-0 before:left-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['\201C'] after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-white after:opacity-25 after:content-['\201D'] dark:text-slate-400 sm:text-3xl">
                  Acme has always been there for me. Their Explorer rocket arrived
                  in a wooden crate as expected. Life-long customer! A++ shopping
                  experience.
                </p>
              </blockquote>
              <figcaption class="mt-2 text-right text-xl italic text-slate-500 dark:text-slate-400 sm:text-2xl">
                &#8212;Wile E. Coyote, Genius
              </figcaption>
            </figure>
            <figure class="my-12">
              <blockquote class="relative rounded-3xl bg-teal-600 py-12 pl-14 pr-8 dark:bg-black">
                <p
                  class="mt-2 text-left text-2xl text-white before:absolute before:top-0 before:left-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['\201C'] after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-white after:opacity-25 after:content-['\201D'] dark:text-slate-400 sm:text-3xl">
                  The Acme Adventurer Rocket has thwarted my Illudium Q-36 Explosive
                  Space Modulator on several occassions.
                  <span class="italic">This makes me very, very angry!</span>
                  Nevertheless, K-9 and I have awarded Acme the Martian contract for
                  space exploration rockets based on Acme's quality and sturdy
                  designs.
                </p>
              </blockquote>
              <figcaption class="mt-2 text-right text-xl italic text-slate-500 dark:text-slate-400 sm:text-2xl">
                &#8212;Marvin The Martian &amp; K-9
              </figcaption>
            </figure>
            <figure class="my-12">
              <blockquote class="relative rounded-3xl bg-teal-600 py-12 pl-14 pr-8 dark:bg-black">
                <p
                  class="mt-2 text-left text-2xl text-white before:absolute before:top-0 before:left-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['\201C'] after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-white after:opacity-25 after:content-['\201D'] dark:text-slate-400 sm:text-3xl">
                  I knew I not only wanted &#8212;
                  <span class="italic">I needed</span> &#8212; Acme's Infinity
                  Rocket for my mission in space. Acme delivered in one day! Nothing
                  says <q class="italic">Take me to your leader</q> like Acme's
                  Infinity Rocket! 💯
                </p>
              </blockquote>
              <figcaption class="mt-2 text-right text-xl italic text-slate-500 dark:text-slate-400 sm:text-2xl">
                &#8212;Buzz Lightyear
              </figcaption>
            </figure>      
          </section>
          <hr className='mx-auto bg-black drak:bg-white w-1/2'/>
          <section id="contact" className="colCenterItems p-6 my-10">
            <h2 className="no-underline md:text-4xl mb-6 text-slate-800 dark:text-white">
              Contact Us
            </h2>
            <form action="" class="items-left mx-auto flex max-w-4xl flex-col gap-4 text-2xl sm:text-3xl">
              <label for="subject">Subject:</label>
              <input type="text" id="subject" name="subject" required minlength="3" maxlength="60" placeholder="Your Subject"
                class="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black dark:border-none sm:text-3xl" />
              <label for="message">Message:</label>
              <textarea name="message" id="message" cols="30" rows="10" placeholder="Your Message" required
                class="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black dark:border-none sm:text-3xl"></textarea>
              <button
                class="w-48 rounded-xl border border-solid border-slate-900 bg-teal-700 p-3 text-white hover:bg-teal-600 active:bg-teal-500 dark:border-none">
                Submit
              </button>
            </form>            
          </section>                    
        </div>
      </main>
    </>
  )
}

export default Acme
