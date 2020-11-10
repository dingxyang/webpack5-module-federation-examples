import React from "react";


const HomePage = React.lazy(() => import("./pages/HomePage"));
const RemotePage = React.lazy(() => import("./pages/RemotePage"));

const routes = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/child",
    component: RemotePage,
  },
];

export default routes;
