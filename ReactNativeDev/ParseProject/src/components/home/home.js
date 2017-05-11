import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';

var Parse = require('parse/react-native');

module.exports = React.createClass({
  getInitialState(){
    return{
      user: ''
    };
  },

componentWillMount(){
  Parse.User.currentAsync()
  .then((user) => {this.setState({user: user});})
},

  render(){
    if(!this.state.user){
      return <Text>Loading...</Text>;
    }

    var username = this.state.user.get('username');
    return(
      <View style={styles.container}>
        <Text>Welcome Back, {username}!</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
},

});
