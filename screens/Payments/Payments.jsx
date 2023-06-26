import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Modal,
  Image,
  Alert,
  StatusBar,
} from 'react-native';
import globalStyle from '../../Zassets/styles/globalStyle';
import Header from '../../components/header/Header';
import style from './style';
import {useSelector} from 'react-redux';
import Button from '../../components/Button/Button';
import WebView from 'react-native-webview';
import {Routes} from '../../navigation/routes';

export const formatter = new Intl.NumberFormat(undefined, {
  style: 'currency',
  currency: 'USD',
});

const Payments = ({navigation}) => {
  const API_URL =
    'https://us-central1-donationpaymentkey.cloudfunctions.net/paypalPayment';

  const [showModal, setShowModal] = useState(false);
  const handleResponse = data => {
    if (data.title === 'Document') {
      StatusBar.setBackgroundColor('#595bd4');
    } else {
      StatusBar.setBackgroundColor('white');
    }
    if (data.title === 'success') {
      setShowModal(false);
      Alert.alert('Donation was successfull', undefined, undefined, {
        cancelable: true,
      });
      navigation.navigate(Routes.Home);
    } else if (data.title === 'cancel') {
      setShowModal(false);
      Alert.alert('Donation was cancelled', undefined, undefined, {
        cancelable: true,
      });
    } else {
      return;
    }
  };
  const donationItemInfo = useSelector(state => state.donations.selectedItem);

  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.backGroundColor]}>
      <ScrollView contentContainerStyle={style.paymentContainer}>
        <View style={style.headerWrapper}>
          <Header title={'Making Donation'} />
        </View>
        <Image source={{uri: donationItemInfo.image}} style={style.image} />
        <View style={style.headerWrapper}>
          <Header title={donationItemInfo.name} type={2} />
        </View>
        <View style={style.bottomBorder}></View>
        <Text style={style.donationAmount}>
          You are about to donate {formatter.format(donationItemInfo.price)}
        </Text>
        <Modal visible={showModal} onRequestClose={() => setShowModal(false)}>
          <StatusBar barStyle={'dark-content'} />
          <WebView
            source={{
              uri: API_URL,
            }}
            style={{flex: 1}}
            onNavigationStateChange={data => handleResponse(data)}
            injectedJavaScript={`document.getElementById('price').value=${(+donationItemInfo.price).toFixed(
              2,
            )};document.myForm.submit()`}
          />
        </Modal>
      </ScrollView>
      <View style={style.button}>
        <Button title={'Donate'} onPress={() => setShowModal(true)} />
      </View>
    </SafeAreaView>
  );
};

export default Payments;
