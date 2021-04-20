## react 代码分割（es6 import）
> import(/* webpackChunkName: 'page_table' */ './tabel')
### javascript(js|jsx)
````
yarn babel-loader @babel/plugin-syntax-dynamic-import @loadable/component -D

入口文件：non-initial-index.jsx
````

### typescript(ts|tsx)
````
yarn ts-loader -D

example: https://github.com/YClound/template-react-h5/blob/v1/src/router/AsyncComponent.tsx;

// tsconfig.json文件
 {
    "module": "ESNext",
    "removeComments": false,// 自定义webpack打包名称
 }
````