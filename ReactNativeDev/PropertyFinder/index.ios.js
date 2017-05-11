'use strict';

import NavigationBar from 'react-native-navbar'
import dismissKeyboard from 'react-native-dismiss-keyboard';
import React, {Component} from 'react';
import {
    AppRegistry,
    ListView,
    Text,
    View,
    Navigator,
    StatusBar,
    TextInput,
    TouchableHighlight,
    StyleSheet,
    ActivityIndicator,
    NavigatorIOS
} from 'react-native'

var SearchPage = require('./SearchPage');

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

class PropertyFinderApp extends Component {
    render() {
        return (<NavigatorIOS style={styles.container} tintColor='#fff' barTintColor='#48BBEC' titleTextColor='#fff' initialRoute={{
            title: 'Property Finder',
            component: SearchPage
        }}/>);
    }
}

AppRegistry.registerComponent('PropertyFinder', function() {
    return PropertyFinderApp
});
