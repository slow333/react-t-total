import './postgres.css';
import PostgresNav from './PostgresNav';
import MainWrapper from '../../MainWrapper';
import { PsqlInstallation, PsqlCRUD, PsqlDbTable, PsqlConstraints, 
  PsqlAggregate, PsqlSelect, PsqlJoin, PsqlGroupBy } from './';

function PostgresAppWrapper() {
  return (
    <MainWrapper aside={<PostgresNav />}>
        <PsqlInstallation />
        <PsqlCRUD />
        <PsqlDbTable />
        <PsqlConstraints />
        <PsqlAggregate/>
        <PsqlSelect />
        <PsqlJoin />
        <PsqlGroupBy />
    </MainWrapper>
  )
}

export default PostgresAppWrapper
