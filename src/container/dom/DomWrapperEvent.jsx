import "./DomCss.css";
import MainWrapper from "../../MainWrapper";
import DomNav from './DomNav';
import DomEventApp from './02-event/DomEventApp';

function DomWrapperEvent() {
  return (
    <MainWrapper aside={<DomNav />}>
      <DomEventApp />
    </MainWrapper>
  )
}

export default DomWrapperEvent
