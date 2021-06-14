import React from 'react';
import {View, SafeAreaView} from 'react-native';
import Header from '../../../../components/shared/Header';

import styles from './styles';

function index({navigation}) {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View>
        <Header
          navigation={navigation}
          title="All Inventory"
          placement="center"
          isBack={true}
        />
      </View>
    </SafeAreaView>
  );
}

export default index;
