import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StatusBar,
  ScrollView,
  Image,
  Pressable,
  FlatList,
} from 'react-native';
import Header from '../../components/header/Header';

import globalStyle from '../../Zassets/styles/globalStyle';
import {useSelector, useDispatch} from 'react-redux';
import style from './style';
import Search from '../../components/search/Search';
import Tab from '../../components/Tab/Tab';
import {updateSelectedCategoryId} from '../../redux/reducers/Categories';
import DonationItem from '../../components/donationItem/DonationItem';
import {updateSelectedDonationId} from '../../redux/reducers/Donations';
import {Routes} from '../../navigation/routes';

const Home = ({navigation}) => {
  const dispatch = useDispatch();

  const categories = useSelector(state => state.categories);
  const donations = useSelector(state => state.donations);
  const user = useSelector(state => state.user);

  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const categoryPageSize = 4;

  const [donationItem, setDonationItems] = useState([]);

  useEffect(() => {
    const items = donations.items;
    const filteredItems = items.filter(value =>
      value.categoryIds.includes(categories.selectedCategoryId),
    );
    setDonationItems(filteredItems);
  }, [categories.selectedCategoryId]);

  useEffect(() => {
    setIsLoading(true);
    setCategoryList(
      pagination(categories.categories, categoryPage, categoryPageSize),
    );
    setCategoryPage(prev => prev + 1), setIsLoading(false);
  }, []);

  const pagination = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex > items.length) {
      return [];
    }
    return items.slice(startIndex, endIndex);
  };

  return (
    <SafeAreaView style={[globalStyle.backGroundColor, globalStyle.flex]}>
      <ScrollView
        contentContainerStyle={style.mainContainer}
        showsVerticalScrollIndicator={false}>
        <View style={style.header}>
          <View>
            <Text style={style.headerIntroText}>Hello,</Text>
            <Header title={`${user.firstName} ${user.lastName[0]}.👋`} />
          </View>
          <Image source={{uri: user.profileImage}} style={style.profileImage} />
        </View>
        <View style={style.searchBox}>
          <Search />
        </View>
        <Pressable style={style.highlightedImageContainer}>
          <Image
            style={style.highlightedImage}
            source={require('../../Zassets/images/highlighted_image.png')}
          />
        </Pressable>
        <View style={style.categoryHeader}>
          <Header title={'Select category'} type={2} />
        </View>
        <View>
          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isLoading) {
                return;
              }
              setIsLoading(true);
              let newData = pagination(
                categories.categories,
                categoryPage,
                categoryPageSize,
              );
              if (newData.length > 0) {
                setCategoryList(prev => [...prev, ...newData]);
                setCategoryPage(prev => prev + 1);
              }
              setIsLoading(false);
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categoryList}
            renderItem={({item}) => (
              <View style={style.categoryItem} key={item.categoryId}>
                <Tab
                  tabId={item.categoryId}
                  onPress={val => {
                    dispatch(updateSelectedCategoryId(val));
                  }}
                  title={item.name}
                  isInactive={item.categoryId !== categories.selectedCategoryId}
                />
              </View>
            )}></FlatList>
        </View>
        {donationItem.length > 0 && (
          <View style={style.donationItemsContainer}>
            {donationItem.map(val => {
              const categoryInfo = categories.categories.filter(
                value => value.categoryId === categories.selectedCategoryId,
              )[0];
              return (
                <View key={val.donationItemId} style={style.donationItem}>
                  <DonationItem
                    onPress={itemId => {
                      dispatch(updateSelectedDonationId(itemId));
                      navigation.navigate(Routes.DonationItemPage, {
                        categoryInfo,
                      });
                    }}
                    donationItemId={val.donationItemId}
                    donationTitle={val.name}
                    uri={val.image}
                    title={categoryInfo.name}
                    price={+val.price}
                  />
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
