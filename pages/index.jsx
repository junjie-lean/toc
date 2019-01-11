/*
 * @Author: junjie.lean 
 * @Date: 2018-12-22 00:05:25 
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2019-01-11 09:46:22
 */

/**
 * 页面级文件  文件名自动映射成路由
 */

import React from 'react';
import Index from '../src/view/index';
import Link from 'next/link';
import request from './../src/js/request.js';
// import { Button } from 'antd';
const { fetchData } = request;

export default class IndexPage extends React.Component {
  static async getInitialProps({ req }) {
    // let data = await fetchData('/a', { isServer: req ? true : false }, req);
    // console.log('index.jsx /a',data)
    // return { '/a': data }
    return {}
  }
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    // console.log(this.props)
    // fetchData('/systeam/module/get', {}, null).then((res) => {
    //   console.log("res:", res)
    // })
    sessionStorage.token=123;
    sessionStorage.orgcode=456;
  }
  render() {
    return (
      <div>
        <Index {...this.props} falseworkName='falsework of SSR' />
        <Link href="/helloWorld">
          <a>go to hello</a>
        </Link>
      </div>
    )
  }
}
