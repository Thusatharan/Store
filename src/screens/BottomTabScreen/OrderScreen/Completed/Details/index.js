import React from 'react';
import {View, SafeAreaView, ActivityIndicator, ScrollView} from 'react-native';

import styles from './styles';
import Colors from '../../../../../constants/Colors';
import Header from '../../../../../components/shared/Header';
import Detail from '../../../../../components/shared/OrderDetails';
import {useLoadItem} from './hooks';

function index({route, navigation}) {
  const {isLoading, response, onLoadItem} = useLoadItem(route.params.id);
  const item = React.useMemo(() => {
    return response?.data?.items.map((doc) => ({
      name: doc?.name,
      quantity: doc?.qty,
      picked: doc?.sku,
    }));
  }, [response?.data]);

  if (!response?.data) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View>
        <Header
          navigation={navigation}
          title="#10029"
          placement="center"
          isBack={true}
        />
      </View>
      {isLoading ? (
        <ActivityIndicator size="large" color={Colors.primary} />
      ) : (
        <ScrollView style={styles.mainContainer}>
          <Detail items={item} />
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

export default index;
