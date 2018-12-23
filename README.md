- [架构背景及介绍](#%E6%9E%B6%E6%9E%84%E8%83%8C%E6%99%AF%E5%8F%8A%E4%BB%8B%E7%BB%8D)
- [主要使用到的技术栈](#%E4%B8%BB%E8%A6%81%E4%BD%BF%E7%94%A8%E5%88%B0%E7%9A%84%E6%8A%80%E6%9C%AF%E6%A0%88)
- [架构相关技术说明](#%E6%9E%B6%E6%9E%84%E7%9B%B8%E5%85%B3%E6%8A%80%E6%9C%AF%E8%AF%B4%E6%98%8E)
- [Why Next?](#why-next)
- [原脚手架说明](#%E5%8E%9F%E8%84%9A%E6%89%8B%E6%9E%B6%E8%AF%B4%E6%98%8E)
- [生产模式和开发环境下的启动命令](#%E7%94%9F%E4%BA%A7%E6%A8%A1%E5%BC%8F%E5%92%8C%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E4%B8%8B%E7%9A%84%E5%90%AF%E5%8A%A8%E5%91%BD%E4%BB%A4)
  - [`npm run dev:m`](#npm-run-devm)
  - [`npm run pro:m`](#npm-run-prom)
  - [`npm run build`](#npm-run-build)
  - [outher-cli](#outher-cli)
- [styled-jsx的语法支持](#styled-jsx%E7%9A%84%E8%AF%AD%E6%B3%95%E6%94%AF%E6%8C%81)
- [组件编写方式：](#%E7%BB%84%E4%BB%B6%E7%BC%96%E5%86%99%E6%96%B9%E5%BC%8F)
- [!!!获取数据的方式](#%E8%8E%B7%E5%8F%96%E6%95%B0%E6%8D%AE%E7%9A%84%E6%96%B9%E5%BC%8F)
- [部署相关](#%E9%83%A8%E7%BD%B2%E7%9B%B8%E5%85%B3)
- [日志系统](#%E6%97%A5%E5%BF%97%E7%B3%BB%E7%BB%9F)
- [性能监控](#%E6%80%A7%E8%83%BD%E7%9B%91%E6%8E%A7)
- [接口监控](#%E6%8E%A5%E5%8F%A3%E7%9B%91%E6%8E%A7)
- [其他](#%E5%85%B6%E4%BB%96)

## 架构背景及介绍

    设计此开发架构的初衷是，“在规范前端开发模式的前提下尽量提高页面渲染速度，优化用户体验”。
    
    从现在整个前端圈开发势头来看，基本没有什么公司还在使用常规的“HTML+CSS+JSlib”这种较落后的开发模式进行前端开发，整个前端基本上都是NG、Vue、React三分天下。目前我们公司前端组使用的是基于React的single page application开发模式，即在React框架的基础下，使用其他第三方插件，进行组件式开发，最终打包生成一个HMLT文件、一个CSS文件、一个JS文件和若干媒体文件，这种模式非常利于开发和部署。但是这种随着项目业务逻辑越来越复杂，打包出来的单页文件也越来越大，有可能形成5M左右的核心JS文件。总所周知，在单页模式下浏览器在下载JS文件的时候，会阻塞页面渲染，在网速慢的情况下可能在输入项目URL后，需要等待几秒（视网速而定）后才能将这个核心JS文件下载完，才能真正进入项目。
    
    针对这种情况，目前市面上的解决方案有两种：一是使用JS-chunk模式，将较大的JS文件切割成较小的多个JS文件。这样就能每次请求较小的JS文件，用户也不必等待整个JS大文件下载后才能看到页面。二是使用服务端渲染，在用户请求时候，给用户返回带已有业务数据的HTML文件给浏览器进行渲染，从而降低用户等待时间。
    
    刚好，NEXT.js即是包含了以上两点特性的一个服务端渲染框架。它简单易用，扩展性高，并且有“create-next-app”这样优秀的脚手架作为初始化模版。于是我在“create-next-app”脚手架的基础下进行了增量配置，从而形成一个高可用、高拓展性的开发架构。


## 主要使用到的技术栈

*业务级开发人员仅需要了解：*
 - React
 - React-redux
 - Ant design
 - Axios
  
*框架级开发人员需要额外了解：*
 - Next
 - Node.js
 - Express
 - Winston
 - Moniter
 - SSR相关知识


## 架构相关技术说明

*前端层：*
 - 使用Next框架是因为Next的UI层是基于React的语法实现，在React使用的比较熟练的情况下，写起Next组件非常轻松；如果是对Vue语法比较熟悉的情况下，可以考虑Next作者所作的另一个SSR框架“Nuxt”。
 - 使用react-redux作为状态管理器，但是这里点有已个比较棘手的问题就是，需要使在服务端和客户端的同一页面都达到状态一致。
 - Ant design 做UI组件库。
  
*服务层：*
 - Node做运行环境,使用额外参数起Express服务使之支持ES6模块语法，如果是非windows的生产环境下还会加载cluster模块进行负载均衡。express服务单独写router监听接口，或者直接通过axios转发请求。
 - 使用winston做HTTP-loger，监控正常请求，鉴别非法请求。
 - Moniter
 - db


## Why Next?
Next是非常轻量化的SSR框架，该项目启动到现在已经有非常多的互联网公司使用了该框架，这些互联网公司和Next的作者一起推动着Next框架的发展。目前Next的版本已经发展到7.x，已经达到一个稳定的、产品级的程度。

使用Next框架实现的案例有：
  - [腾讯门户(移动端)](https://xw.qq.com/)
  - [漫威官网](https://www.marvel.com/)
  - [Nike官网](https://www.nike.com/)
  - [InvisionAPP官网](https://www.invisionapp.com/)
  - [Docker官网](https://success.docker.com/)
  - ...
  
Next默认支持JS-Chunk，即客户端每次请求，server端只会返回当前页需要HTML资源，Next会把整个前端项目切割成不同的chunk，实现了请求资源最小化。

Next轻量化，首屏响应时间只需要30ms左右，同等量级的页面首屏响应速度应该在200ms左右。因为响应速度快，也非常适合做web混编APP嵌入。

使用React语法，Reacter不需要投入过多学习时间，过度平缓。

## 原脚手架说明

[Github地址](https://github.com/segmentio/create-next-app);

## 生产模式和开发环境下的启动命令

在项目目录下，支持的命令：

### `npm run dev:m`
执行此命令 会已开发模式启动项目，并会在浏览器打开[http://localhost:8080](http://localhost:8080)。
在编写任何组件后，项目会立即更新。

### `npm run pro:m`
执行此命令，会先对项目进行编译，然后以生产模式启动项目。如果项目是非windows-server,还可以支持负债均衡。（负载均衡源于Node.cluster的多进程实现，Windows的系统调度不支持这种方式，如果需要在Windows-Server下实现负载均衡，需要额外配置PM2和Nginx）。

### `npm run build`
对项目执行编译，生成程序包。“npm run pro:m”的时候会默认执行一次build操作。

### outher-cli
其他命令可在package.json的scripts字段中进行配置。

## styled-jsx的语法支持

[`styled-jsx`](https://github.com/zeit/styled-jsx) 是一种支持SSR的css语法：
```jsx
export default class Index extends React.Compontn (
 render (){
   return (
      <div>
        Hello world
        <p>scoped!</p>
        <style jsx>{
          `
            p {
              color: blue;
            }
            div {
              background: red;
            }
            @media (max-width: 600px) {
              div {
                background: blue;
              }
            }
          `
        }
        </style>
      </div>
   )
 }
)
```
了解更多：[Next's CSS features](https://github.com/zeit/next.js#css).

## 组件编写方式：

对Reacter非常友好的语法：

```jsx
import { Component } from 'react'
export default class Complex extends Component {
constructor(props) {
    super(props);
    this.state = {
    text: 'World'
    }
}
  render() {
    const { text } = this.state
    return <div>Hello {text}</div>
  }
}
```

## !!!获取数据的方式

getInitialProps生命周期函数会在服务端和客户端执行，可以在这个函数里执行数据请求：
```jsx
import React from 'react';
export default class Page extends React.component{
  static async getInitialProps(req){
    if(req){
      const res = await fetch('https://api.github.com/repos/zeit/next.js')
      const json = await res.json()
      const stars = json.stargazers_count;
      return { stars }
    }else{
      return {}
    }
  }
  render (){
    let props = this.props;
    return (
      <div>Next stars: {props.stars}</div>
    )
  }
}
```

了解更多：[获取数据的方法及组件生命周期](https://github.com/zeit/next.js#fetching-data-and-component-lifecycle)


## 部署相关

支持多种部署方式
  - PM2 
  - Nginx
  - 命令行模式
  - ... 

支持多种操作系统
  - Windows-Server
  - Linux
  - ...

## 日志系统

支持可配置化的日志系统

## 性能监控

支持当前运行环境的性能监控并生成日志。

## 接口监控

支持接口调用监控


## 其他
  ...