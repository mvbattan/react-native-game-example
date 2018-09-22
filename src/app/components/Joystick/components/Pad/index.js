import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './styles';

const Props = {};

class Pad extends Component<Props> {
  render() {
    return <View style={styles.pad} />;
  }
}

export default Pad;
