import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;
import Color from '../../../constants/Colors';

export default StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    width: ScreenWidth,
    height: ScreenHeight,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  logo: {
    height: 150,
    width: 150,
  },
  formContent: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  signInBtn: {
    marginVertical: 5,
    width: ScreenWidth - 50,
    backgroundColor: '#7F7F7F',
  },
  textInput: {
    height: 40,
    marginVertical: 5,
    backgroundColor: '#ececec',
  },
  footer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
