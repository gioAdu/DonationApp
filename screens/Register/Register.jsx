import React, {useState} from 'react';
import {Pressable, SafeAreaView, ScrollView, View} from 'react-native';
import globalStyle from '../../Zassets/styles/globalStyle';
import Input from '../../components/Input/Input';
import style from './style';
import Header from '../../components/header/Header';
import Button from '../../components/Button/Button';
import BackBtn from '../../components/BackBtn/BackBtn';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  return (
    <SafeAreaView style={[globalStyle.backGroundColor, globalStyle.flex]}>
      <View style={style.backBtn}>
        <BackBtn onPress={() => navigation.goBack()} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.inputContainer}>
        <Header title={'Hello and Welcome !'} />
        <Input
          label={'First & Last Name'}
          placeholder={'enter your Email'}
          onChangeText={val => setName(val)}
        />
        <Input
          label={'Email'}
          placeholder={'enter your Email'}
          onChangeText={val => setEmail(val)}
          keyboardType={'email-address'}
        />
        <Input
          secureTextEntry={true}
          label={'password'}
          placeholder={'******'}
          onChangeText={val => setPassword(val)}
        />
        <Button title={'Register'} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
