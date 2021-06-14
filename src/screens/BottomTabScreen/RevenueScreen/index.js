import React from 'react';
import {useSelector} from 'react-redux';
import {View, SafeAreaView, TouchableOpacity} from 'react-native';
import {Text, Button, Divider} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import VersionNumber from 'react-native-version-number';

import styles from './styles';
import Colors from '../../../constants/Colors';
import Header from '../../../components/shared/Header';
import {isAuthorized as authorizedSelector} from '../../../selectors/auth';

function index({navigation}) {
  const isAuthorized = useSelector(authorizedSelector);
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.content}>
        <View>
          <View>
            <Header
              navigation={navigation}
              title="Revenue"
              placement="center"
              isBack={false}
            />
          </View>
          <View>
            <TouchableOpacity
              style={styles.mainContent}
              onPress={isAuthorized ? null : null}>
              <Text style={styles.title}>Current Weeks's Takings</Text>
              <View style={styles.iconStyle}>
                <Ionicons
                  name="arrow-forward-outline"
                  size={23}
                  color={'#FFFFFF'}
                />
              </View>
            </TouchableOpacity>
            <Divider style={{backgroundColor: Colors.secondary, height: 5}} />
            <TouchableOpacity
              style={styles.mainContent}
              onPress={isAuthorized ? null : null}>
              <Text style={styles.title}>Bank Details</Text>
              <View style={styles.iconStyle}>
                <Ionicons
                  name="arrow-forward-outline"
                  size={23}
                  color={'#FFFFFF'}
                />
              </View>
            </TouchableOpacity>
            <Divider style={{backgroundColor: Colors.secondary, height: 5}} />
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={{color: '#7F7F7F'}}>
            ©Grocere Limited {`${new Date().getFullYear()}`}
          </Text>
          <Text style={{color: '#7F7F7F'}}>
            {VersionNumber.appVersion}.{VersionNumber.buildVersion}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default index;
