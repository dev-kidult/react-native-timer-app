import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Button from "../Button";

function formatTime(time) {
  let minutes = Math.floor(time / 60);
  time -= minutes * 60;
  let seconds = parseInt(time % 60, 10);
  return `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
}

class Timer extends Component {
  componentWillReceiveProps(nextProps) {
    const currentProps = this.props;
    if (!currentProps.isPlaying && nextProps.isPlaying) {
      //start interval
      const timeInterval = setInterval(() => {
        currentProps.addSecond();
      }, 1000);
      this.setState({
        interval: timeInterval
      });
    } else if(currentProps.isPlaying && !nextProps.isPlaying){
      // end interval
      clearInterval(this.state.interval);
    }
  }

  render() {
    const {
      isPlaying,
      elapseTime,
      timeDuration,
      startTimer,
      restartTimer
    } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <View style={styles.upper}>
          <Text style={styles.time}>
            {formatTime(timeDuration - elapseTime)}
          </Text>
        </View>
        <View style={styles.lower}>
          {!isPlaying && (
            <Button iconName={"play-circle"} onPress={startTimer} />
          )}
          {isPlaying && (
            <Button iconName={"stop-circle"} onPress={restartTimer} />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CE0E24"
  },
  upper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  lower: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  time: {
    color: "white",
    fontSize: 120,
    fontWeight: "100"
  }
});

export default Timer;
