import React from 'react'

function MediaHandle() {
  return (
    <>
      {/* <main> */}
        <h1>화면 크기에 따른 변경</h1>
        <h1 className='text-xl font-bold mt-2'>tailwind는 기본적으로 md하면 medium 화면보다 크면 다 적용되는 방식임
        </h1>
          <div className='text-base font-light'>그외는(작은 화면에서는) 기본 설정 값이 적용됨(mobile first)</div>
        <div className='text-2xl font-semibold text-blue-900 mt-5'>반대로 하기위해서는 앞에 max-md 하면됨</div>
          <div className='md:block md:bg-amber-400 hidden mt-5'>
            <p>미디어 디바이스(768px)에서 보이기 시작함</p>
          </div>
          <div className='md:bg-blue-500 sm:bg-green-600 mt-5'>
            <p>미디어 디바이스(768px) 기준으로 배경색 변경</p>
          </div>
          <div className='md:hidden d-block mt-5'>
            <p>위와는 반대로 md에서 안보이고 작은데서 보임</p>
          </div>
          <div className='max-md:bg-red-700 mt-5'>
            <p>max-md : md보다 작으면 적용</p>
          </div>
          <div className="text-2xl font-bold mt-5">사용자 지정 breakpoint</div>
          <div className='font-bold mt-5'>'--breakpoint-*' 의 theme variable을 지정</div>
          <pre className='mt-5'>{`// app.css
  @import "tailwindcss";
  @theme {
    --breakpoint-xs: 30rem;
    --breakpoint-2xl: 100rem;
    --breakpoint-3xl: 120rem;
  }`}</pre>
      <div className="text-2xl font-bold">임의의 값으로 breakpoint 지정하기</div>
      <p>
      [ div className="max-600px]:bg-sky-400 min-[300px]:text-center ]
        </p>

        <div className="text-2xl">dark mode, light mode</div>
        <div className="text-xl">기본 적으로 윈도의 화면 모드에 따라 적용됨</div>
        <div className="bg-white dark:bg-black text-black dark:text-white">
          다크 모드에서 배경 검정, 글자 흰색 : dark:bg-black text-black dark:text-white
        </div>
      {/* </main> */}
    </>
  )
}

export default MediaHandle
