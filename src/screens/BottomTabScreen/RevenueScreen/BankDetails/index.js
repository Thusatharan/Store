import React from 'react';
import { View, SafeAreaView, TouchableOpacity } from 'react-native';
import { Text, Button, Divider } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import VersionNumber from 'react-native-version-number';

import styles from './styles2';
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
              title="BankDetails"
              placement="center"
              isBack={true}
            />
          </View>
          <View style={styles.txtcon}>
            <View style={styles.txtrow}>
              <Text style={styles.txt}>
                Store Name:
              </Text>
              <Text style={styles.txt}>
                Valampuri Cash & Carry
              </Text>
            </View>
            <View style={styles.txtrow}>
              <Text style={styles.txt}>
                Store Number:
              </Text>
              <Text style={styles.txt}>
                001
              </Text>
            </View>
            <View style={styles.txtrow}>
              <Text style={styles.txt}>
                Email Id:
              </Text>
              <Text style={styles.txt}>
                Store@gmail.com
              </Text>
            </View>
            <View style={styles.txtrow}>
              <Text style={styles.txt}>
                Bank Name:
              </Text>
              <Text style={styles.txt}>
                Commercial
              </Text>
            </View>
            <View style={styles.txtrow}>
              <Text style={styles.txt}>
                Account Number:
              </Text>
              <Text style={styles.txt}>
                562148696
              </Text>
            </View>
            <View style={styles.txtrow}>
              <Text style={styles.txt}>
                Store Code:
              </Text>
              <Text style={styles.txt}>
                64842
              </Text>
            </View>
          </View>
          <View style={styles.txtrow2}>
              <Text style={styles.txt2}>
                Edit
              </Text>

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
