import React from "react";
import { BrowserRouter } from "react-router-dom";
import FaceBook from "./FaceBook";
import { Provider } from "react-redux";
import { store } from "./Redux";
import { ToastProvider } from "react-toast-notifications";
import ProgressModal from "./components/Modal/ProgressModal";

const App = () => {
  return (
    <ToastProvider placement="top-right" autoDismiss>
      <Provider store={store}>
        <BrowserRouter>
          <FaceBook />
          <ProgressModal />
        </BrowserRouter>
      </Provider>
    </ToastProvider>
  );
};

export default App;
