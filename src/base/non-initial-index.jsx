import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/pages/testJsCodeSplit/app';

// import(/* webpackChunkName: "app" */ '@/pages/app.jsx').then((App) => {
//   ReactDOM.render(<App />, root);
// });

ReactDOM.render(<App />, document.getElementById('app'));