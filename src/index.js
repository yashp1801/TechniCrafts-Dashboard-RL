import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { store } from "./Store/store";
import { overallSummaryApi } from "../src/Store/Slices/overallSummarySlice";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ApiProvider api={overallSummaryApi}>
          <App />
        </ApiProvider>
      </Provider>
    </Router>
  </React.StrictMode>
);
