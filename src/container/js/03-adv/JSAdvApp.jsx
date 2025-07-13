import React from "react";
import JSRecursionStack from "./elements/JSRecursionStack";
import JSSpreadRest from "./elements/JSSpreadRest";
import JSLexical from "./elements/JSLexical";
import JSSetTimeout from "./elements/JSSetTimeout";
import JSCallApply from "./elements/JSCallApply";
import JSBind from "./elements/JSBind";
import JSArrowFunc from "./elements/JSArrowFunc";
import JSTryCatch from "./elements/JSTryCatch";

function JSAdvApp() {
  return (
    <>
      <JSRecursionStack />
      <JSSpreadRest />
      <JSLexical />
      <JSSetTimeout />
      <JSCallApply />
      <JSBind />
      <JSArrowFunc />
      <JSTryCatch />
    </>
  );
}

export default JSAdvApp;
