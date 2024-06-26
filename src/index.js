import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyles} from "./StyledBase";
import {store} from "./store/store";
import {Provider} from "react-redux";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
        <GlobalStyles />

    </React.StrictMode>,
    document.getElementById('root')
);