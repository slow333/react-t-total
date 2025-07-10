import { Link, useLocation } from 'react-router-dom';

function ReactNav() {
  const location = useLocation();
  const compare = (path) => location.hash.includes(path) ? " aside__current" : "";
  
  return (
    <>
      <a href="#psql-installation"
        className={`aside__a-text${compare('#psql-installation')}`}
      > PSQL Installation </a>
      <a href="#psql-data-type"
        className={`aside__a-text${compare('#psql-data-type')}`}
      >PSQL data type </a>
      <a href="#psql-CRUD"
        className={`aside__a-text${compare('#psql-CRUD')}`}
      >PSQL CRUD </a>      
      <a href="#psql-db-table"
        className={`aside__a-text${compare('#psql-db-table')}`}
      >PSQL DB table</a>
      <a href="#psql-constraints"
        className={`aside__a-text${compare('#psql-constraints')}`}
      >PSQL constraints </a>
      <a href="#psql-aggregate"
        className={`aside__a-text${compare('#psql-aggregate')}`}
      >PSQL aggregate </a>
      <a href="#psql-select"
        className={`aside__a-text${compare('#psql-select')}`}
      >PSQL select </a>         
    </>
  )
}

export default ReactNav
