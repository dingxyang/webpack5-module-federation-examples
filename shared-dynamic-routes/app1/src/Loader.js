import React, { useEffect, useState } from "react";
import App from "./App";

function query() {
  return Promise.resolve([
    {
      url: "http://localhost:3003/remoteEntry.js",
      scope: "app3",
      module: "./routes",
      routesModules:['./AboutPage', './HelloPage']
    },
    {
      url: "http://localhost:3002/remoteEntry.js",
      scope: "app2",
      module: "./routes",
      routesModules:['./TestPage']
    },
  ]);
}

const Loader = () => {
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = React.useState(false);
  const [system, setSystem] = React.useState(false);

  useEffect(() => {
    query().then((system) => {
      let promiseList = [];
      setSystem(system);
      system.forEach((args) => {
        const promise = new Promise((resolve, reject) => {
          const element = document.createElement("script");
          element.src = args.url;
          element.type = "text/javascript";
          element.async = true;
          element.onload = () => {
            console.log(`Dynamic Script Loaded: ${args.url}`);
            resolve();
          };
          element.onerror = () => {
            console.error(`Dynamic Script Error: ${args.url}`);
            reject();
          };
          document.head.appendChild(element);
        });
        promiseList.push(promise);
      });
      Promise.all(promiseList)
        .then(() => {
          setReady(true);
        })
        .catch(() => {
          setFailed(true);
        });
    });
  }, []);

  if (!system || system.length === 0) {
    return <h2>Not system specified</h2>;
  }

  if (failed) {
    return <h2>Failed to load dynamic script</h2>;
  }

  if (!ready) {
    return <h2>Loading dynamic script</h2>;
  }

  return <App system={system} />;
};

export default Loader;
