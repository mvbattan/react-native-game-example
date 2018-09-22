import React, { Component } from 'react';
import { View } from 'react-native';

import Joystick from './components/Joystick';
import styles from './styles';


type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Joystick />
      </View>
    );
  }
}

export default App;
