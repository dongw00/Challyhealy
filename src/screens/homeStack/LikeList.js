import React, { Component } from 'react';
import { ScrollView, FlatList } from 'react-native';
import { Box, Text } from 'react-native-design-utility';

import PreviousButton from '../../commons/button/PreviousButton';

import LikeCard from '../../components/LikeCard';

const dummy = [
  {
    id: 1,
    title: '어린이 백팩 X1',
    price: '5,000 C',
    image: require('../../../assets/img/store/img7.png'),
  },
  {
    id: 2,
    title: '키즈 영어책 X1',
    price: '5,000 C',
    image: require('../../../assets/img/store/img8.png'),
  },
];

export default class LikeList extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: { height: 50 },
    title: '크래딧 스토어 찜',
    headerLeft: <PreviousButton path="StoreList" />,
    headerRight: null,
  });

  _renderItem = ({ item, idx }) => {
    return (
      <Box>
        <LikeCard {...item} />
      </Box>
    );
  };

  render() {
    return (
      <ScrollView>
        <FlatList
          data={dummy}
          renderItem={this._renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </ScrollView>
    );
  }
}
