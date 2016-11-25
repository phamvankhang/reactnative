/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	AppRegistry,
	Text,
	View,
	TouchableHighlight,
	NativeAppEventEmitter,
	Platform,
	PermissionsAndroid
} from 'react-native';

var base64 = require('base64-js');

import BleManager from 'react-native-ble-manager';

class iot extends Component {

	constructor() {
		super()

		this.state = {
			ble: null,
			scanning: false,
			text: '...'
		}
	}

	handleError( error ) {
		console.log(error);
	}

	componentDidMount() {
		BleManager.start({ showAlert: false });
		this.handleDiscoverPeripheral = this.handleDiscoverPeripheral.bind(this);

		NativeAppEventEmitter
			.addListener('BleManagerDiscoverPeripheral', this.handleDiscoverPeripheral);

		NativeAppEventEmitter
			.addListener('BleManagerDidUpdateValueForCharacteristic', ( data ) => {
				console.log(data)
			});
		NativeAppEventEmitter
			.addListener('BleManagerStopScan', () => {
				console.log('Scanning stopped.')
			});
		NativeAppEventEmitter
			.addListener('BleManagerConnectPeripheral', () => {
				console.log('Device connected.')
			});
		NativeAppEventEmitter
			.addListener('BleManagerDisconnectPeripheral', () => {
				console.log('Device connected.')
			});
	}

	disconnect() {
		BleManager.disconnect("E7DF82BF-EE10-45FE-96A1-DFE39D0AF0BD")
			.then(() => {
				console.log('disconnected')
			})
			.catch(this.handleError);
	}

	read() {
		BleManager.read('E7DF82BF-EE10-45FE-96A1-DFE39D0AF0BD', 'FFE0', 'FFE1')
			.then(( data ) => {
				console.log(data)
			})
			.catch(this.handleError);
	}

	write() {

		var data = base64.fromByteArray('hello');

		BleManager.writeWithoutResponse('E7DF82BF-EE10-45FE-96A1-DFE39D0AF0BD', 'FFE0', 'FFE1', data)
			.then(( data ) => {
				console.log('data written')
			})
			.catch(this.handleError);
	}

	connect() {
		//"E7DF82BF-EE10-45FE-96A1-DFE39D0AF0BD"
		BleManager.connect("E7DF82BF-EE10-45FE-96A1-DFE39D0AF0BD")
			.then(( peripheralInfo ) => {
				// Success code
				console.log('Connected');
				console.log(peripheralInfo);

				BleManager.startNotification('E7DF82BF-EE10-45FE-96A1-DFE39D0AF0BD', 'FFE0', 'FFE1')
					.then(() => {
						// Success code
						console.log('Notification started');
					})
					.catch(this.handleError);
			})
			.catch(this.handleError);
	}

	startScan() {
		BleManager.scan([], 5, true)
			.then(() => {
				console.log('Scanning...')
			})
			.catch(( e ) => console.log(e));
	}

	stopScan() {
		BleManager.stopScan([], 5, true)
			.then(() => {
				console.log('Scanning stopped.')
			})
			.catch(( e ) => console.log(e));
	}

	handleDiscoverPeripheral( data ) {
		console.log('Got ble data', data);

		this.setState({ ble: data })
	}

	render() {

		const container = {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: '#F5FCFF',
		}

		const bleList = this.state.ble
			? <Text> Device found: {this.state.ble.name} </Text>
	: <Text>no devices nearby</Text>

		return (
			<View style={container}>

			<TouchableHighlight style={buttonStyle} onPress={() => this.connect() }>
	<Text>Connect</Text>
		</TouchableHighlight>

		<TouchableHighlight style={buttonStyle} onPress={() => this.disconnect() }>
	<Text>Disconnect</Text>
		</TouchableHighlight>
		<TouchableHighlight style={buttonStyle} onPress={() => this.startScan() }>
	<Text>Scan</Text>
		</TouchableHighlight>
		<TouchableHighlight style={buttonStyle} onPress={() => this.stopScan() }>
	<Text>Stop</Text>
		</TouchableHighlight>
		<TouchableHighlight style={buttonStyle} onPress={() => this.read() }>
	<Text>Read</Text>
		</TouchableHighlight>
		<TouchableHighlight style={buttonStyle} onPress={() => this.write() }>
	<Text>Write</Text>
		</TouchableHighlight>

		{bleList}

		<Text>{this.state.text}</Text>
		</View>
	);
	}
}

const buttonStyle = {
	padding: 10
}

AppRegistry.registerComponent('iot', () => iot);
