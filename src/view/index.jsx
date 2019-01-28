<<<<<<< HEAD
<<<<<<< HEAD
=======
/*
 * @Author: junjie.lean
 * @Date: 2018-12-22 00:08:05
 * @Last Modified by: lean
 * @Last Modified time: 2019-01-25 00:02:29
 */

/**
 * 页面级的组件
 */
>>>>>>> 7b87a45fc5f07938e6a8a8f303c8ac237a3bdc29
=======
>>>>>>> fe682e2add9db6edd0d2536041e9c47e5bcbe3a4

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

  addOne = () => {
    this.setState({
      name: this.state.name + 1
    })
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
            {/* <img src={CSR} /> */}
            {/* <img src='/static/pic/csr.png' /> */}
          </div>
        </div>
      </Container>
    )
  }
}
