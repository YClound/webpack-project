## 按需引入@babel/polyfill
> * core-js@3替换babel-polyfill(包含regenerator-runtime/runtime和core-js两个库), 
> * corejs默认版本2.0, bable.config.json里core-js配置的版本需要和package.json里版本号对应

### useBuiltIns
> * entry 页面使用需要(import 'core-js/modules/es.map';)引入
> * usage 页面不需要引入 自动打包

````
// https://www.npmjs.com/package/core-js
// 开启babel.config.json的useBuiltIns
{
  "presets": [
    [
      "@babel/env",
      {
        "targets": {
          "edge": "11",
          "firefox": "60",
          "chrome": "60",
          "safari": "11.1",
          "esmodules": true
        },
        "useBuiltIns": "entry",
        "corejs": {
          "version": "3.10.1",
        }
      }
    ]
  ]
}

// 安装core-js
yarn add core-js@3

// 引入需要的core-js
import 'core-js/modules/es.map';
// async
import 'regenerator-runtime/runtime';
````