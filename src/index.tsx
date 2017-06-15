import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {createStore} from 'redux';
import reducers from './reducers/index';
import {StoreState} from './types/index';
import {Provider} from 'react-redux';
import folders from './tree';

const store = createStore<StoreState>(reducers, {
    folders: folders,
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root') as HTMLElement
);
