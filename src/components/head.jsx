
import React from 'react';
import NextHead from 'next/head';

const defaultDescription = '';
const defaultOGURL = '';
const defaultOGImage = '';
const defaultTitle = "前端基础框架";
export default class Head extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		let props = this.props;
		return (
			<NextHead>
				<meta charSet="UTF-8" />
				{/* <title>{props.title || defaultTitle}</title> */}
				<title>前端基础框架</title>
				<meta
					name="description"
					content={props.description || defaultDescription}
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/static/favicon.ico" />
				{/* <link rel="stylesheel" href="/static/antd.css" /> */}
			</NextHead>
		)
	}
}
