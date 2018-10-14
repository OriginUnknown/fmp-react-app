import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './store';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

const noteAppStore = createStore(reducer);

ReactDOM.render(<Provider store={ noteAppStore }>
    <App />
    </Provider>,document.getElementById("root"));

serviceWorker.unregister();
