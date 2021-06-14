import React from 'react';
import { View, SafeAreaView, TouchableOpacity } from 'react-native';
import { Text, Button, Divider } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import VersionNumber from 'react-native-version-number';

import styles1 from './styles';
import styles from './styleContent';

import Colors from '../../../../constants/Colors';
import Header from '../../../../components/shared/Header';

function index({ navigation }) {
  return (
    <SafeAreaView style={styles1.safeAreaView}>
      <View style={styles1.content}>
        <View>
          <View>
            <Header
              navigation={navigation}
              title="#10029"
              placement="center"
              isBack={true}
            />
          </View>
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
                  <Text style={styles.TextStyl}>  </Text>
                  <Text style={styles.TextStyl}>Picked</Text>
                </View>
              </View>

              <View style={styles.SubCon4}>
                <Text style={styles.TextStyl}>Jilda Basmati 10 Kg</Text>
                <View style={styles.SubCol}>
                  <View style={styles.SmallCon}>
                    <Text style={styles.TextStyl2}>1</Text></View></View>
                <View style={styles.SmallCon}>
                  <Text style={styles.TextStyl2}>1</Text></View>
                <Text style={styles.TextStyl2}></Text></View>


              <View style={styles.SubCon4}>
                <Text style={styles.TextStyl}>Jilda Basmati 10 Kg</Text>
                <View style={styles.SubCol}>
                  <View style={styles.SmallCon}>
                    <Text style={styles.TextStyl2}>1</Text></View></View>
                <View style={styles.SmallCon}>
                  <Text style={styles.TextStyl2}>1</Text></View>
                <Text style={styles.TextStyl2}></Text>
              </View>
              <View style={styles.SubCon4}>
                <Text style={styles.TextStyl}>Jilda Basmati 10 Kg</Text>
                <View style={styles.SubCol}>
                  <View style={styles.SmallCon}>
                    <Text style={styles.TextStyl2}>1</Text></View></View>
                <View style={styles.SmallCon}>
                  <Text style={styles.TextStyl2}>1</Text></View>
                <Text style={styles.TextStyl2}></Text>
              </View>

              <View style={styles.SubCon4}>
                <Text style={styles.TextStyl}>Jilda Basmati 10 Kg</Text>
                <View style={styles.SubCol}>
                  <View style={styles.SmallCon}>
                    <Text style={styles.TextStyl2}>1</Text></View></View>
                <View style={styles.SmallCon}>
                  <Text style={styles.TextStyl2}>1</Text></View>
                <Text style={styles.TextStyl2}></Text>
              </View>
              <View style={styles.SubCon4}>
                <Text style={styles.TextStyl}>Jilda Basmati 10 Kg</Text>
                <View style={styles.SubCol}>
                  <View style={styles.SmallCon}>
                    <Text style={styles.TextStyl2}>1</Text></View></View>
                <View style={styles.SmallCon}>
                  <Text style={styles.TextStyl2}>1</Text></View>
                <Text style={styles.TextStyl2}></Text>
              </View>
              <View style={styles.SubCon4}>
                <Text style={styles.TextStyl}>Jilda Basmati 10 Kg</Text>
                <View style={styles.SubCol}>
                  <View style={styles.SmallCon}>
                    <Text style={styles.TextStyl2}>1</Text></View></View>
                <View style={styles.SmallCon}>
                  <Text style={styles.TextStyl2}>1</Text></View>
                <Text style={styles.TextStyl2}></Text>
              </View>
              <View style={styles.SubCon4}>
                <Text style={styles.TextStyl}>Jilda Basmati 10 Kg</Text>
                <View style={styles.SubCol}>
                  <View style={styles.SmallCon}>
                    <Text style={styles.TextStyl2}>1</Text></View></View>
                <View style={styles.SmallCon}>
                  <Text style={styles.TextStyl2}>1</Text></View>
                <Text style={styles.TextStyl2}></Text>
              </View>

            </View>
            <Text style={styles.NewTxt}>Ready For Collection</Text>
          </View>

        </View>

        <View style={styles1.footer}>
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
