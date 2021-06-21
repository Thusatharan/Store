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

  mainContainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
  },

  headStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  headLabel: {
    flexDirection: 'column'
  },

  headTextStyle: {
    fontSize: 14,
  },
  tableContainer: {
    width: '90%',
    marginHorizontal: 20,
    borderColor: 'green',
    borderWidth: 1,
    padding: 5,
  },
  tableHeadContainer: {
    flexDirection: 'row',
    width: '100%',
    borderBottomColor: 'green',
    borderBottomWidth: 1,
    padding: 10,
  },

  headText1: {
    flex: 3,
    fontSize: 16,
    fontWeight: 'bold',
  },

  headText2: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',

  },

  headText3: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },

  tableBodyContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    width: '100%',
    padding: 10,
  },

  bodyText1: {
    flex: 3,
    paddingRight: 10,

  },

  bodyText2: {
    flex: 1,
    borderColor: 'green',
    borderWidth: 1,
    alignItems: 'center',
    textAlign: 'center',
    marginHorizontal:10,
  },

  bodyText3: {
    flex: 1,
    borderColor: 'green',
    borderWidth: 1,
    alignItems: 'center',
    textAlign: 'center',
    marginHorizontal:10,
  },

  buttonContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:40,
  },

  declineButon:{
    paddingHorizontal:20,
    paddingVertical:10,
    marginVertical:10,
    backgroundColor:'red',
    borderRadius:5,
  },

  acceptButon:{
    paddingHorizontal:20,
    paddingVertical:10,
    marginVertical:10,
    backgroundColor:'green',
    borderRadius:5,


  }

});
