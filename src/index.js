import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './store';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
const noteAppStore = createStore(reducer, persistedState);

noteAppStore.subscribe(() => {
    saveState({
        notes: noteAppStore.getState().notes,
        modal: { ...noteAppStore.getState().modal, contentKey: null },
        selectedNote: null
    });
});
ReactDOM.render(<Provider store={ noteAppStore }>
    <App />
    </Provider>,document.getElementById("root"));

serviceWorker.unregister();
