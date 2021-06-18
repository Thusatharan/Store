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
    return {
      id: response?.data.id,
      status: response?.data.status,
      total_qty: response?.data.total_qty,
      driver_status: response?.data.driver_status,
      driver_delivery_status: response?.data.driver_delivery_status,
    };
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

              <View style={styles.SubCon4}>
                <Text style={styles.TextStyl}>Jilda Basmati 10 Kg</Text>
                <View style={styles.SubCol}>
                  <View style={styles.SmallCon}>
                    <Text style={styles.TextStyl2}>1</Text>
                  </View>
                </View>
                <View style={styles.SmallCon}>
                  <Text style={styles.TextStyl2}>1</Text>
                </View>
                <Text style={styles.TextStyl2}></Text>
              </View>

              <View style={styles.SubCon4}>
                <Text style={styles.TextStyl}>Jilda Basmati 10 Kg</Text>
                <View style={styles.SubCol}>
                  <View style={styles.SmallCon}>
                    <Text style={styles.TextStyl2}>1</Text>
                  </View>
                </View>
                <View style={styles.SmallCon}>
                  <Text style={styles.TextStyl2}>1</Text>
                </View>
                <Text style={styles.TextStyl2}></Text>
              </View>
              <View style={styles.SubCon4}>
                <Text style={styles.TextStyl}>Jilda Basmati 10 Kg</Text>
                <View style={styles.SubCol}>
                  <View style={styles.SmallCon}>
                    <Text style={styles.TextStyl2}>1</Text>
                  </View>
                </View>
                <View style={styles.SmallCon}>
                  <Text style={styles.TextStyl2}>1</Text>
                </View>
                <Text style={styles.TextStyl2}></Text>
              </View>

              <View style={styles.SubCon4}>
                <Text style={styles.TextStyl}>Jilda Basmati 10 Kg</Text>
                <View style={styles.SubCol}>
                  <View style={styles.SmallCon}>
                    <Text style={styles.TextStyl2}>1</Text>
                  </View>
                </View>
                <View style={styles.SmallCon}>
                  <Text style={styles.TextStyl2}>1</Text>
                </View>
                <Text style={styles.TextStyl2}></Text>
              </View>
              <View style={styles.SubCon4}>
                <Text style={styles.TextStyl}>Jilda Basmati 10 Kg</Text>
                <View style={styles.SubCol}>
                  <View style={styles.SmallCon}>
                    <Text style={styles.TextStyl2}>1</Text>
                  </View>
                </View>
                <View style={styles.SmallCon}>
                  <Text style={styles.TextStyl2}>1</Text>
                </View>
                <Text style={styles.TextStyl2}></Text>
              </View>
              <View style={styles.SubCon4}>
                <Text style={styles.TextStyl}>Jilda Basmati 10 Kg</Text>
                <View style={styles.SubCol}>
                  <View style={styles.SmallCon}>
                    <Text style={styles.TextStyl2}>1</Text>
                  </View>
                </View>
                <View style={styles.SmallCon}>
                  <Text style={styles.TextStyl2}>1</Text>
                </View>
                <Text style={styles.TextStyl2}></Text>
              </View>
              <View style={styles.SubCon4}>
                <Text style={styles.TextStyl}>Jilda Basmati 10 Kg</Text>
                <View style={styles.SubCol}>
                  <View style={styles.SmallCon}>
                    <Text style={styles.TextStyl2}>1</Text>
                  </View>
                </View>
                <View style={styles.SmallCon}>
                  <Text style={styles.TextStyl2}>1</Text>
                </View>
                <Text style={styles.TextStyl2}></Text>
              </View>
            </View>
            <Text style={styles.NewTxt}>Ready For Collection</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

export default index;
