/*
 * @Author: junjie.lean 
 * @Date: 2018-12-22 00:05:25 
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2019-01-07 19:11:38
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
    let data = await fetchData('/systeam/module/get', { isServer: req ? true : false }, req);
    
    return { '/get': data }
  }
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    // console.log(this.props)s
    // fetchData('/systeam/module/get', {}, null).then((res) => {
    //   console.log("res:", res)
    // })
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
