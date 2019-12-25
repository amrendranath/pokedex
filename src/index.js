import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "mobx-react";

import pokemonStore from "./store/index";
import App from "./components/App";

ReactDOM.render(
    <Provider pokemonStore={pokemonStore}>
        <App />
    </Provider>, 
    document.getElementById('root')
); 