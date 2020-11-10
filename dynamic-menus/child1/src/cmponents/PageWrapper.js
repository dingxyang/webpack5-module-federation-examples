import React from "react";
import { Provider } from "react-redux";

export function withProvider(WrappedComponent) {
  return function (props) {
    const { store } = props;
    return (
      <Provider store={store || {}}>
        <WrappedComponent />
      </Provider>
    );
  };
}
