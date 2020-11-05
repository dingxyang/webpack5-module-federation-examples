import React, { useEffect, useState } from "react";

const App = React.lazy(() => import("./App"));

function query() {
  return Promise.resolve([
    {
      url: "http://localhost:3002/remoteEntry.js",
      scope: "app2",
      module: "./routes",
    },
  ])
}

const Loader = () => {
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = React.useState(false);
  const [system, setSystem] = React.useState(false);

  useEffect(()=> {
    query().then(system => {
      let promiseList = [];
      setSystem(system);
      system.forEach(args => {
        const promise  = new Promise((resolve, reject) => {
          const element = document.createElement("script");
          element.src = args.url;
          element.type = "text/javascript";
          element.async = true;
          element.onload = () => {
            console.log(`Dynamic Script Loaded: ${args.url}`);
            resolve()
          };
          element.onerror = () => {
            console.error(`Dynamic Script Error: ${args.url}`);
            reject();
          };
          document.head.appendChild(element);
        })
        promiseList.push(promise);
      })
      Promise.all(promiseList).then(() => {
        setReady(true);
      }).catch(() => {
        setFailed(true);
      })
    })
  }, [])

  if (!system || system.length === 0) {
    return <h2>Not system specified</h2>;
  }


  if (failed) {
    return <h2>Failed to load dynamic script: {props.system.url}</h2>;
  }

  return (
    <React.Suspense fallback="Loading System">
    <App />
  </React.Suspense>
  )
}

export default Loader;

