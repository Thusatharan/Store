import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import styles from './styles';

function index({items}) {
  return (
    <>
      <View style={styles.headStyle}>
        <View style={styles.headLabel}>
          <Text style={styles.headTextStyle}>Collection Date</Text>
          <Text style={styles.headTextStyle}>Collection Time</Text>
        </View>
        <View style={styles.headResult}>
          <Text style={styles.heaTextStyle}>Collectiagaon Date</Text>
          <Text style={styles.heaTextStyle}>Coaion Time</Text>
        </View>
      </View>

      <View style={styles.tableContainer}>
        <View style={styles.tableHeadContainer}>
          <Text style={styles.headText1}>Description</Text>
          <Text style={styles.headText2}>Quantity</Text>
          <Text style={styles.headText3}>Picked</Text>
        </View>

        {items.length != 0 ? (
          items.map((item, index) => {
            return (
              <View key={index} style={styles.tableBodyContainer}>
                <Text style={styles.bodyText1}>{item.name}</Text>
                <Text style={styles.bodyText2}>{item.quantity}</Text>
                <Text style={styles.bodyText3}>{item.picked}</Text>
              </View>
            );
          })
        ) : (
          <Test>No data found</Test>
        )}
      </View>
    </>
  );
}

export default index;
