import './postgres.css';
import PostgresNav from './PostgresNav';
import MainWrapper from '../../MainWrapper';
import { PsqlInstallation, PsqlCRUD, PsqlDbTable, PsqlConstraints, PsqlAggregate } from './';

function PostgresAppWrapper() {
  return (
    <MainWrapper aside={<PostgresNav />}>
        <PsqlInstallation />
        <PsqlCRUD />
        <PsqlDbTable />
        <PsqlConstraints />
        <PsqlAggregate/>
    </MainWrapper>
  )
}

export default PostgresAppWrapper
