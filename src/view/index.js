/*
 * @Author: junjie.lean
 * @Date: 2018-12-22 00:08:05
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2019-01-04 10:51:53
 */

/**
 * 页面级的组件
 */

import React from 'react';
import Link from 'next/link';
import Container from '../components/container';
import Router from 'next/router';
import { Button } from 'antd';
import Lifecycle from './../components/Lifecycle';
import indexScss from './../scss/index.scss';

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

  addOne = () => {
    this.setState({
      name: this.state.name + 1
    })
  }
  render() {
    let props = this.props;
    return (
      <Container>
        <div>
          <div className="hero">
            <h1 className="title" onClick={this.addOne}>Welcome to {props.falseworkName}!</h1>
            <p className="description">
              {/* To get started, edit <code>pages/index.js</code> and save to reload. */}
            </p>
            {/* <Button onClick={this.clickHandle.bind(this)}>事件方式触发跳转</Button>
            <br />
            <Link href="./lean" as="frameWork">
              <Button>Link方式触发跳转</Button>
            </Link> */}
            <br />
            {/* <img src={CSR} /> */}
            {/* <img src='/static/pic/csr.png' /> */}
            <Lifecycle name={this.state.name} />
          </div>
          <style jsx>{indexScss}</style>
        </div>
      </Container>
    )
  }
}
