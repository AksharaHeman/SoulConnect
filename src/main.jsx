import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { Store } from "./Redux/Store";
import { MyProvider } from "./Context";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <MyProvider>
        <App />
      </MyProvider>
    </Provider>
  </React.StrictMode>
);
