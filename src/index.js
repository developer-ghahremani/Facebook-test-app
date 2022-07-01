import "antd/dist/antd.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/main.min.css";

import React, { Suspense } from "react";

import App from "./App";
import { render } from "react-dom";

render(
  <Suspense fallback={<p>Waitting</p>}>
    <App />
  </Suspense>,

  document.getElementById("root")
);
