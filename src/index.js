import React, { Suspense } from "react";
import { render } from "react-dom";
import App from "./App";
import "antd/dist/antd.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/main.min.css";
render(
  <Suspense fallback={<p>Waitting</p>}>
    <App />
  </Suspense>,

  document.getElementById("root")
);
