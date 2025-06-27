import React, { useState, useEffect } from 'react'

function EtcMore() {
  const [darkMode, setDarkMode]= useState(false);

  useEffect(() => {
    darkMode 
      ? document.body.classList.add('dark') 
      : document.body.classList.remove('dark');
  },[darkMode]);

  return (
    <div>
      {/* <main> */}
        <h1 className='text-3xl'>Accordian, Click, checkbox color, Fluid Text, Hilight, Caret</h1>
        <h2>button click 하면 내용 바꾸기, javascript 없음</h2>
        <div className="card flex flex-col items-center">
          사용은 className에 이름만 적으면됨<br/>
          <button onClick={ () => setDarkMode(prev => !prev)} className='text-xl font-bold'>
            Toggle Dark Mode
          </button>
        </div>
        <div className="flex flex-col text-blue-700 ml-2">
          <label><input type="checkbox" checked onChange={() => null}/> Browser default</label>
          <label><input type="checkbox" className="accent-pink-600 me-2" onChange={() => null}/> 
            accent-color-depth하면 checkbox color가 바뀜</label>
        </div>

        <h2>Fluid Text</h2>
        <div className="md:text-5xl lg:text-3xl">화면 크기에 따른 변화</div>
        <p className="text-[min(5vw,40px)]">
          화면 크기에 따라 글자 크기가 바뀜 text-[min(5vw,70px)]
          화면 넓이의 5%에서 70px까지 커짐
        </p>

        <h2>File</h2>
        <label className="my-4 block ">
          <input type="file" 
            className="block w-full text-sm text-slate-700
              file:mr-4 file:rounded-full file:border-1 file:px-4 file:py-2 
              file:text-sm file:text-violet-700
              hover:file:bg-red-500" />
        </label>

        <h2>Hilight</h2>
        <div className="selection:bg-green-300 selection:text-white contentCenter min-w-full">
          <strong>마우스로 드래그했을 때 배경 및 글자 색 지정,</strong><br/>
          selection:bg-green-300 selection:text-white<br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>

        <h2>Accordian</h2>
        <div className="max-w-auto mx-15 p-8">
          <details className="open:bg-green-900 open:ring-3 open:ring-black/5 
          open:rounded-2xl open:shadow-lg p-6">
            <summary className="text-lg leading-5 text-slate-900 font-semibold select-none 
              cursor-pointer hover:text-teal-300 dark:text-red-500">
              cursor-pointer on summary
            </summary>
            <div className="mt-3 text-sm leading-6 text-slate-100 dark:text-slate-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum, 
                id quas numquam sit, magnam vero quisquam, amet voluptatibus sed veritatis 
                nisi dolores. Hic quis debitis nesciunt aut. Quibusdam, sed?
            </div>
          </details>
          <details className="open:bg-violet-400 open:ring-1 open:ring-black/5 open:shadow-lg p-6 rounded-lg border-1" open>
            <summary className="text-xl leading-5 text-slate-900 dark:text-green font-semibold hover:text-teal-700">
              border on details, hover:text-teal-700 on summary
            </summary>
            <div className="mt-3 text-sm leading-6 text-slate-100 dark:text-slate-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum, 
                id quas numquam sit, magnam vero quisquam, 
                amet voluptatibus sed veritatis nisi dolores. Hic quis debitis nesciunt aut. Quibusdam, sed?
            </div>
          </details>
        </div>

        <h2>Caret</h2>
        <textarea 
          name="txarea" 
          className="w-full caret-pink-700 p-2 text-gray-800 border-1 rounded-xl"></textarea>
      {/* </main> */}
    </div>
  )
}

export default EtcMore
