import React from 'react'

function JSFetchAbort() {
  return (
    <div>
      <div className="for-space" id='js-fetch-abort'></div>
      <h1>Fetch:Abort</h1>
  <pre>let controller = new AbortController();</pre>

      <h2>Using with fetch; 1초 후에 중지</h2>
  <pre>{`
// abort in 1 second
let controller = new AbortController();
setTimeout(() => controller.abort(), 1000);
try {
  let response = await fetch('/article/fetch-abort/demo/hang', {
    signal: controller.signal
  });
} catch(err) {
  if (err.name == 'AbortError') { // handle abort()
    alert("Aborted!");
  } else {
    throw err;
  }
}

let urls = [...]; // a list of urls to fetch in parallel
let controller = new AbortController();
// an array of fetch promises
let fetchJobs = urls.map(url => fetch(url, {
  signal: controller.signal
}));

let results = await Promise.all(fetchJobs);
// if controller.abort() is called from elsewhere,
// it aborts all fetches</pre>

let urls = [...];
let controller = new AbortController();
let ourJob = new Promise((resolve, reject) => { // our task
  ...
  controller.signal.addEventListener('abort', reject);
});
let fetchJobs = urls.map(url => fetch(url, { // fetches
  signal: controller.signal
}));
// Wait for fetches and our task in parallel
let results = await Promise.all([...fetchJobs, ourJob]);

// if controller.abort() is called from elsewhere,
// it aborts all fetches and ourJob`}</pre>
    </div>
  )
}

export default JSFetchAbort
