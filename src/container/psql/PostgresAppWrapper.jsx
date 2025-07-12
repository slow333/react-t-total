import './postgres.css';
import PostgresNav from './PostgresNav';
import MainWrapper from '../../MainWrapper';
import { PsqlInstallation, PsqlCRUD, PsqlDbTable, PsqlConstraints, 
  PsqlAggregate, PsqlSelect, PsqlJoin, PsqlGroupBy, 
  PsqlFunctions, PsqlProcedureTrigger} from './';

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
        <PsqlFunctions />
        <PsqlProcedureTrigger />
    </MainWrapper>
  )
}

export default PostgresAppWrapper
