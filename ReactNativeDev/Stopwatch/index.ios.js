import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from 'react-native';

var TimerMixin = require('react-timer-mixin');
var formatTime = require('minutes-seconds-milliseconds');

class Stopwatch extends Component {

  constructor(props) {
    super(props);
    this.state = {
        timeElapsed: '',
        running: false,
        startTime: '',
        laps: []
    };
}

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.header]}>
          <View style={[styles.timerWrapper]}>
          <Text style={[styles.timer]}>
            {formatTime(this.state.timeElapsed)}
          </Text>
          </View>

          <View style={[styles.buttonWrapper]}>
            {this.startStopButton()}
            {this.lapButton()}
          </View>
      </View>

          <View style={[styles.footer]}>
              {this.laps()}
          </View>

      </View>
    );
  }

  laps(){
    return this.state.laps.map((time, index) =>{
      return(
        <View style={styles.lap}>
        <Text style={styles.lapText} key={index}>
          Lap {index + 1}
        </Text>
        <Text style={styles.lapText}>
          {formatTime(time)}
        </Text>
      </View>
    )

    }

    )
  }
  startStopButton(){
    var style = this.state.running ? styles.stopButton : styles.startButton

    return(
      <TouchableHighlight
        underlayColor="gray"
        onPress={this.handleStartPress.bind(this)}
        style={[styles.button,style]}>
        <Text>
          {this.state.running ? 'Stop' : 'Start'}
        </Text>
      </TouchableHighlight>
    );
  }

  lapButton(){
    return(
      <TouchableHighlight
        underlayColor="gray"
        onPress={this.handleLapPress.bind(this)}
        style={[styles.button,styles.lapButton]}>
        <Text>
          Lap
        </Text>
      </TouchableHighlight>
    );

  }

handleStartPress() {

    if (this.state.running) {
        clearInterval(this.interval);
        this.setState({running: false});
        return
    }

    this.setState({
        startTime: new Date()
    });

    this.interval = setInterval(() => {
        this.setState({
            timeElapsed: new Date() - this.state.startTime,
            running: true
        });
    }, 30);

}

handleLapPress() {
  var lap = this.state.timeElapsed

    this.setState({
        startTime: new Date(),
        laps: this.state.laps.concat([lap])
    });
}

  border(color){
    return{
      borderColor: color,
      borderWidth: 4
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  header: {
    flex: 1
  },
  footer: {
    flex: 1
  },
  timerWrapper: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'

  },
  buttonWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  timer: {
    fontSize: 60
  },
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    borderColor: '#00CC00'
  },
  lapButton: {
    borderColor: '#00bfff'
  },
  stopButton: {
    borderColor: '#CC0000'
  },
  lap: {
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  lapText: {
    fontSize: 30
  },

});

AppRegistry.registerComponent('Stopwatch', () => Stopwatch);
