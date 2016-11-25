var ReactNative = require('react-native');
var {
    StyleSheet,
} = ReactNative;

export default StyleSheet.create({
    map: {
        flexGrow: 1,
        flexBasis: 1,
        flexShrink:1,
        marginTop: 20,
        marginBottom: 50
    },
    menu: {
        height: 50,
        bottom: 0,
        flexDirection:'row',

    },
    highlight: {
        color: 'red',
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: '#ccc',
        padding: 20,
        width: 100,
        flex: 1,
        alignItems: 'center',
        // flexDirection:'row',
        justifyContent: 'center',
        flexDirection:'row',
    },
    text:{
        fontWeight: 'bold',

    },

    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});