import '../ReactApp.css';
import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import AddItem from './AddItem';
import SearchItem from './SearchItem';

function ReactProps({ title }) {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem("shopList")) || []);
  const [search, setSearch] = useState("");
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    localStorage.setItem("shopList", JSON.stringify(items));
  },[items])

  const handleCheck = (id) => {
    let listItems = items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems)
  };

  const handleDelete = (id) => {
    let listItems = items.filter(item => item.id !== id);
    setItems(listItems)
  };

  function addItem(item) {
    const id = items.length ? items[items.length -1].id +1 : 1;
    const myNewItem = {id: id, name: item, checked: false}
    const listItems = [...items, myNewItem  ];
    setItems(listItems)
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem(""); // input value 초기화
  }

  return (
    <div id='react-props'>
      <div id='react-props-index' className="for-space"></div>
      <h1>localStorage</h1>
      <h3>{title} from props</h3>
      <h4>props, children, map, filter, checkbox, addItem, search, delete</h4>
      <h4>props, children, useRef</h4>
      <SearchItem setSearch={setSearch}/>
      <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit}/>
      {items.length > 0 ? 
        <ItemList
          items={items.filter(item => (item.name.toLowerCase()).includes(search.toLowerCase())) 
            || items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        /> 
        : <h3 style={{margin:'1rem'}}>아이템이 없습니다.</h3>}
    </div>
  );
}

ReactProps.defaultProps = {
  title: 'Default Title'
}

export default ReactProps
