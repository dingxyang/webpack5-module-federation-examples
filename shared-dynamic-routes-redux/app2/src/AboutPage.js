import React, {useEffect, useState} from "react";
import { Provider, useSelector, useDispatch } from 'react-redux';
import reducer, { changeAppNameAction } from './reducer';

const remoteAppScope = 'aboutPage';

const style = {
  height: 400,
  backgroundColor: "#3f51b5",
  color: "white",
  padding: 12,
};

const AboutPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state[remoteAppScope]);
  const host = useSelector((state) => state['host']);
  const [remoteAppInput, setRemoteAppInput] = useState('');
  
  return (
    <div>
      <h1>About Page</h1>
      <p>
        <em>a page being provided by App 2</em>
      </p>
      <div>RemoteApp</div>
      <div>
        RemoteApp's name from the redux store : {state && state.appName}
      </div>
      <div>
        <input
          style={{ marginRight: '10px' }}
          type="text"
          onChange={(e) => {
            setRemoteAppInput(e.target.value);
          }}
        />
        <button onClick={() => dispatch(changeAppNameAction(remoteAppInput))}>
          Dispatch RemoteApp new name
        </button>
        {host.appName} {host.key}
      </div>
    </div>
  )
};


const RemoteAppWrapper = (props) => {
  const { store } = props;
  useEffect(() => {
    store.injectReducer(remoteAppScope, reducer);
    return () => {
      debugger
      store.injectReducer(remoteAppScope, {});
    }
  }, []);

  return (
    <Provider store={store || {}}>
      <AboutPage />
    </Provider>
  );
};

export default RemoteAppWrapper;
