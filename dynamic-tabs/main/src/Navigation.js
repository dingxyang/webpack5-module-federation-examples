import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

const style = { border: "1px solid #000", padding: 12 };

function query() {
  return Promise.resolve([
    {
      url: "http://localhost:3002/remoteEntry.js",
      scope: "child",
      module: "./AboutPage",
      path: "aboutPage",
    },
    {
      url: "http://localhost:3002/remoteEntry.js",
      scope: "child",
      module: "./HelloPage",
      path: "helloPage",
    },
  ]);
}

const Navigation = () => {
  const [menu, setMenu] = useState(undefined);
  useEffect(() => {
    query().then((data) => {
      setMenu(data);
    });
  }, []);
  const history = useHistory();

  const onClick = (item) => {
    history.push({
      pathname: `/child/${item.path}`,
      state: {
        ...item
      },
    });
  };
  return (
    <div style={style}>
      <Link to="/">Home</Link>
      <br />
      {menu &&
        menu.length > 0 &&
        menu.map((item,index) => {
          return (
            <button
              key={index}
              onClick={() => {
                onClick(item);
              }}
            >
              {item.module}
            </button>
          );
        })}
    </div>
  );
};

export default Navigation;
