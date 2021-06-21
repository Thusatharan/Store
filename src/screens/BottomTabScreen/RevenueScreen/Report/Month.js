import React from 'react';
import {View, TouchableOpacity, ActivityIndicator} from 'react-native';
import {Text} from 'react-native-elements';
import {sumBy} from 'lodash';

import {useFetch} from '../../../../hooks/axios';
import Colors from '../../../../constants/Colors';
import styles from './styles';

export default function Month() {
  const {response, isLoading} = useFetch({
    url: '/store/api/report/trips/monthly?token=true&year=2020&month=9',
  });

  const item = React.useMemo(() => {
    return {
      base_total: sumBy(response, function (element) {
        return parseFloat(element.base_total);
      }),
      total_trips: sumBy(response, function (element) {
        return element.total_trips;
      }),
    };
  }, [response]);

  if (!response) {
    return null;
  }

  return (
    <>
      {isLoading ? (
        <ActivityIndicator size="large" color={Colors.primary} />
      ) : (
        <>
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
        </>
      )}
    </>
  );
}
