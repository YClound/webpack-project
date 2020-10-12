import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Switch} from 'react-router';
import { createBrowserHistory } from 'history';

import Main from './main';
import Home from './pages/home/index';
import Welcome from './pages/welcome/index';
import Activity from './pages/activity/index';
import './utils/decorate';

const history = createBrowserHistory();

function App() {
    return <Router history={history}>
        <Route path="/" component={Main}>
            {/* <IndexRedirect to="/Home" /> */}
            <Route path="/" exact component={Home}></Route>
            <Route path='/pages/welcome/index' component={Welcome}></Route>
            <Route path='/pages/activity/index' component={Activity}></Route>
        </Route>
    </Router>
}

ReactDom.render(<App />, document.getElementById('app'));
