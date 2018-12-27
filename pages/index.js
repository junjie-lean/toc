/*
 * @Author: junjie.lean 
 * @Date: 2018-12-22 00:05:25 
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2018-12-26 18:30:43
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
      <Index {...this.props} falseworkName='falsework of SSR' />
    )
  }
}
