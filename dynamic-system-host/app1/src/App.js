import React, { useEffect } from "react";
import Axios from 'axios'

function loadComponent(scope, module) {
  return async () => {
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    await __webpack_init_sharing__("default");
    const container = window[scope]; // or get the container somewhere else
    // Initialize the container, it may provide shared modules
    await container.init(__webpack_share_scopes__.default);
    const factory = await window[scope].get(module);
    const Module = factory();
    return Module;
  };
}

const useDynamicScript = (args) => {
  const [ready, setReady] = React.useState(false);
  const [failed, setFailed] = React.useState(false);

  useEffect(() => {
    if (!args.url) {
      return;
    }

    const element = document.createElement("script");

    element.src = args.url;
    element.type = "text/javascript";
    element.async = true;

    setReady(false);
    setFailed(false);

    element.onload = () => {
      console.log(`Dynamic Script Loaded: ${args.url}`);
      setReady(true);
    };

    element.onerror = () => {
      console.error(`Dynamic Script Error: ${args.url}`);
      setReady(false);
      setFailed(true);
    };

    document.head.appendChild(element);

    return () => {
      console.log(`Dynamic Script Removed: ${args.url}`);
      document.head.removeChild(element);
    };
  }, [args.url]);

  return {
    ready,
    failed,
  };
};

function System(props) {
  const { ready, failed } = useDynamicScript({
    url: props.system && props.system.url,
  });

  if (!props.system) {
    return <h2>Not system specified</h2>;
  }

  if (!ready) {
    return <h2>Loading dynamic script: {props.system.url}</h2>;
  }

  if (failed) {
    return <h2>Failed to load dynamic script: {props.system.url}</h2>;
  }

  const Component = React.lazy(
    loadComponent(props.system.scope, props.system.module)
  );

  return (
    <React.Suspense fallback="Loading System">
      <Component />
    </React.Suspense>
  );
}

function query() {
  return Promise.resolve([
    {
      url: "http://localhost:3002/remoteEntry.js",
      scope: "app2",
      module: "./Widget",
    },
    {
      url: "http://localhost:3003/remoteEntry.js",
      scope: "app3",
      module: "./Widget",
    },
    {
      url: "http://localhost:3003/remoteEntry.js",
      scope: "app3",
      module: "./Other",
    }
  ])
}

function App() {
  const [system, setSystem] = React.useState(undefined);

  const [buttonDiv, setbuttonDiv] = React.useState(undefined);

  useEffect(() => {
    Axios.get('/menu.json').then(res => {
      console.log(res);
      let buttonDiv;
      buttonDiv = res.data.map(item => {
        return (
          <button key={item.module} onClick={()=>{
            setSystem(item);
          }}>{item.module}</button>
        )
      })
      setbuttonDiv(buttonDiv);
    })
  }, [])

  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      }}
    >
      <h1>Dynamic System Host</h1>
      <h2>App 1</h2>
      <p>
        The Dynamic System will take advantage Module Federation{" "}
        <strong>remotes</strong> and <strong>exposes</strong>. It will no load
        components that have been loaded already.
      </p>
      {buttonDiv}
      <div style={{ marginTop: "2em" }}>
        <System system={system} />
      </div>
    </div>
  );
}

export default App;
