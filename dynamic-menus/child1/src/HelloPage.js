import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withProvider } from "./cmponents/PageWrapper";

const style = {
  height: 400,
  backgroundColor: "#3f51b5",
  color: "white",
  padding: 12,
};

const HelloPage = () => {
  const [remoteAppInput, setRemoteAppInput] = useState("");
  const dispatch = useDispatch();
  const main = useSelector((state) => state.main);

  return (
    <div style={style}>
      <h1>hello Page</h1>
      <p>
        <em>a page being provided by App 2</em>
      </p>
      <div>
        userName: {main.userName}
        <input
          style={{ marginRight: "10px" }}
          type="text"
          onChange={(e) => {
            setRemoteAppInput(e.target.value);
          }}
        />
        <button
          onClick={() =>
            dispatch({
              type: "CHANGE_USER_NAME",
              payload: remoteAppInput,
            })
          }
        >
          Dispatch new User
        </button>
      </div>
    </div>
  );
};

export default withProvider(HelloPage);
