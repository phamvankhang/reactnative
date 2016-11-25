import React, {Component} from 'react';
import {MapView, TextInput, View} from 'react-native';
import css from './style'
export default class MapMyRide extends Component {
    constructor() {
        super()
        this.state = {
            showsUserLocation: true,
            followsUserLocation: true,
            zoomEnabled: true,
            showsScale: true,
            provider: 'google',
            mapType: 'satellite',
            region: {

                longitude: 21.0064807,
                latitude: 105.799677,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }
        }
    }

    changeRegion(data) {

    }

    render() {
        return (
            <View style={{flex: 1}}>
                <MapView
                    style={css.map}

                    region={this.state.region}
                />
                <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1, bottom: 50}}
                           onChangeText={ (text) => this.setState({text})} value={this.state.text}/>
            </View>
        );
    }
}
