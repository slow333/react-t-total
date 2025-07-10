import React from 'react'

function Row({item, fetchEndpoint}) {

  const JSONType = Object.entries(item)
    .map(([key, value]) => 
      <td key={key}>{JSON.stringify(value)}</td>
    );
  const textType =  Object.entries(item)
    .map(([key, value]) => 
      <td key={key}>{value}</td>
    );

  return (
    <tr>
      {fetchEndpoint === "users" ? JSONType : textType }
    </tr>
  )
}

export default Row