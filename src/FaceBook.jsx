import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";

const FaceBook = () => {
  const Auth = lazy(() => import("./pages/Auth"));

  return (
    <Switch>
      <Route path="/" component={Auth} />
    </Switch>
  );
};

export default FaceBook;
