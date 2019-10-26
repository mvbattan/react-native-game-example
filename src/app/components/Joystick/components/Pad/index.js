import React, { Component } from 'react';
import { View, Animated, PanResponder } from 'react-native';

import styles from './styles';

const Props = {};

class Pad extends Component<Props> {
  state = { fingerPosition: new Animated.ValueXY(0, 0) };

  animationFrame = null;

  panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (e, gE) => {
      const { fingerPosition } = this.state;
      const mockEvt = { dx: Math.min(Math.max(gE.dx, -50), 50), dy: Math.min(Math.max(gE.dy, -50), 50) };
      this.runAnimatedFrame();
      Animated.event(
        [
          {
            dx: fingerPosition.x,
            dy: fingerPosition.y
          }
        ],
        { useNativeEventDriver: true }
      )(mockEvt);
    },
    onPanResponderTerminationRequest: () => true,
    onPanResponderRelease: () => {
      const { fingerPosition } = this.state;
      Animated.timing(fingerPosition.x, { toValue: 0, duration: 200 }).start();
      Animated.timing(fingerPosition.y, { toValue: 0, duration: 200 }).start();
      cancelAnimationFrame(this.animationFrame);
    },
    onPanResponderTerminate: () => {
      const { fingerPosition } = this.state;
      Animated.timing(fingerPosition.x, { toValue: 0, duration: 200 }).start();
      Animated.timing(fingerPosition.y, { toValue: 0, duration: 200 }).start();
      cancelAnimationFrame(this.animationFrame);
    }
  });

  componentWillUnmount() {
    cancelAnimationFrame(this.animationFrame);
  }

  runAnimatedFrame = () => {
    if (this.animationFrame) cancelAnimationFrame(this.animationFrame);
    this.animationFrame = requestAnimationFrame(() => {
      const { fingerPosition } = this.state;
      this.props.onMove(fingerPosition);
      this.runAnimatedFrame();
    });
  };

  render() {
    const { fingerPosition } = this.state;
    return (
      <View style={styles.pad}>
        <View style={styles.actionRadius} />
        <Animated.View
          {...this.panResponder.panHandlers}
          style={[styles.finger, { transform: fingerPosition.getTranslateTransform() }]}
        />
      </View>
    );
  }
}

export default Pad;
