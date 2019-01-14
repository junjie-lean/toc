# TOC.JS

## What is toc.js?
Toc.js is a Server Side Render framework based [NEXT](https://nextjs.org),toc.js can sopport：

    - The conventional CSR Single page app；
    - The SSR Single page app;
    - API transpond and 
    - Web-server performance monitoring
    - Other more...

toc means "Top Of Cloud";

## Installatioin
The best way to create a toc app is that using the scaffold named [create-toc-app](https://www.npmjs.com/package/create-toc-app)!
```javascript

    npm install -g create-toc-app

```

## Project Initial

```javascript

    create-toc-app AppName

```
Wait a moment,Ding~~!

初始化目录结构应该是这样：
```
 AppName:
  config/
    config.js
  express-server/
    log-systeam/
      loger.mjs
    monitor/
      monitor.mjs
    router/
      reqtrans.mjs
  logs/
  toc-server/
    toc-server.mjs  
  pages/
    index.jsx
    helloWorld.jsx
  src/
    components/
    js/
      g.js
      request.js
    redux/
    scss/
      index.scss
    view/
      index.jsx
  static/
    pic/
    favicon.ico
  test/
    test.js
  util/
    eject.js
  .gitignore
  next.config.js
  package.json
  README.md
  server.mjs
```



## Using

Toc.js is based on NEXT, so React syntax can be used directly.


### CSR-service
In the case of client side rendering,fatch data in child-components;
只想用客户端渲染的情况下，只需要将数据请求放在子组件内即可；

### SSR-service
在需要使用到服务端渲染的情况下，可以将请求放到pages目录下的文件里的"getInitialProps"方法下即可；

### AjaxTranspond-service （be doing）
UI渲染框架可以选择其他方案，需要将后端接口地址设置为本服务的地址，然后由本服务进行接口转发；

### Program performance monitoring
可在cofig/config.js里配置一个路由，通过访问这个地址，查看当前程序所占用的系统资源；


## Deploy
- 命令行部署
- PM2部署
- 文件包方式部署（The future support）

##new