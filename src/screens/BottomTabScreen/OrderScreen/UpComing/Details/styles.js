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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
  },

  declineButon: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    backgroundColor: 'red',
    borderRadius: 5,
  },

  acceptButon: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    backgroundColor: 'green',
    borderRadius: 5,
  },
  Overlay: {
    width: ScreenWidth - 40,
  },
});
