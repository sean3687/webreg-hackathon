
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./app/store";
import EnrolledClassList from "../src/features/counter/EnrolledClassList";
import "./index.css";



const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>

    </Provider>
  </React.StrictMode>
);
