
import React, { Component } from 'react'
import Link from 'next/link';
export default class Error extends React.Component {
    render() {
        return (
            <div>
                错误页面error
                <br />
                <Link href="/">
                    <a>back to index</a>
                </Link>
            </div>
        )
    }
}