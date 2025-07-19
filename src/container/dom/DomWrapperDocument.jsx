import "./DomCss.css";
import MainWrapper from "../../MainWrapper";
import DomDocumentApp from './01-document/DomDocumentApp'
import DomNav from './DomNav';

function DomWrapperDocument() {
  return (
    <MainWrapper aside={<DomNav />}>
      <DomDocumentApp />
    </MainWrapper>
  )
}

export default DomWrapperDocument
