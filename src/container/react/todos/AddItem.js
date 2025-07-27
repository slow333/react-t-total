import React, { useState } from 'react'
import { IoAddCircle } from "react-icons/io5";

export default function AddItem({newItem, setNewItem, handleSubmit}) {

  return (
    <form className='item__add-form' onSubmit={handleSubmit}>
      {/* <label htmlFor='item__add-item'>Add Item </label> */}
      <input 
        autoFocus required
        id='item__add-item'
        type='text'
        value={newItem}
        placeholder='아이템 추가하기'
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button className="item__button" type="submit" >
        <IoAddCircle color='gray' background="transparent"/>
      </button>
    </form>
  )
}
