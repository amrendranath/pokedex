import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "mobx-react";

import store from "./store/index";
import App from "./components/App";

ReactDOM.render(
    <Provider {...store}>
        <App />
    </Provider>, 
    document.getElementById('root')
); 