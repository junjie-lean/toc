/*
 * @Author: junjie.lean 
 * @Date: 2018-12-22 00:05:25 
 * @Last Modified by: lean
 * @Last Modified time: 2019-01-06 01:54:49
 */

/**
 * 页面级文件  文件名自动映射成路由
 */

import React from 'react';
import Index from '../src/view/index';

export default class IndexPage extends React.Component {
  static async getInititalProps() {
    return {

    }
  }
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Index {...this.props} falseworkName='falsework of SSR' />
      </div>
    )
  }
}
