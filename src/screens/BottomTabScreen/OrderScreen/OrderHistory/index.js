import React from 'react';
import { View, SafeAreaView, TouchableOpacity } from 'react-native';
import { Text, Button, Divider } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import VersionNumber from 'react-native-version-number';

import styles from './styles';
import Colors from '../../../../constants/Colors';
import Header from '../../../../components/shared/Header';

function index({ navigation }) {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.content}>
        <View>
          <View>
            <Header
              navigation={navigation}
              title="Order History"
              placement="center"
              isBack={true}
            />
          </View>
          <View>
            <TouchableOpacity style={styles.mainContent} onPress={() => navigation.navigate('OrdersContent')}>
              <View style={styles.mainContent1}>
                <Text style={styles.title}>1.</Text>
                <Text style={styles.title}>#</Text>
                <Text style={styles.title}>10029</Text>
              </View>
              <View style={styles.iconStyle}>
                <Ionicons
                  name="arrow-forward-outline"
                  size={23}
                  color={'#FFFFFF'}
                />
              </View>
            </TouchableOpacity>
            <Divider style={{ backgroundColor: Colors.secondary, height: 5 }} />
            <TouchableOpacity style={styles.mainContent}>
              <View style={styles.mainContent1}>
                <Text style={styles.title}>2.</Text>
                <Text style={styles.title}>#</Text>
                <Text style={styles.title}>10030</Text>
              </View>
              <View style={styles.iconStyle}>
                <Ionicons
                  name="arrow-forward-outline"
                  size={23}
                  color={'#FFFFFF'}
                />
              </View>
            </TouchableOpacity>
            <Divider style={{ backgroundColor: Colors.secondary, height: 5 }} />
            <TouchableOpacity style={styles.mainContent}>
              <View style={styles.mainContent1}>
                <Text style={styles.title}>3.</Text>
                <Text style={styles.title}>#</Text>
                <Text style={styles.title}>10031</Text>
              </View>
              <View style={styles.iconStyle}>
                <Ionicons
                  name="arrow-forward-outline"
                  size={23}
                  color={'#FFFFFF'}
                />
              </View>
            </TouchableOpacity>
            <Divider style={{ backgroundColor: Colors.secondary, height: 5 }} />
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={{ color: '#7F7F7F' }}>
            ©Grocere Limited {`${new Date().getFullYear()}`}
          </Text>
          <Text style={{ color: '#7F7F7F' }}>
            {VersionNumber.appVersion}.{VersionNumber.buildVersion}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default index;
