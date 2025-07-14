import JSCallback from "./elements/JSCallback";
import JSPromise from './elements/JSPromise';
import JSPromiseChaining from './elements/JSPromisChaining';
import JSPromiseApi from './elements/JSPromiseApi';
import JSAsyncIntro from "./elements/JSAsyncIntro";
import JSPromisesCustom from "./elements/JSPromisesCustom";
import JSWorkerMultiThread from "./elements/JSWorkerMultiThread";

function JSAsyncApp() {
  return (
    <div>
      <JSCallback />
      <JSPromise />
      <JSPromiseChaining />
      <JSPromiseApi />
      <JSPromisesCustom />
      <JSAsyncIntro />
      <JSWorkerMultiThread />
    </div>
  )
}

export default JSAsyncApp
