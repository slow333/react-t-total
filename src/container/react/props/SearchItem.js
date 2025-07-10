import React, { useState, useRef } from 'react'
import { MdManageSearch } from "react-icons/md";

function SearchItem({setSearch}) {

  const [text, setText] = useState("");

  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    setSearch(text);
    setText(""); // input value 초기화
  }

  return (
    <form className='item__search-form' onSubmit={(e) => handleSubmit(e)}>
      {/* <label htmlFor='item__add-item'>Add Item </label> */}
      <input 
        autoFocus ref={inputRef}
        id='item__search-item'
        type='search'
        value={text}
        placeholder='아이템 검색'
        onChange={(e) => setText(e.target.value)}
      />
      <button className="item__button" type="submit" onClick={() => inputRef.current.focus()}>
        <MdManageSearch />
      </button>
    </form>
  )
}

export default SearchItem
