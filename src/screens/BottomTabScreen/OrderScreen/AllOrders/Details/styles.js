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

  mainContainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
  },
});
