import "./DomCss.css";
import MainWrapper from "../../MainWrapper";
import DomNav from './DomNav';
import DomFormApp from './03-form/DomFormApp';

function DomWrapperForm() {
  return (
    <MainWrapper aside={<DomNav />}>
      <DomFormApp />
    </MainWrapper>
  )
}

export default DomWrapperForm
