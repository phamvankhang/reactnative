/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    View,
    NavigatorIOS,
    TouchableHighlight
} from 'react-native';
import Home from './home'
import Menu from './menu'
import Navigator from './navigator'

export default class finalApp extends Component {

    constructor(props) {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Navigator ref='nav'/>
            </View>
        );
    }
}


AppRegistry.registerComponent('finalApp', () => finalApp);
