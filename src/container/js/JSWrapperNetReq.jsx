import "./JSMain.css";
import MainWrapper from "../../MainWrapper";
import JSNav from "./JSNav";
import { JSNetReqApp } from ".";

function JSWrapperNetReq() {
  return (
    <MainWrapper aside={<JSNav />}>
      <JSNetReqApp />
    </MainWrapper>
  )
}

export default JSWrapperNetReq
