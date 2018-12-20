- [框架介绍](#%E6%A1%86%E6%9E%B6%E4%BB%8B%E7%BB%8D)
- [主要使用到的技术栈](#%E4%B8%BB%E8%A6%81%E4%BD%BF%E7%94%A8%E5%88%B0%E7%9A%84%E6%8A%80%E6%9C%AF%E6%A0%88)
- [说明](#%E8%AF%B4%E6%98%8E)
- [Why Next?](#why-next)
- [Start](#start)
- [Questions? Feedback?](#questions-feedback)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [`npm run dev`](#npm-run-dev)
  - [`npm run build`](#npm-run-build)
  - [`npm run start`](#npm-run-start)
- [Using CSS](#using-css)
- [Adding Components](#adding-components)
  - [`./components/simple.js`](#componentssimplejs)
  - [`./components/complex.js`](#componentscomplexjs)
- [Fetching Data](#fetching-data)
  - [`./pages/stars.js`](#pagesstarsjs)
- [Custom Server](#custom-server)
- [Syntax Highlighting](#syntax-highlighting)
- [Deploy to Now](#deploy-to-now)
- [Something Missing?](#something-missing)

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
  - [腾讯门户(移动端)](#https://xw.qq.com/)
  - [漫威官网](#https://www.marvel.com/)
  - [Nike官网](#https://www.nike.com/)
  - [InvisionAPP官网](#https://www.invisionapp.com/)
  - [Docker官网](#https://success.docker.com/)
  - ...
  
Next默认支持HTML-Chunk，即客户端每次请求，server端只会返回当前页需要HTML资源，Next会把整个前端项目切割成不同的chunk，实现了请求资源最小化。

Next轻量化，首屏响应时间只需要30ms左右，同等量级的页面首屏响应速度应该在200ms左右。因为响应速度快，也非常适合做web混编APP嵌入。

使用React语法，Reacter不需要投入过多学习时间，过度平缓。

## Start

This project was bootstrapped with [Create Next App](https://github.com/segmentio/create-next-app).

Find the most recent version of this guide at [here](https://github.com/segmentio/create-next-app/blob/master/lib/templates/default/README.md). And check out [Next.js repo](https://github.com/zeit/next.js) for the most up-to-date info.

## Questions? Feedback?

Check out [Next.js FAQ & docs](https://github.com/zeit/next.js#faq) or [let us know](https://github.com/segmentio/create-next-app/issues) your feedback.

## Folder Structure

After creating an app, it should look something like:

```
.
├── README.md
├── components
│   ├── head.js
│   └── nav.js
├── next.config.js
├── node_modules
│   ├── [...]
├── package.json
├── pages
│   └── index.js
├── static
│   └── favicon.ico
└── yarn.lock
```

Routing in Next.js is based on the file system, so `./pages/index.js` maps to the `/` route and
`./pages/about.js` would map to `/about`.

The `./static` directory maps to `/static` in the `next` server, so you can put all your
other static resources like images or compiled CSS in there.

Out of the box, we get:

- Automatic transpilation and bundling (with webpack and babel)
- Hot code reloading
- Server rendering and indexing of `./pages`
- Static file serving. `./static/` is mapped to `/static/`

Read more about [Next's Routing](https://github.com/zeit/next.js#routing)

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any errors in the console.

### `npm run build`

Builds the app for production to the `.next` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run start`

Starts the application in production mode.
The application should be compiled with \`next build\` first.

See the section in Next docs about [deployment](https://github.com/zeit/next.js/wiki/Deployment) for more information.

## Using CSS

[`styled-jsx`](https://github.com/zeit/styled-jsx) is bundled with next to provide support for isolated scoped CSS. The aim is to support "shadow CSS" resembling of Web Components, which unfortunately [do not support server-rendering and are JS-only](https://github.com/w3c/webcomponents/issues/71).

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

Read more about [Next's CSS features](https://github.com/zeit/next.js#css).

## Adding Components

We recommend keeping React components in `./components` and they should look like:

### `./components/simple.js`

```jsx
const Simple = () => <div>Simple Component</div>

export default Simple // don't forget to export default!
```

### `./components/complex.js`

```jsx
import { Component } from 'react'

class Complex extends Component {
  state = {
    text: 'World'
  }

  render() {
    const { text } = this.state
    return <div>Hello {text}</div>
  }
}

export default Complex // don't forget to export default!
```

## Fetching Data

You can fetch data in `pages` components using `getInitialProps` like this:

### `./pages/stars.js`

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

For the initial page load, `getInitialProps` will execute on the server only. `getInitialProps` will only be executed on the client when navigating to a different route via the `Link` component or using the routing APIs.

_Note: `getInitialProps` can **not** be used in children components. Only in `pages`._

Read more about [fetching data and the component lifecycle](https://github.com/zeit/next.js#fetching-data-and-component-lifecycle)

## Custom Server

Want to start a new app with a custom server? Run `create-next-app --example customer-server custom-app`

Typically you start your next server with `next start`. It's possible, however, to start a server 100% programmatically in order to customize routes, use route patterns, etc

This example makes `/a` resolve to `./pages/b`, and `/b` resolve to `./pages/a`:

```jsx
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    if (pathname === '/a') {
      app.render(req, res, '/b', query)
    } else if (pathname === '/b') {
      app.render(req, res, '/a', query)
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
```

Then, change your `start` script to `NODE_ENV=production node server.js`.

Read more about [custom server and routing](https://github.com/zeit/next.js#custom-server-and-routing)

## Syntax Highlighting

To configure the syntax highlighting in your favorite text editor, head to the [relevant Babel documentation page](https://babeljs.io/docs/editors) and follow the instructions. Some of the most popular editors are covered.

## Deploy to Now

[now](https://zeit.co/now) offers a zero-configuration single-command deployment.

1.  Install the `now` command-line tool either via the recommended [desktop tool](https://zeit.co/download) or via node with `npm install -g now`.

2.  Run `now` from your project directory. You will see a **now.sh** URL in your output like this:

    ```
    > Ready! https://your-project-dirname-tpspyhtdtk.now.sh (copied to clipboard)
    ```

    Paste that URL into your browser when the build is complete, and you will see your deployed app.

You can find more details about [`now` here](https://zeit.co/now).

## Something Missing?

If you have ideas for how we could improve this readme or the project in general, [let us know](https://github.com/segmentio/create-next-app/issues) or [contribute some!](https://github.com/segmentio/create-next-app/edit/master/lib/templates/default/README.md)

