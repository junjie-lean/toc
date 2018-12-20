import React, { PureComponent } from 'react';
import Lean from './../src/view/lean';

export default class LeanPage extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Lean {...this.props} />
        )
    }
}