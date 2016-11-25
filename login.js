import React, {Component} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import Home from './home'
import css from './style'
export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            text: 'connect'
        }
    }

    render() {
        console.log(this.props)
        return (
            <View style={css.center}>
                 <TouchableHighlight onPress={ e => {
                    this.setState({text: 'connected'}, () => {
                        this.props.navigator.push({
                            title: 'Home',
                            component: Home
                        })
                    })
                }}>
                    <Text>{this.state.text}</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
