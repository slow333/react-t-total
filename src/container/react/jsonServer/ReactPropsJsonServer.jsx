import '../ReactApp.css';
import { useState, useEffect } from 'react';
import AddItem from '../props/AddItem';
import SearchItem from '../props/SearchItem';
import Content from './Content';
import apiRequest from './apiRequest';

function ReactPropsJsonServer() {

  const API_URL = 'http://localhost:3500/items';
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [newItem, setNewItem] = useState("");
  const [fetchErr, setFetchErr] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if(!response.ok) throw Error("데이터를 정상적으로 가져오지 못함")
        const listItems = await response.text();
        setItems(JSON.parse(listItems));
      } catch (err) {
        setFetchErr(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    setTimeout(() => {
      (async () => await fetchItems())();
    }, 1000)
  },[])

  const handleCheck = async (id) => {
    let listItems = items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);

    const updatedItem = listItems.filter((item) => item.id === id);

    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'PATCH, GET, POST, DELETE, OPTIONS'
      },
      body: JSON.stringify({checked: updatedItem[0].checked })
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if(result) setFetchErr(result);
  };

  const handleDelete = async (id) => {
    let listItems = items.filter(item => item.id !== id);
    setItems(listItems);
    const deleteOptions = { method: 'DELETE'}
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if(result) setFetchErr(result);
  };

  async function addItem(item) {
    const id = items.length ? items[items.length -1].id +1 : 1;
    const myNewItem = {id: id, name: item, checked: false}
    const listItems = [...items, myNewItem  ];
    setItems(listItems);
    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    }
    const result = await apiRequest(API_URL, postOptions);
    if(result) setFetchErr(result);
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
      <h2>Item list by json server</h2>
      <SearchItem setSearch={setSearch}/>
      <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit}/>
      {isLoading && 
        <div className='fetch__isLoading-container'><div className='fetch__isLoading'></div></div>}
      {fetchErr &&
        <div className='fetch__error'>========== {fetchErr} ========</div>}
      {!fetchErr && !isLoading && 
        <Content 
          items={items}
          search={search}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
        }
    </div>
  );
}

export default ReactPropsJsonServer
