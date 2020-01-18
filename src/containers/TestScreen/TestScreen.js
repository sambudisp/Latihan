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
import { Actions } from 'react-native-router-flux';

class TestScreen extends Component {
	constructor(props) {
		super(props)
		this.state = {
			angka1: '234',
			angka2: '123',
			total: '100',
			testReturn: () => {
				return 'abcd'
			}
		}
	}

	changeStateA = () => {
		const a = 23
		let s = 22
	}

	buttonPressed = () => {
		// this.setState({
		// 	total: convertToIDR(this.state.angka1)
		// })
		// alert(this.state.testReturn())
		// modelUser.login(this.state.email,this.state.password)
		Actions.screen2({
			oper : this.state.total
		})
	}

	onTextChange = (field) => (value) => this.setState({ [field]: value })

	// plus = () => {
	// 	return a+b+c
	// }

	render() {
		return (
			<View style={{ flex: 1, backgroundColor: 'cyan' }}>
				<KotakHijau />
				<View style={{ flex: 1 }}>
					<View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 24 }}>
						<View style={{ height: 250, width: 250, backgroundColor: 'yellow',elevation:5 }} />
						<TextInput
							value={this.state.angka1}
							onChangeText={this.onTextChange('angka1')}
							keyboardType='numeric'
							placeholder='Nomor HP' />
						<TextInput
							value={this.state.angka2}
							onChangeText={this.onTextChange('angka2')}
							keyboardType='numeric'
							placeholder='Nomor HP' />
					</View>
					<Text style={styles.sectionDescription}>{this.state.total}</Text>
				</View>

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

export default TestScreen;
