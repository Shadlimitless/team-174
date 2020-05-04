import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { Route, Switch, HashRouter } from "react-router-dom";
import Homepage from "./components/HomePage/HomePage";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </HashRouter>
    </Provider>
  );
}

export default App;
