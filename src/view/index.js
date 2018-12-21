/*
 * @Author: junjie.lean
 * @Date: 2018-12-22 00:08:05
 * @Last Modified by: lean
 * @Last Modified time: 2018-12-22 00:11:32
 */

/**
 * 页面级的组件
 */

import React from 'react';
import Link from 'next/link';
import Container from '../components/container';
import Router from 'next/router';
import { Button } from 'antd';

export default class Index extends React.Component {
  constructor(props) {
    super(props)
  }
  clickHandle() { 
      Router.push('/lean');
  }
  render() {
    let props = this.props;
    return (
      <Container>
        <div>
          <div className="hero">
            <h1 className="title">Welcome to framework!</h1>
            <p className="description">
              To get started, edit <code>pages/index.js</code> and save to reload.
           </p>
            <Button onClick={this.clickHandle.bind(this)}>事件方式触发跳转</Button>
            <br />
            <Link href="./lean" as="frameWork">
              <Button>Link方式触发跳转</Button>
            </Link>
          </div>
          <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
        </div>
      </Container>
    )
  }
}
