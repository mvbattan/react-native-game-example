import { StyleSheet } from 'react-native';

const FINGER_SIZE = 25;

const styles = StyleSheet.create({
  pad: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionRadius: {
    height: FINGER_SIZE * 6,
    width: FINGER_SIZE * 6,
    borderRadius: FINGER_SIZE * 3,
    backgroundColor: 'red'
  },
  finger: {
    height: FINGER_SIZE,
    width: FINGER_SIZE,
    backgroundColor: 'white',
    borderRadius: FINGER_SIZE / 2,
    position: 'absolute'
  }
});

export default styles;
