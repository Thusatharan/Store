import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, SafeAreaView, Image} from 'react-native';
import {Button, Text} from 'react-native-elements';
import styles from './styles';
import Colors from '../../../constants/Colors';
import {isAuthorized as authorizedSelector} from '../../../selectors/auth';
import {logout} from '../../../actions/Auth';

function index({navigation}) {
  const isAuthorized = useSelector(authorizedSelector);
  const dispatch = useDispatch();
  const onLogout = React.useCallback(() => {
    dispatch(logout());
  }, [dispatch]);
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.content}>
        <View style={{marginTop: 30}}>
          {isAuthorized ? null : (
            <Button
              buttonStyle={styles.signInBtn}
              title="Sign In"
              onPress={() => navigation.navigate('Login')}
            />
          )}
        </View>
        <View style={styles.center}>
          <View style={{flexDirection: 'column'}}>
            <Image
              style={styles.logo}
              source={require('../../../assets/img/AppIcon.png')}
            />
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: Colors.primary,
                paddingRight: 3,
                paddingLeft: 5,
                marginTop: 10,
              }}>
              <Text h4>DELIVER</Text>
              <Text h4 style={{color: 'red'}}>
                E
              </Text>
            </View>
          </View>
        </View>
        <Image
          style={styles.footer}
          source={require('../../../assets/img/delivere.png')}
        />
      </View>
    </SafeAreaView>
  );
}

export default index;
