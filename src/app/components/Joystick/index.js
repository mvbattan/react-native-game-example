import React, { Component } from 'react';
import { View } from 'react-native';

import Pad from './components/Pad';
import Buttons from './components/Buttons';
import styles from './styles';

const Props = {};

class Joystick extends Component<Props> {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <Pad onMove={this.props.onMove} />
        <Buttons />
      </View>
    );
  }
}

export default Joystick;
