import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Text, Divider } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { startCase } from 'lodash';
import Colors from '../../../constants/Colors';

function index({ data, navigation, navigationUrl }) {
  return (
    <View>
      {data.length != 0 ? (
        data.map((item, index) => {
          return (
            <View key={index}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(navigationUrl, {
                    id: item.id,
                  })
                }>
                <View style={styles.mainContent}>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ paddingRight: 18 }}>
                      <Text style={{ fontSize: 16 }}>#{item.id}</Text>
                    </View>
                    <View style={{ flexDirection: 'column', marginRight: 10 }}>
                      <Text style={styles.title}>
                        {'Inventory Status'}{' '}

                      </Text>
                      <Text style={styles.title}>
                        {'Inventory Packing Status'}{' '}

                      </Text>
                      {/* <Text style={styles.subTitle}>
                      {item.shipping_address.address1}
                      {item.shipping_address.city},
                      {item.shipping_address.country}
                      {item.shipping_address.postcode}
                    </Text> */}
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                      <Text style={(item.inventory_status == 'pending') ? styles.orangeTxt : styles.greenTxt}>

                        {startCase(item.inventory_status)}

                      </Text>
                      <Text style={(item.inventory_packing_status == 'pending') ? styles.orangeTxt : styles.greenTxt}>

                        {startCase(item.inventory_packing_status)}
                      </Text>

                    </View>
                  </View>
                  <View style={styles.iconStyle}>
                    <Ionicons
                      name="arrow-forward-outline"
                      size={23}
                      color={'#FFFFFF'}
                    />
                  </View>
                </View>
              </TouchableOpacity>
              <Divider style={{ backgroundColor: Colors.secondary, height: 5 }} />
            </View>
          );
        })
      ) : (
        <View style={styles.notFount}>
          <Image
            source={require('../../../assets/img/empty-box.png')}
            style={styles.image}
          />
          <Text style={{ marginHorizontal: 10, fontWeight: 'bold' }}>
            No data found.
          </Text>
        </View>
      )}
    </View>
  );
}

export default index;
