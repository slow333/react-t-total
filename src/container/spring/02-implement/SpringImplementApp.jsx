import ArtifactAssignment from './elements/ArtifactAssignment'
import PagingSorting from './elements/PagingSorting'
import SpringCRUD from './elements/SpringCRUD'
import UserCRUD from './elements/UserCRUD'
import SpringSpec from './elements/SpringSpec'

function SpringImplementApp() {
  return (
    <div>
      <SpringCRUD />
      <ArtifactAssignment />
      <UserCRUD />
      <PagingSorting />
      <SpringSpec />
    </div>
  )
}

export default SpringImplementApp
