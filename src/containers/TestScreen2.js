import React, { Component, PureComponent } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	Image,
	TextInput,
	TouchableOpacity,
	TouchableHighlight,
	TouchableWithoutFeedback,
	TouchableNativeFeedback
} from 'react-native';


import {
	Header,
	LearnMoreLinks,
	Colors,
	DebugInstructions,
	ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { KotakHijau } from '../components/KotakMerah';
import convertToIDR from '../libraries/convertToIDR';
import modelUser from '../models/User'

class TestScreen2 extends Component {
	buttonPressed = () => {

	}

	componentDidMount() {

	}

	componentDidUpdate() {

	}

	componentWillUnmount() {

	}

	render() {
		return (
			<View style={{ flex: 1, backgroundColor: 'cyan' }}>
				<KotakHijau />
				<Text>{this.props.oper}</Text>
				<TouchableOpacity onPress={this.buttonPressed} style={{ backgroundColor: 'green', height: 50, width: '100%' }} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: Colors.lighter,
	},
	engine: {
		position: 'absolute',
		right: 0,
	},
	body: {
		backgroundColor: Colors.white,
	},
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
		color: Colors.black,
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
		color: Colors.dark,
	},
	highlight: {
		fontWeight: '700',
	},
	footer: {
		color: Colors.dark,
		fontSize: 12,
		fontWeight: '600',
		padding: 4,
		paddingRight: 12,
		textAlign: 'right',
	},
});

export default TestScreen2;
