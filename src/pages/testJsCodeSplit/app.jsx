import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import asyncComponent from './asyncComponent';

const routes = [{
  path: '/table',
  component: asyncComponent(() => import(/* webpackChunkName: 'page_table' */ './tabel')),
}]

const App = () => {
  return <HashRouter>
    {
      routes.map(item => (<Route path={item.path} component={item.component} />))
    }
  </HashRouter>
}

export default App;