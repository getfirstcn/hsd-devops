SystemJS
========

[![Build Status][travis-image]][travis-url]

配置模块在浏览器和NodeJs里面能够动态加载ES模块工作流。

_[SystemJS 0.20 版本提示](https://github.com/systemjs/systemjs/releases/tag/0.20.0)_

* [加载任意格式的模块](docs/module-formats.md)当运行约15KB的开发构建。
* 加载ES模块编译到`System.register`中，用精确的循环引用和绑定支持为生产环境注册模块格式。
* 支持 RequireJS 样式 [map](docs/getting-started.md#map-config),
[paths](https://github.com/systemjs/systemjs/blob/master/docs/config-api.md#paths),
和 [bundles](docs/production-workflows.md#bundle-extension) 配置。

与 [ES 模块加载程序项目](https://github.com/ModuleLoader/es-module-loader)
一起构建, 它基于 WhatWG 加载器规范中的原则和接口, 以及 HTML 和 NodeJS 中的模块.

文档
---

* [获得开始](docs/getting-started.md)
* [模块格式](docs/module-formats.md)
* [产品工作流](docs/production-workflows.md)
* [配置接口](docs/config-api.md)
* [系统接口](docs/system-api.md)
* [插件](docs/plugins.md)
* [创建插件](docs/creating-plugins.md)
* [产品构建和解决方案](docs/production-build.md)

基本使用
-------

### 浏览器开发

```html
<script src="systemjs/dist/system.js"></script>
<script>
  SystemJS.import('/js/main.js');
</script>
```

这是关于将支持的加载所有模型的格式。

**为了加载ES6代码在浏览器里面转换，必须配置下面的一个转换插件**

* [Babel](https://github.com/systemjs/plugin-babel)
* [TypeScript](https://github.com/frankwallis/plugin-typescript)
* [Traceur](http://github.com/systemjs/plugin-traceur)

### 浏览器生产

当所有模块都可用作`system`、`amd` 或全局模块格式时,
并且不需要任何软件包配置或插件, 只能使用仅生产的加载程序:

```html
<script src="systemjs/dist/system-production.js"></script>
<script>
  SystemJS.import('/js/main.js');
</script
```

配置支持在生产包含baseURL, paths, map, depCache 和 wasm.

### NodeJS

在NodeJs加载模块，安装SystemJS：

```
  npm install systemjs
```

假如转换ES模块，安装转换插件来转换需要转换的项目页面。

我们能加载模块在Nodejs和浏览器一样好。

```javascript
var SystemJS = require('systemjs');

// loads './app.js' from the current directory
SystemJS.import('./app.js').then(function (m) {
  console.log(m);
});
```

To import a module with the NodeJS module resolution, import with `import moduleName from '@node/module-name'`.
导入一个模块使用NodeJS模块解析，导入使用：

#### Running the tests

```
  npm run build && npm run test
```









[travis-url]: https://travis-ci.org/systemjs/systemjs
[travis-image]: https://travis-ci.org/systemjs/systemjs.svg?branch=master