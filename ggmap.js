import React, {Component} from 'react';
import _ from 'underscore'
import {MapView, TextInput, View} from 'react-native';
import css from './style'
export default class MapMyRide extends Component {
    constructor() {
        super()
        this.state = {
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
        console.log(data)
        var results = data.split(' ')
        var region= {
                longitude: parseFloat(results[0]),
                latitude: parseFloat(results[1]),
                latitudeDelta: parseFloat(results[2]),
                longitudeDelta: parseFloat(results[3]),
            }
            this.setState({region: region})
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <MapView
                    style={css.map}

                    region={this.state.region}
                />
                <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1, bottom: 50}}
                           onChangeText={ (text) => this.changeRegion(text)} value={_.values(this.state.region).join(' ')}/>
            </View>
        );
    }
}
