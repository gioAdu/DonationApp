import React, {useState} from 'react';
import {Pressable, SafeAreaView, ScrollView, View, Text} from 'react-native';
import globalStyle from '../../Zassets/styles/globalStyle';
import Input from '../../components/Input/Input';
import style from './style';
import Header from '../../components/header/Header';
import Button from '../../components/Button/Button';
import {Routes} from '../../navigation/routes';
import {loginUser} from '../../api/user';
import {useDispatch} from 'react-redux';
import {logIn, resetToInitialState} from '../../redux/reducers/User';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={[globalStyle.backGroundColor, globalStyle.flex]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.inputContainer}>
        <Header title={'Welcome Back'} />
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
        <Button
          onPress={async () => {
            let user = await loginUser(email, password);
            if (!user.status) {
              setError(user.error);
            } else {
              setError('');
              dispatch(logIn(user.data));
            }
          }}
          title={'login'}
          isDisabled={email.length < 5 || password.length < 8}
        />
        <View>
          {error.length > 0 && <Text style={style.error}>{error}</Text>}
        </View>
        <Pressable
          style={style.registrationButton}
          onPress={() => navigation.navigate(Routes.Register)}>
          <Header type={3} title={"don't have an account?"} color={'#156CF7'} />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
