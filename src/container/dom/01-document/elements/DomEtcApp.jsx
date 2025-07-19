
function DomEtcApp() {
/* 
  let form = document.forms['todoForm'];
  let input = form.formInput;
  let date = form.dateForm;
  let todos = [{id:Math.random(), name:"form one", date:'2023-2-22'},
    {id:Math.random(), name:"form 222", date:'2023-2-23'},
  ];
  showTodos(todos);

  form.onsubmit = function (e) {
    e.preventDefault();
    todos.push({id: Date.now(), name: input.value, date: date.value});
    showTodos(todos);
  }

  document.querySelector('#todoListForm').onclick = function (e) {
    e.preventDefault();
    if(e.target.tagName !== 'BUTTON')  return;

    let id = e.target.dataset.btnId;
    let index = todos.findIndex(todo => todo.id === id);
    todos.splice(index, 1);
    showTodos(todos);
  }
  function showTodos(list){
    let html = '';
    for (let i = 0; i < list.length; i++) {
      html += `<p>
          <span class="todo">${i+1}. ${list[i].name}</span> <span class="todo">${list[i].date}</span>
          <button data-btn-id="${list[i].id}">delete</button></p>`;
    }
    document.querySelector('#todoListForm').innerHTML = html;
  }

  let title = document.querySelector('#todoInput');
  let dueDay = document.querySelector('#dateInput');
  let add = document.querySelector('#btn');
  let todoEl = document.querySelector('#todoList');

  let todoList = [{id: 0, title: '할일 처음 추가', dueDay: '2024-11-22'},
    {id: 1, title: 'The second todo', dueDay: '2024-11-28'},];

  renderList(todoList);

  add.addEventListener('click', function () {
    todoList.push({id: Date.now(), title: title.value, dueDay: dueDay.value})
    renderList(todoList)
  });

  todoEl.onclick = function(e) {
    if(e.target.tagName !== 'BUTTON') {
      return;
    }
    let id = e.target.dataset.id;
    let index = todoList.findIndex(todo => todo.id === id);
    todoList.splice(index, 1);
    renderList(todoList);
  }

  function renderList(todoList) {
    let html = '';
    for (let index = 0; index < todoList.length; index++) {
      let {id, title, dueDay} = todoList[index];
      html += `<li > ${title} : ${dueDay}
            <button id="delete" data-id="${id}">delete</button> </li>`;
      // html += `<li data-id="${id}"> ${title} : ${dueDay}
      //       <button id="delete" onclick="todoList.splice(${index}, 1);
      //       renderList(todoList)">delete</button> </li>`;
    }
    document.querySelector('#todoList').innerHTML = html;
  }
 */
  return (
    <div>
      <div className="for-space" id='dom-etc'></div>
      <h1>media</h1>
      <h3>사이드 메뉴 숨기기</h3>

      <h3>CSS</h3>
    <pre>{`#hamburger {
  display: none;
}
#hamburger img {
  width: 40px;
  filter: invert(1);
}
#hamburger:hover img {
  cursor: pointer;
}
.aside.is-active {
  dispaly: block;
  left: 60px;
  background-color: var(--colorbright);
}
@media screen and (max-width: 900px) {
  .aside { display: none; float: none;} // opacity로 하면 좀..
  main { display:block;
    width:94%;
    margin:0 auto;
    padding: 40px 5px 5px 5px;
    min-height: 94.2vh;
  }
  #hamburger {
    display: block;
    position: fixed;
    top: 60px; left: 10px;
    z-index: 1009;
    width: 40px;
    height: 40px;
  }
}`}</pre>
      <h2>JavaScript</h2>
<pre>{`hamburger.onclick = function(){
  let aside = document.querySelector('.aside');
  aside.classList.toggle('is-active');
};`}</pre>

      <h2>todo list</h2>
      <input id="todoInput" type="text"/>
      <input id="dateInput" type="date"/>
      <button id="btn" class="btn">추가</button>
      <div id="todoList"></div>

      <h2>todo by form</h2>
      <form name="todoForm">
        <input name="formInput" type="text"/>
        <input name="dateForm" type="date"/>
        <input type="submit" value="submit" class="btn"/>
        <div id="todoListForm"></div>
      </form>

    </div>
  )
}

export default DomEtcApp