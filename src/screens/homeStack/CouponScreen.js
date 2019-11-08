import React, { Component } from 'react';
import {
  Image,
  Dimensions,
  Platform,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import PreviousButton from '../../commons/button/PreviousButton';

const { width: WIDTH } = Dimensions.get('window');
import { theme } from '../../constants/theme';
import CouponCard from '../../components/CouponCard';

const coupons = [
  {
    id: 1,
    title: '별다방',
    subTitle: '카페라떼 Hot',
    image: require('../../../assets/img/coupon/img1.png'),
  },
  {
    id: 2,
    title: '건강제약',
    subTitle: '멀티 비타민',
    image: require('../../../assets/img/coupon/img2.png'),
  },
  {
    id: 3,
    title: 'G편의점',
    subTitle: '다이어트 도시락',
    image: require('../../../assets/img/coupon/img3.png'),
  },
  {
    id: 4,
    title: '콩다방',
    subTitle: '아메리카노 Ice',
    image: require('../../../assets/img/coupon/img4.png'),
  },
  {
    id: 5,
    title: 'S호텔',
    subTitle: 'A룸 주말 숙박권',
    image: require('../../../assets/img/coupon/img5.png'),
  },
  {
    id: 6,
    title: 'N아트센터',
    subTitle: '뮤지컬 초대권',
    image: require('../../../assets/img/coupon/img6.png'),
  },
];

const NUM_COLUMNS = 2;

export default class CouponScreen extends Component {
  static navigationOptions = {
    headerStyle: { height: 63 },
    title: '쿠폰 박스',
    headerLeft: <PreviousButton path="Profile" />,
    headerRight: null,
  };

  _renderItem = ({ item, idx }) => {
    return (
      <Box center w={1 / NUM_COLUMNS - 2} h={320} style={{ marginBottom: 10 }}>
        <CouponCard {...item} />
      </Box>
    );
  };

  _keyExtractor = item => item.id;

  render() {
    return (
      <ScrollView>
        <Box>
          <Box
            dir="row"
            justify="between"
            align="center"
            style={{ marginTop: 20, marginLeft: 32, marginRight: 32 }}>
            <Text bold>
              미사용 쿠폰, 총{' '}
              <Text bold color="#3EB1DF" style={{ fontSize: 23 }}>
                6
              </Text>
              장
            </Text>
            <Text bold size="sm" color="#7B7B7B">
              사용 쿠폰
            </Text>
          </Box>
          <Box center style={{ marginTop: 13 }}>
            <FlatList
              data={coupons}
              renderItem={this._renderItem}
              keyExtractor={this._keyExtractor}
              numColumns={2}
            />
          </Box>
        </Box>
        <Box center style={{ marginTop: 20, marginBottom: 40 }}>
          <Image source={require('../../../assets/img/coupon/top.png')} />
        </Box>
      </ScrollView>
    );
  }
}
