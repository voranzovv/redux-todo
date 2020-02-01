import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Tasks from "./component/tasks";

import { Provider } from "react-redux";
import { configureStore } from "./store/configureStore";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Tasks />
    </Provider>
  );
}

export default App;
