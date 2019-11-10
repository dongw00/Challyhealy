import React, { Component } from 'react';
import { Image, ScrollView } from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import PreviousButton from '../../commons/button/PreviousButton';

export default class CouponDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: { height: 63 },
    title: '쿠폰 사용하기',
    headerLeft: <PreviousButton path="CouponList" />,
    headerRight: null,
  });

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView>
        <Box mt={20} ml={15} mr={15} mb={30}>
          <Box mb={20}>
            <Text mb={2} bold right style={{ fontSize: 20 }}>
              {navigation.getParam('title')}
            </Text>
            <Text bold right style={{ fontSize: 19 }}>
              {navigation.getParam('subTitle')}
            </Text>
          </Box>
          <Box center>
            <Image
              style={{ width: '100%', resizeMode: 'cover', marginBottom: 3 }}
              source={navigation.getParam('image')}
            />
            <Image
              style={{ width: 360, resizeMode: 'contain' }}
              source={require('../../../assets/img/coupon/barcode.png')}
            />
          </Box>
          <Box mt={15} mb={8} ml={25} mr={25}>
            <Box f={1} dir="row" justify="between">
              <Text bold color="#7B7B7B">
                유효기간
              </Text>
              <Text bold>2019.11.20</Text>
            </Box>
            <Box
              mt={10}
              mb={20}
              style={{
                borderColor: '#F3F4F4',
                borderWidth: 1,
              }}
            />
            <Box f={1} dir="row" justify="between">
              <Text bold color="#7B7B7B">
                교환처
              </Text>
              <Text bold>{navigation.getParam('title')}</Text>
            </Box>
            <Box
              mt={10}
              mb={20}
              style={{
                borderColor: '#F3F4F4',
                borderWidth: 1,
              }}
            />
            <Box f={1} dir="row" justify="between">
              <Text bold color="#7B7B7B">
                생성일
              </Text>
              <Text bold>2019.02.20</Text>
            </Box>
            <Box
              mt={10}
              mb={25}
              style={{
                borderColor: '#F3F4F4',
                borderWidth: 1,
              }}
            />
            <Box color="#979797">
              <Text size="sm">본 쿠폰은 현금으로 교환할 수 없습니다.</Text>
              <Text size="sm">
                매장의 재고 현황에 따라 해당 상품 교환이 어려워질 수 있습니다.
              </Text>
              <Text size="sm">
                이에 타 상품으로 교환하면서 발생하는 차액은 추가 지불이
                필요합니다.
              </Text>
              <Text size="sm">
                해당 제품의 상세 사항은 제품의 제조사 사이트를 확인하세요.
              </Text>
              <Text size="sm">연출된 이미지는 실제와 다를 수 있습니다.</Text>
            </Box>
          </Box>
        </Box>
      </ScrollView>
    );
  }
}
