import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View, Text, Alert} from 'react-native';
import globalStyle from '../../Zassets/styles/globalStyle';
import Input from '../../components/Input/Input';
import style from './style';
import Header from '../../components/header/Header';
import Button from '../../components/Button/Button';
import BackBtn from '../../components/BackBtn/BackBtn';
import {createUser, loginUser} from '../../api/user';
import {logIn} from '../../redux/reducers/User';
import {useDispatch} from 'react-redux';
import {Routes} from '../../navigation/routes';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

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
        <View>
          {error.length > 0 && <Text style={style.error}>{error}</Text>}
          {success.length > 0 && <Text style={style.success}>{success}</Text>}
        </View>
        <Button
          isDisabled={
            name.length <= 2 || email.length < 5 || password.length < 8
          }
          title={'Register'}
          onPress={async () => {
            let user = await createUser(name, email, password);
            if (user.error) {
              setError(user.error);
            } else {
              setError('');
              setSuccess('you have succesfully registered');
              let autoLogUser = await loginUser(email, password);
              dispatch(logIn(autoLogUser.data));
            }
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
