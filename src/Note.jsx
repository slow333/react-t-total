
export default function Note() {
  return (
    <div>
    <h1>홈: 각종 관련 내용</h1>
    <section>
       <h2>CSS(no framework), React로 함</h2>
      <h3>관련 javascript, css 등은 JS Info, MDN 페이지를 참조함</h3>
      <ul>
        <li><a href="https://ko.javascript.info/">JS infor 페이지</a></li>
        <li><a href="https://developer.mozilla.org/ko/docs/Learn/HTML">MDN HTML 공부 페이지</a></li>
        <li><a href="https://developer.mozilla.org/ko/docs/Learn/CSS">MDN CSS 공부 페이지</a></li>
        <li><a href="https://developer.mozilla.org/ko/docs/Learn/JavaScript/">MDN JS 공부 페이지</a></li>
        <li><a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects">
          JS 표준 내장 객체</a></li>
      </ul>
      <h3>vs code 단축키</h3>
        <ul>
          <li>한줄 복사: alt+shift + arrow</li>
          <li>한줄 이동: alt + arrow</li>
          <li>줄삭제:Ctrl + Shift + K </li>
          <li>한줄 위로 이동: alt + up</li>
          <li>한줄 아래로 이동: alt + down</li>
          <li>한줄 위로 복사: alt + shift + up</li>
          <li>한줄 아래로 복사: alt + shift + down</li>
          <li>여러항목 동시에 선택: ctrl + shift + L</li>
          <li>단축키지정(user snippets): [File]-[Preference]-[Configure User Snippets]</li>
  <pre>{`javascript.json에 내용 추가
    "console.log print":{
      "prefix": "cl",
      "body": [ "console.log()" ],
      "description": "Log output to console"  }`}</pre>
      </ul>
  <h3>web storm 단축키</h3>
      <ul>
        <li>console.log: log + tab</li>
        <li>찾아서 바꾸기: ctrl + r;</li>
      </ul>
    <h3>인텔리제이 단축키</h3>
    <h4>shift + F6 ; 전체 단어 선택 후 한번에 교체하기</h4>
    <h4>alt + shift ; 한줄 이동</h4>
    <h3>git</h3>
    <h4>뭔가 꼬이면 초기화</h4>
  <pre>{`rm -rf .git
    git을 새로 만들어서 새로 올림.
    echo "# tttt" >> README.md
  git init
  git add README.md
  git commit -m "first commit"
  git branch -M main
  git remote add origin git@github.com:slow333/tttt.git
  git push -u origin main`}
  </pre>
    <h3>STS 단축키</h3>
<pre hidden> {`preference > General > keys 에 있음 여기서 수정가능
커서가 위치한 라인 지우기 : ctrl + d
화면키우기 : ctrl + '+'/'-'(숫자 패드 아님)
한줄복사 : ctrl + alt ↑,↓
import java util(임포트) : ctrl + shift + o
여러개 선택 : alt + shift + A;
커서위치에 있는 코드 한 줄 위로 옮기기 : alt + ↑, ↓
(드래그 후 해당 명령어 사용시 드래그 라인 옮기기 가능)
자동들여쓰기 : ctrl + i;

sysout ; ctrl + space; , System.out.println();

단축 템플릿 지정하기 : window , preference , java ,editor , template , 수정 , NO..

자동완성 설정 : window , preference , java ,editor , content assist; Enable auto activate;
  ... for java: .abcdefghijklmnopqrstuvwxyz

블록 주석 : ctrl + shift + /

한 줄 주석 : ctrl + / 또는 ctrl + shift + c
한 줄 주석 풀기(한 줄 주석 상태에서 다시) : ctrl + / 또는 ctrl + shift + c

자동 줄맞춤 : ctrl + shift + f
자동 완성 기능 : ctrl + space
동일 변수명 한번에 바꾸기 단축키 : alt + shift + r
소스로 선언된 다른 메소드 및 service단 등으로 이동 : 선언된 코드부분에 마우스 올리고 ctrl + click
이동 후 이전에 있었던 곳으로 돌아가기 : alt + ←
다시 앞으로 이동하기 : alt + →
이전 히스토리로 한 단계 이동 : ctrl+ z
이후 히스토리로 한 단계 이동 : ctrl + y
getter, setter 만들기 (필드선언 후) : alt + shift + s 누르고 r =&gt; Select All 클릭 =&gt; Generate
생성자 만들기(필드선언 후) : alt + shift + s 누르고 o => Generate
ToString 만들기 : alt + shift + s 누르고 s => Generate
.java 및 .class 등 파일 검색 : ctrl + shift + r
해당 키워드 전체 파일에서 검색 : ctrl + h => File Search 탭에서 키워드 검색
소스단에서 원하는 line으로 이동 : ctrl + l`}</pre>
    </section>
</div>
  )
}
