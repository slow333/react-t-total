import "./JSMain.css";
import MainWrapper from "../../MainWrapper";
import JSNav from "./JSNav";
import { JSAsyncApp } from ".";

function JSWrapperAsync() {
  return (
    <MainWrapper aside={<JSNav />}>
      <JSAsyncApp />
    </MainWrapper>
  )
}

export default JSWrapperAsync
