import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  View,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Text, Overlay, Button} from 'react-native-elements';

import styles from './styles';
import Colors from '../../../../../constants/Colors';
import Header from '../../../../../components/shared/Header';
import Detail from '../../../../../components/shared/OrderDetails';
import {useLoadItem} from './hooks';

function index({route, navigation}) {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState('');
  const [note, setNote] = useState('');

  const {isLoading, response, onLoadItem} = useLoadItem(route.params.id);
  const item = React.useMemo(() => {
    return {
      inventory_status: response?.data?.driver_status,
      inventory_packing_status: response?.data?.driver_delivery_status,
      items: response?.data?.items.map((doc) => ({
        name: doc?.name,
        quantity: doc?.qty,
        picked: doc?.sku,
      })),
    };
  }, [response?.data]);

  const toggleOverlay = (status) => {
    setVisible(!visible);
    setStatus(status);
  };

  if (!response?.data) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View>
        <Header
          navigation={navigation}
          title="#10029"
          placement="center"
          isBack={true}
        />
      </View>
      {isLoading ? (
        <ActivityIndicator size="large" color={Colors.primary} />
      ) : (
        <>
          <ScrollView style={styles.mainContainer}>
            <Detail items={item.items} />
          </ScrollView>
          {item.inventory_packing_status === 'pending' ? (
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.declineButon}
                activeOpacity={0.8}
                onPress={() => toggleOverlay('decline')}>
                <Text style={{color: 'white'}}>Decline</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.acceptButon}
                activeOpacity={0.8}
                onPress={() => toggleOverlay('accept')}>
                <Text style={{color: 'white'}}>Accept</Text>
              </TouchableOpacity>
            </View>
          ) : null}
        </>
      )}
      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        overlayStyle={[
          styles.Overlay,
          {height: status === 'cancel' ? 190 : 150},
        ]}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Confirm</Text>
            <Ionicons
              name="close-outline"
              size={25}
              onPress={() => setVisible(false)}
            />
          </View>
          <View style={{flexDirection: 'column', justifyContent: 'flex-start'}}>
            <Text> Are you sure want to {status} this shipment?</Text>
            {status === 'cancel' ? (
              <TextInput
                textAlignVertical="top"
                placeholder="Note"
                multiline={true}
                placeholderTextColor="grey"
                numberOfLines={2}
                onChangeText={(text) => setNote(text)}
                value={note}
                style={{
                  margin: 5,
                  backgroundColor: '#ececec',
                }}
              />
            ) : null}
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View></View>
            <View style={{flexDirection: 'row'}}>
              <Button
                title="  Yes  "
                buttonStyle={{
                  marginHorizontal: 20,
                  backgroundColor: Colors.primary,
                }}
                // onPress={() => onDriveSubmit()}
              />
              <Button
                title="  No  "
                type="outline"
                onPress={() => setVisible(false)}
              />
            </View>
          </View>
        </View>
      </Overlay>
    </SafeAreaView>
  );
}

export default index;
