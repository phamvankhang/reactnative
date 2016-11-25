import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Menu from './menu'
export default class Home extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Menu rootView={this}/>
            </View>
        );
    }
}
