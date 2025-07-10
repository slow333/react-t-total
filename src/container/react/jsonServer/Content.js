import React from 'react'
import ItemList from '../props/ItemList';

function Content({items, search, handleCheck, handleDelete}) {
  return (
    <>    
    { items.length > 0 && 
      <ItemList
        items={items.filter(item => 
          (item.name.toLowerCase()).includes(search.toLowerCase())
          ) }
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    }
    </>
  )
}

export default Content
