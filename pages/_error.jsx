/*
 * @Author: junjie.lean 
 * @Date: 2018-12-22 00:07:25 
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2019-01-15 09:27:26
 */

/**
 * @description customer error page
 */
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