function TwCustome() {
  return (
    <>
      {/* <main> */}
        <h1>사용자 정의 className, tag style 지정</h1>
        <h2 className="mt-5 mb-3">설정 파일: /src/main.css </h2>
        <div className="text-3xl font-bold">사용자정의 색상 이름 지정해서 사용하기</div>
        <pre>
    {`
  @theme {
    --color-chestnut: #92343; 
  }
  `}
        </pre>   
        <p className="text-chestnut text-xl">사용자 정의 색상 지정 사용은 text-chestnut 하면됨</p>
        <p className="text-chestnut text-xl">theme variable에 가면 색 뿐만아니라 폰트 등 많음</p>
        <p className="text-2xl font-bold">사용자 지정 스타일 만들기(className 지정)</p>
        <pre>
  {`
  @layer components {
    .card {
      @apply m-10 rounded-lg bg-white px-6 py-8 shadow-xl 
          ring-1 ring-amber-400/5 dark:bg-black
    }
  }
  `}  
        </pre>

        <h2>기본 tag에 대해 스타일 적용하기</h2>
        <h3>h1, h2, pre 등에 대해 적용해 놓으면됨</h3>
        <pre>{`
  @layer base {
    h1 {
      @apply text-3xl font-bold text-center text-green-900;
    }
    h3 {
      @apply text-2xl font-medium tracking-tight text-slate-900 dark:text-white;
    }  
    button {
      @apply px-4 py-2 text-sm font-medium mt-8 
          text-blue-600 bg-blue-200 rounded-md;
    }
    pre {
      @apply font-pre text-base;
    }
    section {
      @apply p-5 border-1 border-gray-500 rounded-lg m-2;
    }
  }
  `}  
        </pre>
        <h2>사전 정의된 컴포넌트 라이브러리</h2>
        <h3>사전 정의된 컴포넌트 라이브러리는 shadcn/ui 에 가면 많이 있음</h3>
        <pre>{`
  import {Button} from "@/components/ui/button"
  <Button variant="outline">Button &lt;/Button>
  `}
        </pre>
      {/* </main> */}
    </>
  )
}

export default TwCustome