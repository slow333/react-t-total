import React from 'react'

function HeadRow({item}) {
  return (
    <tr>
      {Object.entries(item).map(([key, value]) => 
          <td key={key} style={{textAlign:'center'}}>{key}</td>
        )}
    </tr>
  )
}

export default HeadRow
