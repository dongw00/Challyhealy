import React, { Component } from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import { NavigationService } from '../api/NavigationService';
import TabBar from '../components/tab/TabBar';

import HomeScreen from './homeStack/HomeScreen';
import NoteScreen from './noteStack/NoteScreen';
import PraiseScreen from './praiseStack/PraiseScreen';
import DiseaseScreen from './diseaseStack/DiseaseScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  //Category: CategoryScreen,
  //ShoppingCart: ShoppingCartScreen,
});

const NoteStack = createStackNavigator({
  Note: NoteScreen,
});

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
    //Order: OrderScreen,
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
