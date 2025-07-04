import '../ReactApp.css';
import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import AddItem from './AddItem';
import SearchItem from './SearchItem';

function ReactMd({ title }) {

  const [items, setItems] = useState([
    { id: 1, name: "Milk", checked: false },
    { id: 2, name: "Eggs", checked: false },
    { id: 3, name: "Bread", checked: false }
  ]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    let initial = localStorage.getItem("groceries");
    setItems(JSON.parse(initial));
  },[])

  const handleCheck = (id) => {
    let groceries = items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(groceries);
    localStorage.setItem("groceries", JSON.stringify(groceries));
  };

  const handleDelete = (id) => {
    let groceries = items.filter(item => item.id !== id);
    setItems(groceries);
    localStorage.setItem("groceries", JSON.stringify(groceries));
  };

  return (
    <div id='react-md'>
      <h1>props, children</h1>
      <h2>{title} from props</h2>
      <h4>map, filter, checkbox, addItem, search, delete</h4>
      <h4>props, children, useRef</h4>
      <SearchItem setSearch={setSearch}/>
      <AddItem items={items} setItems={setItems} />
      {items.length > 0 ? 
        <ItemList
          items={items.filter(item => (item.name.toLowerCase()).includes(search.toLowerCase()))}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        /> 
        : <h3 style={{margin:'1rem'}}>아이템이 없습니다.</h3>}
    </div>
  );
}

ReactMd.defaultProps = {
  title: 'Default Title'
}

export default ReactMd
