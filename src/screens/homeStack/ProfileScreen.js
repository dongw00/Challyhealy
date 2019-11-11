import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';
import { TouchableOpacity, FlatList, Image, Dimensions } from 'react-native';
import CancelButton from '../../commons/button/CancelButton';
import { NavigationService } from '../../api/NavigationService';

import ProfileCard from '../../components/ProfileCard';

const { width: WIDTH } = Dimensions.get('window');

const categories = [
  {
    id: 1,
    title: '기록 대상 관리',
    image: require('../../../assets/img/profile/info_icon1.png'),
    url: 'Update',
  },
  {
    id: 2,
    title: '쿠폰 박스',
    image: require('../../../assets/img/profile/info_icon2.png'),
    url: 'CouponList',
  },
  {
    id: 3,
    title: '크래딧 스토어',
    image: require('../../../assets/img/profile/info_icon3.png'),
    url: 'Credit',
  },
  {
    id: 4,
    title: '내 정보 관리',
    image: require('../../../assets/img/profile/info_icon4.png'),
    url: 'Update',
  },
  {
    id: 5,
    title: '공지사항',
    image: require('../../../assets/img/profile/info_icon5.png'),
    url: 'Update',
  },
  {
    id: 6,
    title: '고객센터',
    image: require('../../../assets/img/profile/info_icon6.png'),
    url: 'Update',
  },
];

export default class ProfileScreen extends Component {
  static navigationOptions = {
    headerStyle: { borderBottomWidth: 0, height: 60 },
    headerLeft: null,
    headerRight: <CancelButton path={'Home'} />,
  };

  _handlePress = () => {
    NavigationService.navigate('Update');
  };

  _renderItem = ({ item, idx }) => {
    return (
      <Box w={1 / 3} h={100}>
        <ProfileCard title={item.title} image={item.image} url={item.url} />
      </Box>
    );
  };

  _keyExtractor = item => item.id;

  render() {
    return (
      <Box f={1}>
        <Box m={15} style={{ marginTop: 5 }}>
          <Box style={{ marginLeft: 10 }}>
            <Text bold>
              김수진(Sunny)님,{' '}
              <Text size="sm" color="#56BBE3" bold>
                안
              </Text>
              <Text size="sm" color="#3EB1DF" bold>
                녕
              </Text>
              <Text size="sm" color="#79C2AB" bold>
                하
              </Text>
              <Text size="sm" color="#63B89E" bold>
                세
              </Text>
              <Text size="sm" color="#68BAA1" bold>
                요
              </Text>
            </Text>
            <Text bold color="#858585" style={{ fontSize: 10 }}>
              sunnymom@chalyhealy.com / 일반
            </Text>
          </Box>
          <Box
            center
            style={{
              marginTop: 10,
            }}>
            <Image
              style={{
                width: WIDTH - 23,
                resizeMode: 'contain',
              }}
              source={require('../../../assets/img/profile/rect1.png')}
            />
            <Box
              f={1}
              dir="row"
              w={WIDTH - 55}
              h={32}
              mt={18}
              justify="between"
              align="center"
              style={{
                position: 'absolute',
              }}>
              <Box f={1} dir="row" align="center">
                <Text style={{ fontSize: 12 }} bold color="white">
                  내 크래딧{' '}
                </Text>
                <Text bold color="white">
                  10,890
                </Text>
              </Box>
              <Box f={1} dir="row" justify="end" align="center">
                <TouchableOpacity onPress={this._handlePress}>
                  <Text bold color="white" style={{ fontSize: 12 }}>
                    사용내역
                  </Text>
                </TouchableOpacity>
                <Text bold color="white" style={{ fontSize: 12 }}>
                  {' '}
                  |{' '}
                </Text>
                <TouchableOpacity onPress={this._handlePress}>
                  <Text bold color="white" style={{ fontSize: 12 }}>
                    충전내역
                  </Text>
                </TouchableOpacity>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box center>
          <FlatList
            style={{ margin: 3 }}
            data={categories}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
            numColumns={3}
          />
          <Box mt={3} center align="center">
            <Image
              style={{
                width: WIDTH - 45,
                resizeMode: 'contain',
                borderRadius: 5,
              }}
              source={require('../../../assets/img/profile/rect2.png')}
            />
            <Text bold style={{ fontSize: 12.5, position: 'absolute' }}>
              거점센터 카카오톡 플러스친구 상담
            </Text>
          </Box>
          <Text bold style={{ fontSize: 9 }}>
            지정 병원이 해당 보건 사업을 하는 "파트너" 병원인 경우 지원되는
            서비스입니다.
          </Text>
          <Box center align="center">
            <Image
              style={{
                width: WIDTH - 45,
                resizeMode: 'contain',
                borderRadius: 3,
              }}
              source={require('../../../assets/img/profile/rect3.png')}
            />
            <Text
              bold
              color="#8B8B8B"
              style={{
                position: 'absolute',
                fontSize: 12,
              }}>
              챌리힐리 가이드
            </Text>
          </Box>
        </Box>
        <Box
          center
          style={{
            position: 'absolute',
            resizeMode: 'contain',
            width: WIDTH,
            bottom: 0,
          }}>
          <Image source={require('../../../assets/img/profile/ad.png')} />
          <Box center style={{ position: 'absolute' }}>
            <Text bold color="white" style={{ fontSize: 24 }}>
              디즈니 애니메이션 특별전
            </Text>
            <Text color="white" style={{ marginTop: 4, fontSize: 13 }}>
              기대평을 달아주시면 추첨을 통해 10분을 초대합니다. (각 2매)
            </Text>
          </Box>
        </Box>
      </Box>
    );
  }
}
