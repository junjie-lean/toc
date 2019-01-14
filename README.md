# TOC.JS

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

Initial catalogs：
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


### CSR-service
In the case of Client Render,fetch the data in child-components.

### SSR-service
When use the Server Render,please fetch data in this function (getInitialProps) which is in the page of Pages directory.

### AjaxTranspond-service （be doing）
You can choose UI library  whatever you want. you just need to convert you own back-end interface address to this service address,and then this service send the interface.

### Program performance monitoring

Configure a route in the config/config.js and check the system resourse that is used by current procedure through asking for the address.

## Deploy
- command line
- PM2
- file packet（The future support）
