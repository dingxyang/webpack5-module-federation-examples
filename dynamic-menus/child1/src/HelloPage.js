import React, { useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
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

const HelloPageWrapper = (props) => {
  const { store } = props;
  debugger
  return (
    <Provider store={store || {}}>
      <HelloPage />
    </Provider>
  );
};

export default HelloPageWrapper;
