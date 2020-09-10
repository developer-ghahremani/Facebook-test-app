import React from "react";
import { BrowserRouter } from "react-router-dom";
import FaceBook from "./FaceBook";
import { Provider } from "react-redux";
import { store } from "./Redux";
import { ToastProvider } from "react-toast-notifications";
import ProgressModal from "./components/Modal/ProgressModal";
import faker from "faker";
const App = () => {
  // const temp = [];
  // for (let index = 0; index < 15; index++) {
  //   temp.push({
  //     userDisplayName: `${faker.name.firstName()} ${faker.name.lastName()}`,
  //     avatar: faker.image.people(),
  //     title: faker.vehicle.vehicle(),
  //   });
  // }
  // console.log(JSON.stringify(temp));

  
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
