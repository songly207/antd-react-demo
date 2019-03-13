import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import { Router, Route } from 'react-router';
import createBrowserHistory from "history/createBrowserHistory"
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

let history = createBrowserHistory()
const currentLocation = (state, action) => {
    switch (action.type) {
        case 'back':
            return state + 1;
        case 'go':
            return state - 1;
        default:
            return state;
    }
}

 // eslint-disable-next-line
class login extends React.Component {
    constructor() {
        super();
        this.state = {
            isLogined: true,
            userName: 'songly'
        };
    }

    render() {
        return (
            <div style={{ width: 200, height: '100%', overFlow: 'hidden' }}>
                {this.state.isLogined ? `»¶Ó­Äã${this.state.userName}` : 'ÇëÏÈµÇÂ¼!'}
            </div>
        );
    }
}

let store = createStore(currentLocation);
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/app" component={App} />
        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
