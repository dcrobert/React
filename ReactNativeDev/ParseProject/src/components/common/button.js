import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

module.exports = React.createClass({
render(){
return(

  <TouchableHighlight style={styles.button}
  underlayColor={'gray'}
  onPress={this.props.onPress}
  >
    <Text style={styles.buttonText}>{this.props.text}</Text>
  </TouchableHighlight>

    );
  }
});

var styles = StyleSheet.create({
button: {
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 1,
  borderRadius: 5,
  marginTop: 10,
  borderColor: 'black',
  marginTop: 10,
  backgroundColor: '#EFF5F7'
},
buttonText: {
  flex: 1,
  alignSelf: 'center',
  fontSize: 20,
  padding: 5,
},

});
