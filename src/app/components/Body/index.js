import React, { Component } from 'react';
import { Animated } from 'react-native';

const Props = {};
class Body extends Component<Props> {
  state = { boxPosition: new Animated.ValueXY(0, 0) };

  handleMove = fingerPosition => {
    const { boxPosition } = this.state;
    boxPosition.x.setValue(boxPosition.x._value + fingerPosition.x._value / 15);
    boxPosition.y.setValue(boxPosition.y._value + fingerPosition.y._value / 15);
  };

  render() {
    const { boxPosition } = this.state;
    return (
      <Animated.View
        style={{
          backgroundColor: 'black',
          width: 20,
          height: 20,
          position: 'absolute',
          top: '50%',
          transform: boxPosition.getTranslateTransform()
        }}
      />
    );
  }
}

export default Body;
