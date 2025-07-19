import "./JSMain.css";
import MainWrapper from "../../MainWrapper";
import JSNav from "./JSNav";
import { JSYieldModuleApp } from ".";
function JSWrapperYieldModule() {
  return (
    <MainWrapper aside={<JSNav />}>
      <JSYieldModuleApp />
    </MainWrapper>
  )
}

export default JSWrapperYieldModule