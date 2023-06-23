import React from 'react';
import {SafeAreaView, ScrollView, Image, View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import globalStyle from '../../Zassets/styles/globalStyle';
import BackBtn from '../../components/BackBtn/BackBtn';
import style from './style';
import Badge from '../../components/Badge/Badge';
import Header from '../../components/header/Header';
import Button from '../../components/Button/Button';
import {Routes} from '../../navigation/routes';

const DonationItemPage = ({navigation, route}) => {
  const donationItemInfo = useSelector(state => state.donations.selectedItem);
  const category = route.params.categoryInfo;
  return (
    <SafeAreaView style={[globalStyle.backGroundColor, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <BackBtn onPress={() => navigation.goBack()} />
        <Image source={{uri: donationItemInfo.image}} style={style.image} />
        <View style={style.badge}>
          <Badge title={category.name} />
        </View>
        <Header title={donationItemInfo.name} />
        <Text style={style.description}> {donationItemInfo.description} </Text>
      </ScrollView>
      <View style={style.button}>
        <Button
          title={'Donate'}
          onPress={() => {
            navigation.navigate(Routes.Payments);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DonationItemPage;
