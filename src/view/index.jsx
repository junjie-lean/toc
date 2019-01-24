/*
 * @Author: junjie.lean
 * @Date: 2018-12-22 00:08:05
 * @Last Modified by: lean
 * @Last Modified time: 2019-01-25 00:08:33
 */

/**
 * 页面级的组件
 */

import React from 'react';
import Link from 'next/link';
import Container from '../components/container';
import Router from 'next/router';
import { Button } from 'antd';
import IndexScss from './../scss/index.scss';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      name: 1
    }
  }

  clickHandle() {
    Router.push('/lean');
  }

  
  componentDidMount(){
    // console.log(G)
  }
  render() {
    let props = this.props;
    return (
      <Container>
        <div>
          <div className="hero">
            <h1 className="title" onClick={this.addOne}>Welcome to {props.falseworkName}!</h1>
            <p className="description">
              To get started, edit <code>pages/index.js</code> and save to reload.
            </p>
            {/* <Button onClick={this.clickHandle.bind(this)}>事件方式触发跳转</Button>
            <br />
            <Link href="./lean" as="frameWork">
              <Button>Link方式触发跳转</Button>
            </Link> */}
            <br />
            {/* <img src='/static/pic/csr.png' /> */}
          </div>
        </div>
      </Container>
    )
  }
}
