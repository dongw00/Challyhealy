import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';
import { TouchableOpacity, FlatList, Image, Dimensions } from 'react-native';
import CancleButton from '../../commons/button/CancleButton';
import { NavigationService } from '../../api/NavigationService';

import ProfileCard from '../../components/ProfileCard';

const { width: WIDTH } = Dimensions.get('window');

const categories = [
  {
    id: 1,
    title: '기록 대상 관리',
    image: require('../../../assets/img/profile/info_icon1.png'),
  },
  {
    id: 2,
    title: '쿠폰 박스',
    image: require('../../../assets/img/profile/info_icon2.png'),
  },
  {
    id: 3,
    title: '크래딧 스토어',
    image: require('../../../assets/img/profile/info_icon3.png'),
  },
  {
    id: 4,
    title: '내 정보 관리',
    image: require('../../../assets/img/profile/info_icon4.png'),
  },
  {
    id: 5,
    title: '공지사항',
    image: require('../../../assets/img/profile/info_icon5.png'),
  },
  {
    id: 6,
    title: '고객센터',
    image: require('../../../assets/img/profile/info_icon6.png'),
  },
];

export default class ProfileScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      height: 60,
      borderColor: 'white',
    },
    headerLeft: null,
    headerRight: <CancleButton path={'Home'} />,
  };

  _renderItem = ({ item, idx }) => {
    return (
      <Box w={1 / 3} h={100}>
        <ProfileCard title={item.title} image={item.image} />
      </Box>
    );
  };

  _keyExtractor = item => item.id;

  render() {
    return (
      <Box f={1} style={{ marginTop: 15 }}>
        <Box m={15}>
          <Box style={{ marginLeft: 8 }}>
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
            <Text bold color="#858585" style={{ marginTop: 3, fontSize: 10 }}>
              sunnymom@chalyhealy.com / 일반
            </Text>
          </Box>
          <Box
            center
            style={{
              marginTop: 15,
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
        </Box>
        <Box center style={{ marginTop: 17 }}>
          <FlatList
            style={{ margin: 5 }}
            data={categories}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
            numColumns={3}
          />
          <Box center style={{ marginTop: 8 }}>
            <Image
              style={{ width: WIDTH - 45, height: 40, borderRadius: 5 }}
              source={require('../../../assets/img/profile/rect2.png')}
            />
            <Text bold style={{ fontSize: 12.5, position: 'absolute' }}>
              거점센터 카카오톡 플러스친구 상담
            </Text>
          </Box>
          <Text bold style={{ fontSize: 8.5, marginTop: 0.8 }}>
            지정 병원이 해당 보건 사업을 하는 "파트너" 병원인 경우 지원되는
            서비스입니다.
          </Text>
          <Box center style={{ marginTop: 12 }}>
            <Image
              style={{
                width: WIDTH - 45,
                height: 40,
                borderRadius: 5,
              }}
              source={require('../../../assets/img/profile/rect3.png')}
            />
            <Text
              bold
              color="#8B8B8B"
              style={{
                fontSize: 12,
                position: 'absolute',
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
            <Text bold color="white" style={{ fontSize: 20 }}>
              디즈니 애니메이션 특별전
            </Text>
            <Text color="white" style={{ marginTop: 4, fontSize: 11 }}>
              기대평을 달아주시면 추첨을 통해 10분을 초대합니다. (각 2매)
            </Text>
          </Box>
        </Box>
      </Box>
    );
  }
}
