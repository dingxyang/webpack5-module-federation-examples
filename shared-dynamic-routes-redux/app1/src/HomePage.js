import React from "react";
import { useSelector, useDispatch } from "react-redux";

const style = {
  height: 400,
  backgroundColor: "#673ab7",
  color: "white",
  padding: 12,
};

const HomePage = () => {
  const host = useSelector((state) => state["host"]);
  return (
    <div style={style}>
      <h1>Home Page</h1>
      <h2>Welcome to the future!</h2>
      <p>
        <em>a page being provided by App 1</em>
        {host.key}
      </p>
    </div>
  );
};

export default HomePage;
