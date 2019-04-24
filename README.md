# TOC.JS

This's a version include a Node.js services, it's immature, you may need to go to [here](https://github.com/junjie-lean/toc.serverless/tree/alpha)！

这是包含了Node.js服务的版本，它还不成熟，你可能需要[这个](https://github.com/junjie-lean/toc.serverless/tree/alpha)！


## What is toc.js?
Toc.js is a Server Side Render framework based [NEXT](https://nextjs.org),toc.js can support：

    - The conventional CSR Single app page；
    - The SSR Single app page ;
    - API transpond;
    - Web-server performance monitoring;
    - Other more...

toc means "Top Of Cloud";

[![996.icu](https://img.shields.io/badge/link-996.icu-red.svg)](https://996.icu)

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

Initial catalogs：
```
 AppName:
  config/
    config.js
  express-server/
    log-systeam/
      loger.js
    monitor/
      monitor.js
    router/
      reqtrans.js
    next/
      next-server.js
  logs/
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
  server.js
```



## Using

Toc.js is based on NEXT, so React syntax can be used directly.


### CSR-service
In the case of Client Render,fetch the data in child-components.

### SSR-service
When use the Server Render,please fetch data in this function (getInitialProps) which is in the page of Pages directory.

### AjaxTranspond-service （be doing）
You can choose UI library  whatever you want. you just need to convert you own back-end interface address to this service address,and then this service send to the back-end interface.

### Program performance monitoring

Configure a route in the `config/config.js ` and check the system resourse that is used by current procedure through asking for the address.

## How to start

Steps:
1. Configure the `config/config.js` 
2. execute `npm run dev`

## Deploy
- command line
- PM2
- file packet（The future support）


#### Translator

E-mail:593243536@qq.com