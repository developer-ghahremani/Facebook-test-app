import React, { lazy, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

const FaceBook = () => {
  const Auth = lazy(() => import("./pages/Auth"));
  const Home = lazy(() => import("./pages/Home"));
  useEffect(() => {
    document.body.classList.add("bg-light");
  }, []);

  return (
    <Switch>
      {/* <Route path="/" component={Auth} /> */}
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default FaceBook;
