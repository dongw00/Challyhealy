import React, { Component } from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';

import { NavigationService } from '../api/NavigationService';
import TabBar from '../components/tab/TabBar';

import HomeScreen from './homeStack/HomeScreen';
import NoteScreen from './noteStack/NoteScreen';
import PraiseScreen from './praiseStack/PraiseScreen';
import DiseaseScreen from './diseaseStack/DiseaseScreen';
import WriteNote from './noteStack/WriteNote';
import ProfileScreen from './homeStack/ProfileScreen';

import CouponScreen from './homeStack/CouponScreen';
import CouponDetail from './homeStack/CouponDetail';
import CouponGift from './homeStack/CouponGift';

/* Credit Store */
import CreditStore from './homeStack/CreditStore';
import StoreList from './homeStack/StoreList';
import LikeList from './homeStack/LikeList';

import UpdateScreen from './common/UpdateScreen';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen,

    CouponList: CouponScreen,
    CouponDetail: CouponDetail,
    CouponGift: CouponGift,
    StoreList: StoreList,

    LikeList: LikeList,
    Credit: CreditStore,

    Update: UpdateScreen,
  },
  {
    mode: 'modal',
  }
);

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  let routeName = navigation.state.routes[navigation.state.index].routeName;

  tabBarVisible =
    routeName === 'Profile' ||
    routeName === 'Credit' ||
    routeName === 'WriteNote' ||
    routeName === 'CouponList' ||
    routeName === 'CouponDetail' ||
    routeName === 'CouponGift' ||
    routeName === 'Update' ||
    routeName === 'StoreList' ||
    routeName === 'LikeList'
      ? false
      : true;

  return {
    tabBarVisible,
  };
};

const NoteStack = createStackNavigator({
  Note: NoteScreen,
  WriteNote: WriteNote,
});

NoteStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  let routeName = navigation.state.routes[navigation.state.index].routeName;

  tabBarVisible = routeName == 'WriteNote' ? false : true;

  return {
    tabBarVisible,
  };
};

const DiseaseStack = createStackNavigator({
  Disease: DiseaseScreen,
});

const PraiseStack = createStackNavigator({
  Praise: PraiseScreen,
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Note: NoteStack,
    Praise: PraiseStack,
    Disease: DiseaseStack,
  },
  {
    tabBarComponent: props => <TabBar {...props} />,
  }
);

const AppContainer = createAppContainer(TabNavigator);

export default class Navigation extends Component {
  render() {
    return (
      <AppContainer ref={r => NavigationService.setTopLevelNavigator(r)} />
    );
  }
}
