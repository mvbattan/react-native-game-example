import { StyleSheet } from 'react-native';

const FINGER_SIZE = 25;

const styles = StyleSheet.create({
  pad: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionRadius: {
    height: FINGER_SIZE * 6,
    width: FINGER_SIZE * 6,
    borderRadius: FINGER_SIZE * 3,
    backgroundColor: 'rgba(100,100,100,0.1)'
  },
  finger: {
    height: FINGER_SIZE,
    width: FINGER_SIZE,
    backgroundColor: 'lightgray',
    borderRadius: FINGER_SIZE / 2,
    position: 'absolute'
  }
});

export default styles;
