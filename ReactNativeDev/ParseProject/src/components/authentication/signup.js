import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';

var Parse = require('parse/react-native');
var Button = require('../common/button');

module.exports = React.createClass({
getInitialState(){
  return{
    username: '',
    password: '',
    passwordConfirmation: '',
    errorMessage: ''
  };
},

render(){
  return(
    <View style={styles.container}>
    <Text>Sign Up</Text>
    <Text style={styles.label}>Username:</Text>
    <TextInput value={this.state.username}
    onChangeText={(text) => this.setState({username: text})}
    style={styles.input}/>

    <Text style={styles.label}>Password:</Text>
    <TextInput value={this.state.password} secureTextEntry={true}
    onChangeText={(text) => this.setState({password: text})}
    style={styles.input}/>

    <Text style={styles.label}>Confirm Password:</Text>
    <TextInput value={this.state.passwordConfirmation} secureTextEntry={true}
    onChangeText={(text) => this.setState({passwordConfirmation: text})}
    style={styles.input}/>

    <Text style={styles.label}>{this.state.errorMessage}</Text>
    <Button text={'Sign Up'} onPress={this.onSignupPress} />
    <Button text={'I have an account'} onPress={this.onSigninPress} />
    </View>
  );
},
onSigninPress(){
  this.props.navigator.pop();
},
onSignupPress(){
  if(this.state.password != this.state.passwordConfirmation){
    return this.setState({errorMessage: 'Your passwords do not match'});
  }
  var user = new Parse.User();
  user.set('username',this.state.username);
  user.set('password',this.state.password);
  user.signUp(null, {
    success: (user) => {this.props.navigator.immediatelyResetRouteStack([{name: 'home'}]);},
    error: (user, error) => {this.setState({errorMessage: error.message})}
  });
},

});

var styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},
label: {
  fontSize: 18
},
input: {
  padding: 4,
  height: 40,
  borderColor: 'gray',
  borderWidth: 1,
  borderRadius: 5,
  margin: 5,
  width: 200,
  alignSelf: 'center',
  backgroundColor: '#EFF5F7',
}
});
