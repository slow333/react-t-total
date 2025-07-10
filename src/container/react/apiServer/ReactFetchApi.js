import {useEffect, useState} from 'react'
import DataList from './DataList';
import '../ReactApp.css';
import FetchButton from './FetchButton';
import FetchDataTable from './FetchDataTable';

function ReactFetchApi() {

  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [fetchEndpoint, setFetchEndpoint] = useState("comments");
  
  const usersUrl =`https://jsonplaceholder.typicode.com/${fetchEndpoint}/`;

  useEffect(() => {
    setIsLoading(true);
    const usersFetch = async () => {
      try{
        const response = await fetch(usersUrl);
        if(!response.ok) throw Error("Api 수신 애러");
        const json = await response.json();
        setData(json);
      } catch(err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
        setError('')
      }
    }
    setTimeout(() => {
      (async () => await usersFetch())();
    }, 500)
  },[fetchEndpoint]);

  return (
    <div>
      <h1>fetch API server</h1>
        <h3>jsonplaceholder.typicode.com API 서버 이용</h3>
      <div style={{display:'flex', width:'100%', justifyContent:'space-between'}}>
        <FetchButton buttonText={'users'} 
            fetchEndpoint={fetchEndpoint} setFetchEndpoint={setFetchEndpoint}/>
        <FetchButton buttonText={'posts'} 
            fetchEndpoint={fetchEndpoint} setFetchEndpoint={setFetchEndpoint}/>
        <FetchButton buttonText={'comments'} 
            fetchEndpoint={fetchEndpoint} setFetchEndpoint={setFetchEndpoint}/>            
      </div>
      {error &&
        <div className='fetch__error'>========== {error} ========</div>}
      {isLoading && 
        <div className='fetch__isLoading-container'>
          <div className='fetch__isLoading'></div>
        </div>}
      <h4>개별 item에 대해서 {`Object.entries(item).map(([key, value]) => {return ()}`}</h4>
      {/* <DataList data={data} fetchEndpoint={fetchEndpoint} /> */}
      <FetchDataTable data={data} fetchEndpoint={fetchEndpoint}/>
    </div>
  )
}

export default ReactFetchApi
