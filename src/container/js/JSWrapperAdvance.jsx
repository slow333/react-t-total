import "./JSMain.css";
import MainWrapper from "../../MainWrapper";
import JSNav from "./JSNav";
import { JSAdvApp, JSBasicApp } from ".";

function JSWrapper() {
  return (
    <MainWrapper aside={<JSNav />}>
      <JSAdvApp />
    </MainWrapper>
  );
}

export default JSWrapper;
