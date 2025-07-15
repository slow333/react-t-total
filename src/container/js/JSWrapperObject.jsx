import "./JSMain.css";
import MainWrapper from "../../MainWrapper";
import JSNav from "./JSNav";
import { JSObjectApp } from ".";

function JSWrapperObject() {
  return (
    <MainWrapper aside={<JSNav />}>
      <JSObjectApp />
    </MainWrapper>
  )
}

export default JSWrapperObject
