import { NameContextProvider } from "@shared-context/shared-library";
import React from "react";

const Welcome = () => {
  const name = React.useContext(NameContextProvider);
  debugger

  return <p>Welcome, {name}</p>;
};

export default Welcome;
