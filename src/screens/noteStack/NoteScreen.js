import React, { Component } from 'react';
import { View, ScrollView, FlatList, Image } from 'react-native';
import { Box, Text } from 'react-native-design-utility';

import { theme } from '../../constants/theme';
import CategoryCard from '../../components/CategoryCard';

import LogoTitle from '../../commons/LogoTitle';
import InfoButton from '../../commons/button/InfoButton';

const categories = [
  {
    id: 1,
    title: '병원',
  },
  {
    id: 2,
    title: '투약',
  },
  {
    id: 3,
    title: '식이',
  },
  {
    id: 4,
    title: '체온',
  },
  {
    id: 5,
    title: '키/몸무게',
  },
  {
    id: 6,
    title: '운동',
  },
  {
    id: 7,
    title: '수면',
  },
  {
    id: 8,
    title: '영양제',
  },
  {
    id: 9,
    title: '연고/기타처방',
  },
  {
    id: 10,
    title: '양치하기',
  },
  {
    id: 11,
    title: '마스크쓰기',
  },
  {
    id: 12,
  },
];

const NUM_COLUMNS = 3;

export default class NoteScreen extends Component {
  static navigationOptions = {
    headerTitle: () => <LogoTitle />,
    headerStyle: {
      backgroundColor: '#fff',
      height: 80,
    },
    headerRight: <InfoButton />,
  };

  _renderItem = ({ item, idx }) => {
    let style = {};

    if (idx % NUM_COLUMNS !== 0) {
      style.borderLeftWidth = 2;
      style.borderLeftColor = theme.color.greyLighter;
    }

    return (
      <Box w={1 / NUM_COLUMNS} h={120} style={style}>
        <CategoryCard {...item} />
      </Box>
    );
  };

  _keyExtractor = item => item.id;

  _separator = () => <Box h={2} bg="greyLighter" />;

  render() {
    return (
      <Box f={1}>
        <Box f={1.1} style={{ flexDirection: 'row' }}>
          <Box f={1} style={{ margin: 40 }} center>
            <Image
              style={{ width: 115, height: 115 }}
              source={require('../../../assets/img/note/child_crown1.png')}
            />
          </Box>
          <Box f={2} left style={{ justifyContent: 'center' }}>
            <Image
              style={{ marginBottom: 7 }}
              source={require('../../../assets/img/note/line1.png')}
            />
            <Text bold style={{ marginBottom: 3 }}>
              최나은(Ann)
            </Text>
            <Text size="sm" style={{ marginBottom: 20 }}>
              여 / 17.07.16 (26개월)
            </Text>
            <Image
              source={require('../../../assets/img/note/line2.png')}
              style={{ marginBottom: 7 }}
            />
            <Text size="sm">지정병원: 서울대병원</Text>
          </Box>
        </Box>
        <Box f={3} style={{ backgroundColor: theme.color.greyLighter }}>
          <ScrollView style={{ marginTop: 20 }}>
            <Text center style={{ fontWeight: '600' }}>
              2019년 11월 13일
            </Text>
            <FlatList
              style={{ margin: 20 }}
              data={categories}
              renderItem={this._renderItem}
              keyExtractor={this._keyExtractor}
              numColumns={NUM_COLUMNS}
              ItemSeparatorComponent={this._separator}
            />
          </ScrollView>
        </Box>
      </Box>
    );
  }
}
