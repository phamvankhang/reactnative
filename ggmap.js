import React, {Component} from 'react';
import {MapView} from 'react-native';
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

    render() {
        return (
            <MapView
                style={css.map}

                region={this.state.region}
            />
        );
    }
}

const earthRadiusInKM = 6371;
// you can customize these two values based on your needs
const radiusInKM = 1;
const aspectRatio = 1;

class Map extends Component {
    constructor(props) {
        super(props);

        // this will be the map's initial region
        this.state = {
            region: {

                longitude: 21.0064807,
                latitude: 105.799677,
            }
        };
    }

    // you need to invoke this method to update your map's region.
    showRegion(locationCoords) {
        if (locationCoords && locationCoords.latitude && locationCoords.longitude) {
            var radiusInRad = radiusInKM / earthRadiusInKM;
            var longitudeDelta = this.rad2deg(radiusInRad / Math.cos(this.deg2rad(locationCoords.latitude)));
            var latitudeDelta = aspectRatio * this.rad2deg(radiusInRad);

            this.setState({
                region: {
                    latitude: locationCoords.latitude,
                    longitude: locationCoords.longitude,
                    latitudeDelta: latitudeDelta,
                    longitudeDelta: longitudeDelta
                }
            });
        }
    }

    render() {
        return (
            <MapView
                style={{flex: 1}}
                region={this.state.region}/>
        )
    }

    deg2rad(angle) {
        return angle * 0.017453292519943295 // (angle / 180) * Math.PI;
    }

    rad2deg(angle) {
        return angle * 57.29577951308232 // angle / Math.PI * 180
    }
}
