import React from 'react';
import {View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Header, Text} from 'react-native-elements';
import Color from '../../../constants/Colors';
import styles from './style';

function index({title, onClickNext, onClickPrev}) {
  return (
    <Header
      leftComponent={
        <View style={styles.btn}>
          <Ionicons
            onPress={() => onClickPrev()}
            name="arrow-back-outline"
            size={23}
            color={Color.secondary}
          />
        </View>
      }
      backgroundColor={Color.secondary}
      placement="center"
      centerComponent={{
        text: () => (
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#494949', fontWeight: 'bold', fontSize: 16}}>
              {title}
            </Text>
          </View>
        ),
      }}
      rightComponent={
        <View style={styles.btn}>
          <Ionicons
            onPress={() => onClickNext()}
            name="arrow-forward-outline"
            size={23}
            color={Color.secondary}
          />
        </View>
      }
    />
  );
}

export default index;
