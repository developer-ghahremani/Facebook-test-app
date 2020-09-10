import React from "react";
import { BrowserRouter } from "react-router-dom";
import FaceBook from "./FaceBook";
import { Provider } from "react-redux";
import { store } from "./Redux";
import { ToastProvider } from "react-toast-notifications";

const App = () => {
  return (
    <ToastProvider placement="top-right" autoDismiss>
      <Provider store={store}>
        <BrowserRouter>
          <FaceBook />
        </BrowserRouter>
      </Provider>
    </ToastProvider>
  );
};

export default App;
