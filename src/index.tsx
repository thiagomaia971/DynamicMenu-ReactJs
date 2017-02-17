import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/index";

import Hello from "./pages/Hello";
import Header from "./components/Header";

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Header />
            <Hello />
        </div>
    </Provider>
    , document.getElementById("app"));