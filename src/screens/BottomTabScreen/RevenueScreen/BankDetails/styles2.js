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
  headerContent: {
    height: 200,
    width: heightWidth,
    backgroundColor: '#ececec',
  },
  headerTitle: {
    flex: 1,
    justifyContent: 'center',
  },
  signInBtn: {
    backgroundColor: '#7F7F7F',
    width: ScreenWidth - 100,
    marginHorizontal: 50,
  },
  mainContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 20,
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

  txtcon: {
    padding: 15
  },
  txtrow: {
    flexDirection: 'row',
  },
  txt: {
    fontSize: 20
  },
  txt2: {
    fontSize: 20,
    paddingLeft:5
  },
  txtrow2: {
    marginRight:10,
    backgroundColor: 'lightgreen',
    alignSelf: 'flex-end',
    width: 50,
  }
});
