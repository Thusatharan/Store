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
    url: 'store/api/shipments?token=true',
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
      inventory_status: doc.driver_status,
      inventory_packing_status: doc.driver_delivery_status,
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
          title="All Orders"
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
              navigationUrl="All Order Detail"
            />
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
}

export default index;
