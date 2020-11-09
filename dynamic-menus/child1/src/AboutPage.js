import React from "react";
import { Link, useHistory } from "react-router-dom";

const style = {
  height: 400,
  backgroundColor: "#3f51b5",
  color: "white",
  padding: 12,
};

const AboutPage = () => {
  const history = useHistory();
  const click = () => {
    history.push({
      pathname: "/child/helloPage",
      state: {
        url: "/child1/remoteEntry.js",
        scope: "child1",
        module: "./HelloPage",
        path: "helloPage",
      },
    });
  };
  return (
    <div style={style}>
      <h1>About Page</h1>
      <p>
        <em>a page being provided by App 2</em>
      </p>
      <button onClick={() => {click()}}>hello</button>
    </div>
  );
};

export default AboutPage;
