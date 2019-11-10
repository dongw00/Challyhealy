import React, { Component } from 'react';
import { Image, ScrollView, Dimensions } from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import PreviousButton from '../../commons/button/PreviousButton';

const { width: WIDTH } = Dimensions.get('window');

export default class CouponGift extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: { height: 63 },
    title: '쿠폰 선물하기',
    headerLeft: <PreviousButton path="CouponList" />,
    headerRight: null,
  });

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView>
        <Box mt={30} ml={15} mr={15} mb={30}>
          <Box center mb={20}>
            <Text mb={7} bold style={{ fontSize: 20 }}>
              선물 받을 핸드폰 번호를 입력하세요.
            </Text>
            <Text style={{ fontSize: 12 }}>
              선물하기 후 취소는 불가하므로 번호를 신중하게 입력해주세요.
            </Text>
            <Box f={1} dir="row" mt={12} align="center">
              <Box center>
                <Image
                  style={{ width: 82, resizeMode: 'contain' }}
                  source={require('../../../assets/img/coupon/rect3.png')}
                />
                <Text style={{ position: 'absolute' }} color="#B2B2B2" bold>
                  010
                </Text>
              </Box>

              <Text bold> - </Text>
              <Box center>
                <Image
                  style={{ width: 85, resizeMode: 'contain' }}
                  source={require('../../../assets/img/coupon/rect3.png')}
                />
                <Text style={{ position: 'absolute' }} bold>
                  1234
                </Text>
              </Box>

              <Text bold> - </Text>
              <Box center>
                <Image
                  style={{ width: 85, resizeMode: 'contain' }}
                  source={require('../../../assets/img/coupon/rect3.png')}
                />
                <Text style={{ position: 'absolute' }} bold>
                  5678
                </Text>
              </Box>
            </Box>
          </Box>
          <Box center>
            <Image
              style={{
                width: '92%',
                height: 460,
                resizeMode: 'stretch',
                shadowColor: '#000',
                shadowOpacity: 0.27,
                shadowOffset: {
                  width: 1,
                  height: 3,
                },
                shadowRadius: 4.6,
              }}
              source={require('../../../assets/img/coupon/rect2.png')}
            />
            <Box w={WIDTH - 98} h={400} style={{ position: 'absolute' }}>
              <Box mb={8}>
                <Text mb={2} bold right style={{ fontSize: 19 }}>
                  {navigation.getParam('title')}
                </Text>
                <Text bold right style={{ fontSize: 18 }}>
                  {navigation.getParam('subTitle')}
                </Text>
              </Box>
              <Image
                style={{ width: '100%', resizeMode: 'cover' }}
                source={navigation.getParam('image')}
              />
              <Box f={1} mt={20} ml={10} mr={10}>
                <Box f={1} dir="row" justify="between" align="center">
                  <Text bold color="#7B7B7B" size="sm">
                    유효기간
                  </Text>
                  <Text bold size="sm">
                    2019.11.20
                  </Text>
                </Box>
                <Box
                  mb={5}
                  style={{
                    borderColor: '#F3F4F4',
                    borderWidth: 1,
                  }}
                />
                <Box f={1} dir="row" justify="between" align="center">
                  <Text bold color="#7B7B7B" size="sm">
                    교환처
                  </Text>
                  <Text bold size="sm">
                    {navigation.getParam('title')}
                  </Text>
                </Box>
                <Box
                  mb={5}
                  style={{
                    borderColor: '#F3F4F4',
                    borderWidth: 1,
                  }}
                />
                <Box f={1} dir="row" justify="between" align="center">
                  <Text bold color="#7B7B7B" size="sm">
                    생성일
                  </Text>
                  <Text bold size="sm">
                    2019.02.20
                  </Text>
                </Box>
                <Box
                  mb={5}
                  style={{
                    borderColor: '#F3F4F4',
                    borderWidth: 1,
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box center mt={12}>
            <Image
              source={require('../../../assets/img/coupon/rect4.png')}
              style={{ width: '53%', resizeMode: 'contain' }}
            />
            <Text center bold style={{ position: 'absolute', color: 'white' }}>
              선물하기
            </Text>
          </Box>
        </Box>
      </ScrollView>
    );
  }
}
