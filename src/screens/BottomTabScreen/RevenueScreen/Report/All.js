import React from 'react';
import {View, TouchableOpacity, ActivityIndicator} from 'react-native';
import {Text} from 'react-native-elements';
import {sumBy} from 'lodash';

import Colors from '../../../../constants/Colors';
import styles from './styles';
import {useFetch} from '../../../../hooks/axios';

export default function All() {
  const {response, isLoading} = useFetch({
    url: '/store/api/report/trips?token=true',
  });

  const item = React.useMemo(() => {
    return {
      base_total: sumBy(response?.data, function (element) {
        return parseFloat(element.base_total);
      }),
      total_trips: sumBy(response?.data, function (element) {
        return element.total_trips;
      }),
    };
  }, [response?.data]);

  if (!response?.data) {
    return null;
  }

  return (
    <>
      {isLoading ? (
        <ActivityIndicator size="large" color={Colors.primary} />
      ) : (
        <View style={styles.cashContainer}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.amountType}> Amount:</Text>
            <Text style={styles.amount}>{item.base_total}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.amountType}> Trip Count:</Text>
            <Text style={styles.amount}>
              {item.total_trips} {'   '}
            </Text>
          </View>

          <TouchableOpacity>
            <View style={styles.cashoutButton}>
              <Text style={styles.cashoutText}>Cash Out</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}
