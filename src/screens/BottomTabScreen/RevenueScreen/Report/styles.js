import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import Colors from '../../../../constants/Colors';
let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    width: ScreenWidth,
    height: ScreenHeight,
  },

  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },

  cashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  amountType: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    marginHorizontal: 10,
  },

  cashoutButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 15,
  },

  cashoutText: {
    color: 'white',
    fontSize: 20,
  },
});
