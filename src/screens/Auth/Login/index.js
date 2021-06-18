import React from 'react';
import {View, Image, KeyboardAvoidingView} from 'react-native';
import {Text} from 'react-native-elements';
import {useDispatch} from 'react-redux';

import Header from '../../../components/shared/Header';
import styles from './styles';
import Form from './Form';
import {login} from '../../../actions/Auth';

function index({navigation}) {
  const dispatch = useDispatch();
  const onSignIn = React.useCallback(
    async (values, formikHelpers) => {
      formikHelpers.setSubmitting(true);
      try {
        await dispatch(login(values));
        navigation.navigate('Home');
      } catch (error) {
        formikHelpers.setSubmitting(false);
        if (error) {
          formikHelpers.setFieldError(
            'email',
            'These credentials do not match our records.',
          );
        }
      }
    },
    [dispatch, navigation],
  );
  return (
    <KeyboardAvoidingView style={styles.safeAreaView}>
      <Header
        placement="left"
        title="Sign In"
        navigation={navigation}
        isBack={true}
      />
      <View style={styles.container}>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Image
              style={styles.logo}
              source={require('../../../assets/img/AppIcon.png')}
            />
          </View>
          <View style={styles.formContent}>
            <Form onSubmit={onSignIn} />
            <View style={styles.footer}>
              <Text>Forgotten your password?</Text>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default index;
