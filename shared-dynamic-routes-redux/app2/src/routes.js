import React from "react";

const AboutPage = React.lazy(() => import("./AboutPage"));
const HelloPage = React.lazy(() => import("./HelloPage"));

const routes = [
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/hello",
    component: HelloPage,
  },
];

export default routes;
