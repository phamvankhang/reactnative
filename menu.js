import React, {Component} from 'react';
import {Text, View, TouchableHighlight, TabBarIOS} from 'react-native';
import css from './style'
import Map from './ggmap'
import Home from './home'
import icons from './icons'
export default class MapMyRide extends Component {
    constructor(props) {
        super()
        this.state = {
            rootView: props.rootView,
            active: 'home'
        }
    }

    changeView(data) {

        this.state.rootView.refs.nav.changeMenu(data)
    }

    render() {
        return (
            <TabBarIOS>
                <TabBarIOS.Item
                    title="Home"
                    icon={{uri: icons.homeIcon, scale: 3.5}}
                    selected={this.state.selectedTab === 'home'}
                    onPress={() => {

                        this.setState({
                            selectedTab: 'home',
                        });

                    }}>
                    <Home/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="Map"
                    icon={{uri: icons.mapIcon, scale: 3}}
                    selected={this.state.selectedTab === 'map'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'map',
                        });

                    }}>
                    <Map></Map>
                </TabBarIOS.Item>
            </TabBarIOS>

        );
    }

}

