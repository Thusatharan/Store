import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {Button} from 'react-native-elements';
import {object, string} from 'yup';
import {Formik} from 'formik';
import styles from './styles';

const initialValues = {
  email: 'ajanth@gmail.com',
  password: '123456',
};

const validationSchema = object().shape({
  password: string().required('Password is required.'),
  email: string()
    .required('Email is required.')
    .email('Email must an valid email address.'),
});

const Form = ({onSubmit}) => {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isValid,
        isSubmitting,
      }) => {
        const invalidEmail = touched.email && errors.email;
        const invalidPassword = touched.password && errors.password;

        return (
          <React.Fragment>
            <View>
              <TextInput
                placeholder="E-mail"
                style={styles.textInput}
                value={values.email}
                disabled={isSubmitting}
                onBlur={handleBlur('email')}
                onChangeText={handleChange('email')}
              />
              <Text style={{color: 'red'}}>
                {invalidEmail ? errors.email : undefined}
              </Text>
            </View>
            <View>
              <TextInput
                placeholder="Password"
                secureTextEntry={true}
                style={styles.textInput}
                value={values.password}
                disabled={isSubmitting}
                onBlur={handleBlur('password')}
                onChangeText={handleChange('password')}
              />
              <Text style={{color: 'red'}}>
                {invalidPassword ? errors.password : undefined}
              </Text>
            </View>
            <Button
              title={isSubmitting ? 'SIGNING...' : 'SIGN IN'}
              buttonStyle={styles.signInBtn}
              disabled={!isValid || isSubmitting}
              onPress={handleSubmit}
            />
          </React.Fragment>
        );
      }}
    </Formik>
  );
};

export default Form;
