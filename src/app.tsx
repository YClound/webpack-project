import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';

import Home from './pages/home/index';
import Welcome from './pages/welcome/index';
import Activity from './pages/activity/index';

const history = createBrowserHistory({basename: '/'});

function App() {
    return <Router history={history}>
        <Route path="/" exact component={Home}></Route>
        <Route path='/pages/welcome/index' component={Welcome}></Route>
        <Route path='/pages/activity/index' component={Activity}></Route>
    </Router>
}

ReactDom.render(<App />, document.getElementById('app'));
