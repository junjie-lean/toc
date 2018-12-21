- [框架介绍](#%E6%A1%86%E6%9E%B6%E4%BB%8B%E7%BB%8D)
- [主要使用到的技术栈](#%E4%B8%BB%E8%A6%81%E4%BD%BF%E7%94%A8%E5%88%B0%E7%9A%84%E6%8A%80%E6%9C%AF%E6%A0%88)
- [说明](#%E8%AF%B4%E6%98%8E)
- [Why Next?](#why-next)
- [框架介绍](#%E6%A1%86%E6%9E%B6%E4%BB%8B%E7%BB%8D-1)
- [生产和开发的启动命令](#%08%E7%94%9F%E4%BA%A7%E5%92%8C%E5%BC%80%E5%8F%91%1D%E7%9A%84%E5%90%AF%E5%8A%A8%E5%91%BD%E4%BB%A4)
  - [`npm run dev:m`](#npm-run-devm)
  - [`npm run pro:m`](#npm-run-prom)
  - [`npm run build`](#npm-run-build)
- [styled-jsx的语法支持](#styled-jsx%E7%9A%84%E8%AF%AD%E6%B3%95%E6%94%AF%E6%8C%81)
- [组件编写方式：](#%E7%BB%84%E4%BB%B6%E7%BC%96%E5%86%99%E6%96%B9%E5%BC%8F)
- [获取数据的方式](#%E8%8E%B7%E5%8F%96%E6%95%B0%E6%8D%AE%E7%9A%84%E6%96%B9%E5%BC%8F)
- [部署相关](#%E9%83%A8%E7%BD%B2%E7%9B%B8%E5%85%B3)
- [日志系统](#%E6%97%A5%E5%BF%97%E7%B3%BB%E7%BB%9F)
- [其他](#%E5%85%B6%E4%BB%96)

## 框架介绍

搭建此框架的初衷是，在规范前端开发方式的前提下尽量优化用户体验。


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
 - SSR相关知识


## 说明
 - 使用Next框架是因为Next的UI层是基于React的语法实现，在React使用的比较熟练的情况下，写起Next组件非常轻松；如果是对Vue语法比较熟悉的情况下，可以考虑Next作者所作的另一个SSR框架“Nuxt”。
 - 使用react-redux作为状态管理器，但是这里点有已个比较棘手的问题就是，需要使在服务端和客户端的同一页面都达到状态一致。
 - Ant design 做UI组件库。
 - Node做运行环境,使用experimental-modules参数起Express服务使之支持ES6模块语法，如果是非windows的生产环境下还会加载cluster模块进行负载均衡。express服务单独写router监听接口，或者直接通过axios转发请求。


## Why Next?
Next是非常轻量化的SSR框架，该项目启动到现在已经有非常多的互联网公司使用了该框架，这些互联网公司和Next的作者一起推动着Next框架的发展。目前Next的版本已经发展到7.x，已经达到一个稳定的、产品级的程度。

使用Next框架实现的案例有：
  - [腾讯门户(移动端)](https://xw.qq.com/)
  - [漫威官网](https://www.marvel.com/)
  - [Nike官网](https://www.nike.com/)
  - [InvisionAPP官网](https://www.invisionapp.com/)
  - [Docker官网](https://success.docker.com/)
  - ...
  
Next默认支持HTML-Chunk，即客户端每次请求，server端只会返回当前页需要HTML资源，Next会把整个前端项目切割成不同的chunk，实现了请求资源最小化。

Next轻量化，首屏响应时间只需要30ms左右，同等量级的页面首屏响应速度应该在200ms左右。因为响应速度快，也非常适合做web混编APP嵌入。

使用React语法，Reacter不需要投入过多学习时间，过度平缓。

## 框架介绍

[Create-Next-App的Github地址](https://github.com/segmentio/create-next-app);

## 生产和开发的启动命令

在项目目录下，支持的命令。

### `npm run dev:m`

执行此命令 会已开发模式启动项目，并会在浏览器打开[http://localhost:8080](http://localhost:8080)。
在编写任何组件后，项目会立即更新。
参数"m"表示以ES6的方式引入模块；

### `npm run pro:m`

执行此命令，会先对项目进行编译，然后以生产模式启动项目。如果项目是非windows-server,还可以支持负债均衡。（负载均衡源于Node.cluster的多进程实现，Windows的系统调度不支持这种方式，如果需要在Windows-Server下实现负载均衡，需要额外配置PM2和Nginx）。



### `npm run build`

对项目执行编译，`npm run pro:m`的时候会默认执行一次build；


## styled-jsx的语法支持

[`styled-jsx`](https://github.com/zeit/styled-jsx) 是一种支持SSR的css语法：

```jsx
export default () => (
  <div>
    Hello world
    <p>scoped!</p>
    <style jsx>{`
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
    `}</style>
  </div>
)
```
了解更多：[Next's CSS features](https://github.com/zeit/next.js#css).

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

## 获取数据的方式

getInitialProps生命周期函数会在服务端和客户端执行，可以在这个函数里执行数据请求：

```jsx
const Page = props => <div>Next stars: {props.stars}</div>
Page.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  const stars = json.stargazers_count
  return { stars }
}
export default Page
```

了解更多：[fetching data and the component lifecycle](https://github.com/zeit/next.js#fetching-data-and-component-lifecycle)


## 部署相关

支持多种部署方式
  - PM2 
  - Nginx
  - 命令行模式

支持多种操作系统
  - Windows-Server
  - Linux
  - ...

## 日志系统

支持可配置化的日志系统


## 其他
  ...