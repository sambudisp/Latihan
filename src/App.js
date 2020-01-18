/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
	View,
	StatusBar
} from 'react-native';
import NavigationRouter from './navigations/NavigationRouter';

class App extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<NavigationRouter />
			</View>
		)
	}
}

export default App;
