import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import { getElementById } from "./utils/getElementById";
import { ModalProvider } from "./context/ModalContext";

const root = ReactDOM.createRoot(
  getElementById("CoverConfiguratorV2") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <App />
      </ModalProvider>
    </Provider>
  </React.StrictMode>
);
