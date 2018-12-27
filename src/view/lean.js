/*
 * @Author: junjie.lean
 * @Date: 2018-12-22 00:08:05
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2018-12-26 16:44:07
 */

/**
 * 页面级的组件
 */

import React, { PureComponent } from 'react';
import Container from './../components/container';

export default class Lean extends React.Component {
    render() {
        return (
            <Container>
                <div>
                   客户端组件级页面
                </div>
            </Container>
        )
    }
}