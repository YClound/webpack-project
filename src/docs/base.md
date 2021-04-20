## 入口(entry)
> entry: { <entryChunkName> string | [string] } | {}
````
// 用于描述入口的对象。你可以使用如下属性：
dependOn: 当前入口所依赖的入口。它们必须在该入口被加载前被加载。
filename: 指定要输出的文件名称。
import: 启动时需加载的模块。
library: 指定 library 选项，为当前 entry 构建一个 library。
runtime: 运行时 chunk 的名字。如果设置了，就会创建一个以这个名字命名的运行时 chunk，否则将使用现有的入口作为运行时。

module.exports = {
  entry: {
    a2: 'dependingfile.js',
    b2: {
      dependOn: 'a2',
      import: './src/app.js',
    },
  },
};
````

## 输出(output)

````
__webpack_public_path__ = '输入文件地址动态设置';

module.exports = {
  output: {
    filename: 'js/[name].[contenthash].bundle.js', // 输出的文件名称
    path: '/home/proj/cdn/assets/[fullhash]', // 文件输出的地址
    publicPath: 'https://cdn.example.com/assets/[fullhash]/', // html文件引入文件的地址
  },
};
````