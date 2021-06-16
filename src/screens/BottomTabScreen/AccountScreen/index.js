import React from 'react';
import {useSelector} from 'react-redux';
import {View, SafeAreaView, TouchableOpacity} from 'react-native';
import {Text, Button, Divider} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import VersionNumber from 'react-native-version-number';

import styles from './styles';
import Colors from '../../../constants/Colors';
import {
  isAuthorized as authorizedSelector,
  user as userSelector,
} from '../../../selectors/auth';

function index({navigation}) {
  const isAuthorized = useSelector(authorizedSelector);
  const user = useSelector(userSelector);
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.content}>
        <View>
          <View style={styles.headerContent}>
            <View style={styles.headerTitle}>
              {isAuthorized ? (
                <View style={{marginLeft: 20}}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}>
                    {user.name}
                  </Text>
                  <Text style={{fontSize: 14}}>{user.email}</Text>
                </View>
              ) : (
                <Button
                  buttonStyle={styles.signInBtn}
                  title="Sign in"
                  onPress={() => navigation.navigate('Login')}
                />
              )}
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={styles.mainContent}
              onPress={
                isAuthorized ? () => navigation.navigate('Profile') : null
              }>
              <Text style={styles.title}>My Account</Text>
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
              onPress={
                isAuthorized ? () => navigation.navigate('Orders') : null
              }>
              <View style={styles.mainContent}>
                <Text style={styles.title}>Orders</Text>
                <View style={styles.iconStyle}>
                  <Ionicons
                    name="arrow-forward-outline"
                    size={23}
                    color={'#FFFFFF'}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <Divider style={{backgroundColor: Colors.secondary, height: 5}} />
            <TouchableOpacity
              onPress={
                isAuthorized ? () => navigation.navigate('Inventory') : null
              }>
              <View style={styles.mainContent}>
                <Text style={styles.title}>Inventory</Text>
                <View style={styles.iconStyle}>
                  <Ionicons
                    name="arrow-forward-outline"
                    size={23}
                    color={'#FFFFFF'}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <Divider style={{backgroundColor: Colors.secondary, height: 5}} />
            <TouchableOpacity
              onPress={
                isAuthorized ? () => navigation.navigate('Revenue') : null
              }>
              <View style={styles.mainContent}>
                <Text style={styles.title}>Revenue</Text>
                <View style={styles.iconStyle}>
                  <Ionicons
                    name="arrow-forward-outline"
                    size={23}
                    color={'#FFFFFF'}
                  />
                </View>
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
