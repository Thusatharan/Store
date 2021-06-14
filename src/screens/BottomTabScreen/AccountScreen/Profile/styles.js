import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;
import Colors from '../../../../constants/Colors';

export default StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    width: ScreenWidth,
    height: ScreenHeight,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  card: {
    flexDirection: 'row',
  },
  avatar: {
    backgroundColor: Colors.primary,
  },
  signOutBtn: {
    backgroundColor: Colors.primary,
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
