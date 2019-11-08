import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import { FlatList } from 'react-native-gesture-handler';

import CreditCard from '../../components/CreditCard';

const { width: WIDTH } = Dimensions.get('window');
import { theme } from '../../constants/theme';

const categories = [
  {
    id: 1,
    title: '챌리힐리',
  },
  {
    id: 2,
    title: '도서/학용품',
  },
  {
    id: 3,
    title: '인형/장난감',
  },
  {
    id: 4,
    title: '건강식품/보조제',
  },
  {
    id: 5,
    title: '커피/베이커리',
  },
  {
    id: 6,
    title: '생필품/편의점',
  },
  {
    id: 7,
    title: '공연/이벤트',
  },
  {
    id: 8,
    title: '초대장/숙박권',
  },
  {
    id: 9,
    title: '선물랭킹',
  },
];

const NUM_COLUMNS = 3;

export default class CreditStore extends Component {
  static NavigationOptions = {
    header: null,
  };

  _renderItem = ({ item, idx }) => {
    return (
      <Box center w={1 / NUM_COLUMNS - 30} h={95} style={{ marginTop: 10 }}>
        <CreditCard {...item} />
      </Box>
    );
  };

  _keyExtractor = item => item.id;

  render() {
    return (
      <Box f={1}>
        <Box>
          <Image
            style={{ width: WIDTH, resizeMode: 'contain' }}
            source={require('../../../assets/img/store/storead2.png')}
          />
        </Box>
        <Box>
          <Box center>
            <Text bold style={{ fontSize: 12 }}>
              크래딧을 사용해 고마움을 표현해보세요.
            </Text>
          </Box>
          <Box
            center
            style={{
              marginTop: 8,
            }}>
            <Image
              style={{
                width: WIDTH - 23,
                height: 31,
              }}
              source={require('../../../assets/img/profile/rect1.png')}
            />
            <Box
              f={1}
              style={{
                marginTop: 18,
                width: WIDTH - 55,
                height: 32,
                position: 'absolute',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Box f={1} style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 12 }} bold color="white">
                  내 크래딧{' '}
                </Text>
                <Text bold color="white">
                  10,890
                </Text>
              </Box>
              <Box f={1} style={{ alignItems: 'flex-end', marginRight: 5 }}>
                <Text bold color="white" style={{ fontSize: 12 }}>
                  사용내역 | 충전내역
                </Text>
              </Box>
            </Box>
          </Box>
          <Box center style={{ marginTop: 5, marginLeft: 5, marginRight: 5 }}>
            <FlatList
              style={{ marginLeft: 15, marginRight: 15, marginTop: 5 }}
              data={categories}
              renderItem={this._renderItem}
              keyExtractor={this._keyExtractor}
              numColumns={3}
            />
          </Box>
        </Box>
      </Box>
    );
  }
}
