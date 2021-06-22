import React from 'react';
import {
  View,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
} from 'react-native';

import ListItem from '../../../../components/shared/List';
import Header from '../../../../components/shared/Header';
import styles from './styles';
import Colors from '../../../../constants/Colors';
import {useFetch} from '../../../../hooks/axios';
import {wait} from '../../../../lib/healper';

function index({navigation}) {
  const [refreshing, setRefreshing] = React.useState(false);
  const {response, isLoading} = useFetch({
    url: '/store/api/packing-orders?token=true',
  });

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const items = React.useMemo(() => {
    return response?.data.map((doc) => ({
      id: doc.id,
      status: doc.status,
      total_qty: doc.total_qty,
      inventory_status: doc.inventory_status,
      inventory_packing_status: doc.inventory_packing_status,
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
          title="Processing"
          placement="left"
          isBack={true}
        />
        {isLoading ? (
          <ActivityIndicator size="large" color={Colors.primary} />
        ) : (
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            <ListItem
              data={items}
              navigation={navigation}
              navigationUrl="Processing Detail"
            />
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
}

export default index;
