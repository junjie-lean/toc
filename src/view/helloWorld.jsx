/*
 * @Author: junjie.lean
 * @Date: 2018-12-22 00:08:05
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2019-01-07 19:10:56
 */

/**
 * 页面级的组件
 */

import React from 'react';
import Link from 'next/link';
import Container from '../components/container';

export default class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            name: 1
        }
    }


    render() {
        let props = this.props;
        return (
            <Container>
                <div>
                    <h3>
                        hello world
                    </h3>
                    <Link href="/">
                        <a>back to index</a>
                    </Link>
                </div>
            </Container>
        )
    }
}
