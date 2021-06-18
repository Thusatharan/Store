import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  mainContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 20,
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
  },
  subTitle: {
    fontSize: 12,
  },
  iconStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ececec',
    borderRadius: 50,
    height: 25,
  },
  notFount: {
    marginHorizontal: ScreenWidth / 3,
    marginVertical: ScreenHeight / 4,
  },
  image: {
    height: 100,
    width: 100,
  },
  greenTxt: {
    color: 'green',
    fontWeight:'bold'

  },
  orangeTxt: {
    color: 'orange',
    fontWeight:'bold'
  }
});
