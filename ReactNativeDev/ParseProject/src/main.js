import React, { Component } from 'react';
import {
  StyleSheet,
  Navigator
} from 'react-native';

var Parse = require('parse/react-native');
var Signin = require('./components/authentication/signin');
var Signup = require('./components/authentication/signup');
var Home = require('./components/home/home');

var ROUTES = {
  signin: Signin,
  signup: Signup,
  home: Home,
};

module.exports = React.createClass({
componentWillMount(){
  Parse.initialize("pPc2SryaAvAy4699e3hPJaxpsLZzm6MOAMkQOOpb","keYdKO9X9ny2C7j87W4796G1BJrowYrc9CqJvTI1");
},

renderScene(route, navigator){
  var Component = ROUTES[route.name];
  return <Component route={route} navigator={navigator}/>;
},
  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: 'signin'}}
        renderScene={this.renderScene}
        configureScene={() => {return Navigator.SceneConfigs.FloatFromRight;}}

      />
  );
},

});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33CAFF',
  },
});
