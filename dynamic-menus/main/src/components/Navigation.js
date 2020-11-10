import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeUserAction } from "../redux/store";

const style = { border: "1px solid #000", padding: 12 };

function query() {
  return Promise.resolve([
    {
      url: "/child1/remoteEntry.js",
      scope: "child1",
      module: "./AboutPage",
      path: "aboutPage",
    },
    {
      url: "/child1/remoteEntry.js",
      scope: "child1",
      module: "./HelloPage",
      path: "helloPage",
    },
    {
      url: "/child2/remoteEntry.js",
      scope: "child2",
      module: "./TestPage",
      path: "testPage",
    },
  ]);
}

const Navigation = () => {
  const dispatch = useDispatch();
 const main = useSelector((state) => state.main)

  const [remoteAppInput, setRemoteAppInput] = useState('');

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
        ...item,
      },
    });
  };
  return (
    <div style={style}>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
      userName: {main.userName}
        <input
          style={{ marginRight: "10px" }}
          type="text"
          onChange={(e) => {
            setRemoteAppInput(e.target.value);
          }}
        />
        <button onClick={() => dispatch(changeUserAction(remoteAppInput))}>
          Dispatch new User
        </button>
      </div>
      <br />
      {menu &&
        menu.length > 0 &&
        menu.map((item, index) => {
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
