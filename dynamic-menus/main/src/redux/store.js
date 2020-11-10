import { combineReducers, createStore, compose } from "redux";

const initialState = {
  appName: "main",
  userName: "dxy",
};

const CHANGE_USER_NAME = 'CHANGE_USER_NAME';

export const changeUserAction = (userName) => {
  return { type: CHANGE_USER_NAME, payload: userName };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER_NAME: {
      return {
        ...state,
        userName: action.payload,
      };
    }
    default:
      return state;
  }
};

const staticReducers = {
  main: reducer,
};

/**
 * Cf. redux docs:
 * https://redux.js.org/recipes/code-splitting/#defining-an-injectreducer-function
 */
export default function configureStore(initialState) {
  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const enhancer = composeEnhancers();
  const store = createStore(createReducer(), enhancer);

  store.asyncReducers = {};

  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
  };

  return store;
}

function createReducer(asyncReducers) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers,
  });
}

export const store = configureStore();
