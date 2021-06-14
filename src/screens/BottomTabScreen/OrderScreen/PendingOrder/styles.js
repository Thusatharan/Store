import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
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

  mainContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 20,
  },
  mainContent1: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  title: {
    fontSize: 16,
    fontWeight: '900',
  },
  iconStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ececec',
    borderRadius: 50,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
