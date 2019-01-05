import React, { Component } from 'react';

export default class Lifecycle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ...props
        }
        // console.log('constructor')
    }

    static getDerivedStateFromProps(props, state) {
        // console.log('flush props', props, state)
        return {
            ...props
        }
    }

    componentDidMount() {
        // console.log('did mount')
    }
    render() {
        // console.log('render')
        return (
            <div>
                lifycycle:{this.state.name}
            </div>
        )
    }
}