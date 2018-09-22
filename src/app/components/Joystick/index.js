import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './styles';

const Props = {};

class Joystick extends Component<Props> {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.pad} />
        <View style={styles.buttons} />
      </View>
    );
  }
}

export default Joystick;
