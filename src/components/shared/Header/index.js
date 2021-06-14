import React from 'react';
import {View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Header, text} from 'react-native-elements';
import Color from '../../../constants/Colors';

function index({placement, navigation, title, isBack}) {
  return (
    <Header
      backgroundColor={Color.secondary}
      placement={placement}
      centerComponent={{
        text: title,
        style: {color: '#494949', fontWeight: 'bold', fontSize: 16},
      }}
      rightComponent={
        isBack
          ? () => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 50,
                  height: 40,
                  width: 40,
                }}>
                <Ionicons
                  onPress={() => navigation.goBack()}
                  name="arrow-back-outline"
                  size={23}
                  color={Color.secondary}
                />
              </View>
            )
          : null
      }
    />
  );
}

export default index;
