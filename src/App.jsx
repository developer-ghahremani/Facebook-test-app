import React from "react";
import { BrowserRouter } from "react-router-dom";
import FaceBook from "./FaceBook";
import { Provider } from "react-redux";
import { store } from "./Redux";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <FaceBook />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
