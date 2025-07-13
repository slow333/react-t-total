import "./JSMain.css";
import MainWrapper from "../../MainWrapper";
import JSNav from "./JSNav";
import { JSBasicApp } from ".";

function JSWrapperBasic() {
  return (
    <MainWrapper aside={<JSNav />}>
      <JSBasicApp />
    </MainWrapper>
  );
}

export default JSWrapperBasic;
