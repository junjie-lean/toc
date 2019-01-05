/*
 * @Author: junjie.lean 
 * @Date: 2018-12-22 00:08:54 
 * @Last Modified by: lean
 * @Last Modified time: 2018-12-22 00:10:36
 */


/**
 * 全局容器组件
 */

import React, { PureComponent } from 'react';
import Head from './head';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import { LocaleProvider } from 'antd';
import { allReducer } from '../redux/reducers';

const store = createStore(allReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));


export default class Container extends React.Component {

	render() {
		return (
			<LocaleProvider locale={zh_CN}>
				<Provider store={store}>
					<Head />
					{
						this.props.children
					}
				</Provider>
			</LocaleProvider>
		)
	}
}