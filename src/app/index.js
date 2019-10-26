import React, { Component } from 'react';
import { View, Animated } from 'react-native';

import Body from './components/Body';
import Joystick from './components/Joystick';
import styles from './styles';


type Props = {};
class App extends Component<Props> {
  handleMove = (...args) => this.body.handleMove(...args);

  render() {
    return (
      <View style={styles.container}>
        <Body ref={body => (this.body = body)} />
        <Joystick onMove={this.handleMove} />
      </View>
    );
  }
}

export default App;
