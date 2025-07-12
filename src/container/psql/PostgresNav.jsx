import { useLocation } from 'react-router-dom';

function ReactNav() {
  const location = useLocation();
  const compare = (path) => location.hash.includes(path) ? " aside__current" : "";
  
  return (
    <>
      <a href="#psql-installation"
        className={`aside__a-text${compare('#psql-installation')}`}
      >  Installation </a>
      <a href="#psql-data-type"
        className={`aside__a-text${compare('#psql-data-type')}`}
      > data type </a>
      <a href="#psql-CRUD"
        className={`aside__a-text${compare('#psql-CRUD')}`}
      > CRUD </a>      
      <a href="#psql-db-table"
        className={`aside__a-text${compare('#psql-db-table')}`}
      > DB, TABLE</a>
      <a href="#psql-constraints"
        className={`aside__a-text${compare('#psql-constraints')}`}
      > constraints </a>
      <a href="#psql-aggregate"
        className={`aside__a-text${compare('#psql-aggregate')}`}
      > aggregate </a>
      <a href="#psql-select"
        className={`aside__a-text${compare('#psql-select')}`}
      > select </a>
      <a href="#psql-wildcard"
        className={`aside__a-text${compare('#psql-wildcard')}`}
      > Wildcard </a>
      <a href="#psql-join"
        className={`aside__a-text${compare('#psql-join')}`}
      > Join </a>   
      <a href="#psql-group-by"
        className={`aside__a-text${compare('#psql-group-by')}`}
      > Group By </a>
      <a href="#psql-functions"
        className={`aside__a-text${compare('#psql-functions')}`}
      > Functions </a>
      <a href="#psql-procedure-trigger"
        className={`aside__a-text${compare('#psql-procedure-trigger')}`}
      > Procedure, Trigger </a>
    </>
  )
}

export default ReactNav
