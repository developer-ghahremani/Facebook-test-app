import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "./routes";
import { useSelector } from "react-redux";

const FaceBook = () => {
  const { user } = useSelector((state) => state);

  useEffect(() => {
    document.body.classList.add("bg-light");
  }, []);

  return (
    <Switch>
      <Route>
        {routes.map((item) => (
          <Route path={item.path} exact component={item.component} />
        ))}
        {/* {!user ?
         <Redirect from="/" to="/auth" /> 
        : <Redirect to="/" />} */}
      </Route>
    </Switch>
  );
};

export default FaceBook;
