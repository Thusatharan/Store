import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
let ScreenWidth = Dimensions.get('window').width;
let heightWidth = Dimensions.get('window').height;

export default StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    width: ScreenWidth,
    height: heightWidth,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  signInBtn: {
    backgroundColor: '#7F7F7F',
  },
  center: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logo: {
    height: 100,
    width: 100,
  },
  title: {},
  footer: {
    height: 80,
    width: ScreenWidth,
  },
});
