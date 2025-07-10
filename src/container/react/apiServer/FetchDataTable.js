import React from 'react'
import Row from './Row';
import HeadRow from './HeadRow';

function FetchDataTable({data, fetchEndpoint}) {
  const limitedData = data.slice(0, 5);
  const headData = data.slice(0, 1);
  return (
    <div className='fetch__table-container'>
      <table>
        <thead>
          {headData.map(item => (
            <HeadRow key={item.id} item={item} />
          ))}
        </thead>
        <tbody>
          {limitedData.map(item => (
            <Row key={item.id} item={item} fetchEndpoint={fetchEndpoint}/>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FetchDataTable
