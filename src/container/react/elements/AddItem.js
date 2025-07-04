import React, { useState } from 'react'
import { IoAddCircle } from "react-icons/io5";

export default function AddItem({items, setItems}) {

  const [addItem, setAddItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!addItem.trim()) return;
    setItems(items => [...items, 
      {id: Date.now(), name: addItem, checked: false }
    ]);
    setAddItem(""); // input value 초기화
  }

  return (
    <form className='item__add-form' onSubmit={(e) => handleSubmit(e)}>
      {/* <label htmlFor='item__add-item'>Add Item </label> */}
      <input 
        autoFocus required
        id='item__add-item'
        type='text'
        value={addItem}
        placeholder='아이템 추가하기'
        onChange={(e) => setAddItem(e.target.value)}
      />
      <button className="item__button" type="submit" >
        <IoAddCircle />
      </button>
    </form>
  )
}
