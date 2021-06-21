import React from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Text, Button, Divider} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import VersionNumber from 'react-native-version-number';

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
          <View style={styles.MainCon}>
            <View style={styles.BorderCon}>
              <View style={styles.SubCon2}>
                <Text style={styles.TextStyl}>Collection Date :</Text>
                <Text style={styles.TextStyl}>04/06/2021</Text>
              </View>
              <View style={styles.SubCon2}>
                <Text style={styles.TextStyl}>Time :</Text>
                <Text style={styles.TextStyl}>15:00</Text>
              </View>
            </View>
            <View style={styles.BorderCon2}>
              <View style={styles.SubCon3}>
                <Text style={styles.TextStyl}>Discription</Text>
                <View style={styles.SubCol}>
                  <Text style={styles.TextStyl}>Ordered</Text>
                  <Text style={styles.TextStyl}> </Text>
                  <Text style={styles.TextStyl}>Picked</Text>
                </View>
              </View>
              {item.length != 0 ? (
                item.map((doc) => {
                  return (
                    <View style={styles.SubCon4}>
                      <Text style={styles.TextStyl}>{doc.name}</Text>
                      <View style={styles.SubCol}>
                        <View style={styles.SmallCon}>
                          <Text style={styles.TextStyl2}>{doc.quantity}</Text>
                        </View>
                      </View>
                      <View style={styles.SmallCon}>
                        <Text style={styles.TextStyl2}>{doc.picked}</Text>
                      </View>
                      <Text style={styles.TextStyl2}></Text>
                    </View>
                  );
                })
              ) : (
                <Test>No data found</Test>
              )}
            </View>
            <Text style={styles.NewTxt}>Ready For Collection</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

export default index;
