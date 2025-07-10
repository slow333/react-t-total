import React from 'react'

function DataList({data, fetchEndpoint}) {

  return (
    <table>
      {fetchEndpoint === "users" && data.map((d) => 
        <tr key={d.id}>
          <td>{d.id}</td>
          <td>{d.name}</td>
          <td>{d.username}</td>
          <td>{JSON.stringify(d.address)}</td>          
        </tr>
      )}
      {fetchEndpoint === "posts" && data.map((d) => 
        <tr key={d.id}>
          <td>{d.userId}</td>
          <td>{d.id}</td>
          <td>{d.title}</td>          
          <td>{d.body}</td>          
        </tr>
      )}
      {fetchEndpoint === "comments" && data.map((d) => 
        <tr key={d.id}>
          <td>{d.postId}</td>
          <td>{d.id}</td>
          <td>{d.name}</td>          
          <td>{d.email}</td>          
          <td>{d.body}</td>          
        </tr>
      )}
    </table>
  )
}

export default DataList
