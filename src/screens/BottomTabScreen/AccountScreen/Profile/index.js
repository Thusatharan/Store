import React from 'react';
import {useDispatch} from 'react-redux';
import {View, SafeAreaView, ActivityIndicator} from 'react-native';
import {Text, Card, Button, Avatar} from 'react-native-elements';
import Header from '../../../../components/shared/Header';
import {logout} from '../../../../actions/Auth/index';
import {useFetch} from '../../../../hooks/axios';
import Color from '../../../../constants/Colors';

import styles from './styles';

function index({navigation}) {
  const dispatch = useDispatch();
  const onLogout = React.useCallback(() => {
    dispatch(logout());
    navigation.navigate('Account');
  }, [dispatch, navigation]);
  const {response, isLoading} = useFetch({
    url: '/driver/api/customer/get?token=true',
  });

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.content}>
        <View>
          <Header
            navigation={navigation}
            title="My Account"
            placement="center"
            isBack={true}
          />
          {isLoading ? (
            <ActivityIndicator size="large" color={Color.primary} />
          ) : (
            <Card>
              <View style={styles.card}>
                <View>
                  <Avatar
                    size="medium"
                    rounded
                    title={response?.data?.name[0].toUpperCase()}
                    activeOpacity={0.7}
                    containerStyle={styles.avatar}
                  />
                </View>
                <View style={{marginHorizontal: 10}}>
                  <Text style={{fontWeight: 'bold', fontSize: 14}}>
                    {response?.data?.name}
                  </Text>
                  <Text style={{fontSize: 12}}>{response?.data?.email}</Text>
                </View>
              </View>
            </Card>
          )}
        </View>

        <View>
          <Button
            buttonStyle={styles.signOutBtn}
            title="Sign Out"
            onPress={onLogout}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default index;
