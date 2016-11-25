import React, {Component, PropTypes} from 'react';
import {NavigatorIOS, Text} from 'react-native';
import Map from './ggmap'
import Login from './login'
export default class NavigatorIOSApp extends Component {
    changeMenu(data){
        this.refs.nav.pop()
        this.refs.nav.push(data)
    }
    render() {
        return (
            <NavigatorIOS ref="nav"
                initialRoute={{
                    component: Login,
                    title: 'Login',
                }} nav={this}
                style={{flex: 1}}
            />
        );
    }
}