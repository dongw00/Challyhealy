import React, { Component } from 'react';
import {
  FlatList,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Box, Text } from 'react-native-design-utility';

import LogoTitle from '../../commons/LogoTitle';
import HomeButton from '../../commons/button/HomeButton';
import InfoButton from '../../commons/button/InfoButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PraiseCard from '../../components/PraiseCard';

const images = [
  {
    id: 1,
    image: require('../../../assets/img/praise/photo1.png'),
  },
  {
    id: 2,
    image: require('../../../assets/img/praise/photo2.png'),
  },
  {
    id: 3,
    image: require('../../../assets/img/praise/photo3.png'),
  },
  {
    id: 4,
    image: require('../../../assets/img/praise/photo4.png'),
  },
  {
    id: 5,
    image: require('../../../assets/img/praise/photo5.png'),
  },
  {
    id: 6,
    image: require('../../../assets/img/praise/photo6.png'),
  },
  {
    id: 7,
    image: require('../../../assets/img/praise/photo7.png'),
  },
  {
    id: 8,
    image: require('../../../assets/img/praise/photo8.png'),
  },
  {
    id: 9,
    image: require('../../../assets/img/praise/photo9.png'),
  },
  {
    id: 10,
    image: require('../../../assets/img/praise/photo10.png'),
  },
  {
    id: 11,
    image: require('../../../assets/img/praise/photo11.png'),
  },
  {
    id: 12,
    image: require('../../../assets/img/praise/photo12.png'),
  },
];

export default class PraiseScreen extends Component {
  static navigationOptions = {
    headerTitle: () => <LogoTitle />,
    headerStyle: {
      backgroundColor: '#fff',
      height: 80,
    },
  };

  _renderItem = ({ item, idx }) => {
    return (
      <Box w={1 / 3} m={1}>
        <PraiseCard {...item} />
      </Box>
    );
  };

  _keyExtractor = item => item.id;

  render() {
    return (
      <ScrollView style={{ margin: 1 }}>
        <Text
          bold
          size="sm"
          style={{ marginLeft: 20, marginTop: 10, marginBottom: 10 }}>
          2019년 11월 13일(수)
        </Text>
        <FlatList
          data={images}
          style={{ margin: 1 }}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          numColumns={3}
        />
        <Text
          bold
          size="sm"
          style={{ marginLeft: 20, marginTop: 10, marginBottom: 10 }}>
          2019년 11월 12일(화)
        </Text>
        <FlatList
          data={images}
          style={{ margin: 1 }}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          numColumns={3}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').width / 3,
  },
});