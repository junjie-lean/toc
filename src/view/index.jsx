
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
  componentDidMount() {
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
            <p className="description">
              next.js: 基于node的服务端渲染框架
             </p>
            {/* <Button onClick={this.clickHandle.bind(this)}>事件方式触发跳转</Button>
            <Link href="./lean" as="frameWork">
              <Button>Link方式触发跳转</Button>
            </Link> */}
            <br />
          </div>
        </div>
      </Container>
    )
  }
}
