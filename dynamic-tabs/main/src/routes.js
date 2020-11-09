import React from "react";


const HomePage = React.lazy(() => import("./HomePage"));
const Child = React.lazy(() => import("./Child"));

const routes = [
  {
    path: "/child",
    component: Child,
  },
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
];

export default routes;
