import React from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {Text} from 'react-native-elements';

import styles from './styles';

import Colors from '../../../../constants/Colors';
import Header from '../../../../components/shared/Header';
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

            {item.length != 0 ? (
              item.map((doc, index) => {
                return (
                  <View key={index} style={styles.tableBodyContainer}>
                    <Text style={styles.bodyText1}>{doc.name}</Text>
                    <Text style={styles.bodyText2}>{doc.quantity}</Text>
                    <Text style={styles.bodyText3}>{doc.picked}</Text>
                  </View>
                );
              })
            ) : (
              <Test>No data found</Test>
            )}
          </View>
        </ScrollView>
      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.declineButon}>
          <View>
            <Text style={{color: 'white'}}>Decline</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.acceptButon}>
          <View>
            <Text style={{color: 'white'}}>Accept</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default index;
