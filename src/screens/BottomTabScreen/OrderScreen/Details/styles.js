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
  MainCon: {
    flex: 1,
    flexDirection: 'column',
  },

  BorderCon: {
    height: 90,
    width: '96%',
    borderWidth: 2,
    borderColor: 'green',
    margin: 10,
    borderRadius: 8,
  },
  BorderCon2: {
    height: 370,
    width: '96%',
    borderWidth: 2,
    borderColor: 'green',
    margin: 10,
    borderRadius: 8,
  },

  SubCon2: {
    flexDirection: 'row',
  },
  SubCon3: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 5,
  },
  SubCon4: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 8,
  },

  TextStyl: {
    fontSize: 20,
    marginTop: 8,
    marginLeft: 8,
  },
  TextStyl2: {
    fontSize: 20,
    marginLeft: 6,
  },
  SubCol: {
    flexDirection: 'row',
    marginRight: 20,
  },
  SmallCon: {
    marginTop: 5,
    borderColor: 'green',
    borderWidth: 2,
    height: 30,
    width: 30,
  },
  NewTxt: {
    fontSize: 20,
    alignSelf: 'flex-end',
    backgroundColor: 'lightgreen',
    borderRadius: 5,
    marginRight: 8,
    color: 'white',
    paddingVertical:10,
    paddingHorizontal:20,
  },
});
