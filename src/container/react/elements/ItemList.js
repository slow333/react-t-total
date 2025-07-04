import React from 'react'
import {RiDeleteBin5Fill} from 'react-icons/ri';

export default function ItemList({items, handleCheck, handleDelete}) {

  let checkCount = items.filter(item => item.checked).length;

  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item.id} style={{ textDecoration: item.checked ? 'line-through' : 'none' }}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheck(item.id)}
            />
            <label onDoubleClick={() => handleCheck(item.id)}>
              {item.name}
            </label>
            <RiDeleteBin5Fill 
              onClick={() => handleDelete(item.id)}
            />
          </li>
        ))}
      <div className='items__length'>아이템 크기 : &nbsp;&nbsp;
         {items.length} {items.length === 1 ? ' item' : ' items'}
        (점검 항목 {checkCount})
      </div>
      </ul>
    </div>
  )
}
