import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View, Modal} from 'react-native';
import globalStyle from '../../Zassets/styles/globalStyle';
import Header from '../../components/header/Header';
import style from './style';
import {useSelector} from 'react-redux';
import Button from '../../components/Button/Button';
import WebView from 'react-native-webview';

export const formatter = new Intl.NumberFormat(undefined, {
  style: 'currency',
  currency: 'USD',
});

const Payments = () => {
  const [showModal, setShowModal] = useState(false);
  const [status, setstatus] = useState('Pending');

  const handleResponse = data => {
    if (data.title === 'success') {
      setShowModal(false);
      setstatus('Complete');
    } else if (data.title === 'cancel') {
      setShowModal(false);
      setstatus('cancelled');
    } else {
      return;
    }
  };
  const donationItemInfo = useSelector(state => state.donations.selectedItem);
  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.backGroundColor]}>
      <ScrollView contentContainerStyle={style.paymentContainer}>
        <Header title={'Making Donation'} />
        <Text style={style.donationAmount}>
          You are about to donate {formatter.format(donationItemInfo.price)}
        </Text>
        <Text>Payment status {status}</Text>
        <Modal visible={showModal} onRequestClose={() => setShowModal(false)}>
          <WebView
            source={{uri: 'http://localhost:3000'}}
            style={{flex: 1}}
            onNavigationStateChange={data => handleResponse(data)}
            injectedJavaScript={`document.getElementById('price').value=${donationItemInfo.price};document.myForm.submit()`}
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
