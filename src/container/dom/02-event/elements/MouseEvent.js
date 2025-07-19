
function MouseEvent() {
/*   transjs.onclick = (e) => {
    let target = e.target;
    if(target.tagName !== "H6") return;
    if(e.ctrlKey) target.classList.toggle("selected");
    else {
      let h6 = transjs.querySelectorAll("h6");
      h6.forEach((h) => h.classList.remove("selected"));
      target.classList.add("selected");
    }
  } */
  return (
    <div>
      <div className="for-space" id='dom-mouse-event'></div>
      <h1>마우스 이벤트</h1>
      <h3>종류 : mousedown/up, mouseover/out, mousemove, click, dbclick, contextmenu</h3>

      <h2>이벤트 순서: {`mousedown -> mouseup -> click`}</h2>
      <h3>마우스 이벤트에 대해 return false 하면 동작을 막음</h3>
      <button id="showBtn">마우스 클릭해보세요</button>
      <button id="clearBtn">초기화</button><br/>
      <textarea id="txtarea" className='w-[400] h-[200]'></textarea>
    <pre>{`let showType = (e) => txtarea.value +={e.type} button={e.button}\n;
showBtn.onmousedown = showBtn.onmouseup = showBtn.onclick = showType;
clearBtn.onclick = (e) => area.value = ""; `} </pre>

      <h2>보조키</h2>
      <h3>키값 : event.shiftKey, event.altKey, event.ctrlKey, event.metaKey</h3>
    <pre>{`button.onclick = (e) => if(e.altKey && e.shiftKey) return "둘다 눌렀어요"`}</pre>

    <h2>clientX, clientY, pageX, pageY</h2>
    <div id="position" className='w-full h-[200px] border-2 border-red-400'></div>
<pre>{`position.onmousemove = (e) => {
  position.innerHTML = e.clientX + ":" + e.clientY;
}   `} </pre>

      <h3>선택하고자하는 소요를 선택, ctrl 누르고 하면 중복 선택</h3>
      <div id="transjs">div id=transjs
        <h6>React</h6>
        <h6>Angular</h6>
        <h6>Vue</h6>
        <h6>Svelte</h6>
        <h6>blazor</h6>
      </div>

    </div>
  )
}

export default MouseEvent
