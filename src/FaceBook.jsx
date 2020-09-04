import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";

const FaceBook = () => {
  const Auth = lazy(() => import("./pages/Auth"));
  const Home = lazy(() => import("./pages/Home"));

  return (
    <Switch>
      {/* <Route path="/" component={Auth} /> */}
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default FaceBook;
