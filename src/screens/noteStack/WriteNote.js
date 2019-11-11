import React, { Component } from 'react';
import { ScrollView, StyleSheet, Image, Dimensions } from 'react-native';
import { Box, Text } from 'react-native-design-utility';

import CancelButton2 from '../../commons/button/CancelButton2';

const { width: WIDTH } = Dimensions.get('window');

export default class WriteNote extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#fff',
      height: 70,
    },
    headerLeft: <CancelButton2 path={'Note'} />,
  };

  render() {
    return (
      <ScrollView>
        <Box m={30}>
          <Box f={1} dir="row" justify="between" alignItems="center">
            <Text bold>2019년 11월 13일</Text>
            <Image
              style={{ width: 30, resizeMode: 'contain' }}
              source={require('../../../assets/img/note/icon1.png')}
            />
          </Box>
          <Box f={1} dir="row" justify="between" alignItems="center" mt={30}>
            <Text bold>14:00</Text>
            <Box>
              <Text right bold>
                인하대 병원
              </Text>
              <Text bold>소아과 허준 선생님</Text>
            </Box>
          </Box>
          <Box
            mt={10}
            mb={40}
            style={{
              borderColor: '#F3F4F4',
              borderWidth: 1,
            }}
          />
          <Box>
            <Text bold size="sm" color="#7B7B7B" mb={10}>
              증상
              <Text bold size="sm" color="#E7E8E8">
                (+1)
              </Text>
            </Text>
            <Text bold>손가락 끝이</Text>
          </Box>
          <Box
            mt={10}
            mb={45}
            style={{
              borderColor: '#F3F4F4',
              borderWidth: 1,
            }}
          />

          <Box>
            <Text bold size="sm" color="#7B7B7B" mb={10}>
              진찰내용
              <Text bold size="sm" color="#E7E8E8">
                (+1)
              </Text>
            </Text>
            <Text bold>소변검사를 했더니 단백뇨 소견</Text>
          </Box>
          <Box
            mt={10}
            mb={45}
            style={{
              borderColor: '#F3F4F4',
              borderWidth: 1,
            }}
          />
          <Box center f={1} dir="row">
            <Image
              style={styles.startImage}
              source={require('../../../assets/img/note/star1.png')}
            />
            <Image
              style={styles.startImage}
              source={require('../../../assets/img/note/star2.png')}
            />
            <Image
              style={styles.startImage}
              source={require('../../../assets/img/note/star3.png')}
            />
            <Image
              style={styles.startImage}
              source={require('../../../assets/img/note/star4.png')}
            />
            <Image
              style={styles.startImage}
              source={require('../../../assets/img/note/star5.png')}
            />
          </Box>
          <Box center mt={28}>
            <Text size="sm" bold>
              병원 여정에서 하루 최대 7개의 별을 얻을 수 있어요.
            </Text>
          </Box>
          <Box center mt={28}>
            <Image
              style={styles.hospitalImage}
              source={require('../../../assets/img/note/photo1.png')}
            />
            <Image
              style={styles.hospitalImage}
              source={require('../../../assets/img/note/photo2.png')}
            />
            <Image
              style={styles.hospitalImage}
              source={require('../../../assets/img/note/photo3.png')}
            />
            <Box w={WIDTH - 25}>
              <Text right bold size="sm" color="#7B7B7B" mt={8}>
                사진
                <Text right bold size="sm" color="#E7E8E8">
                  (+3)
                </Text>
              </Text>
            </Box>
            <Box center mt={25}>
              <Image source={require('../../../assets/img/note/qrcode.png')} />
            </Box>
            <Box center mt={18}>
              <Text bold size="sm">
                (별 추가) 파트너 병원의 QR코드를 찍어주세요.
              </Text>
            </Box>
          </Box>
          <Box mt={30}>
            <Text bold size="sm" color="#7B7B7B" mb={10}>
              오늘의 창찬
              <Text bold size="sm" color="#E7E8E8">
                (+2)
              </Text>
            </Text>
            <Text bold mb={5} size="sm">
              1. 병원도 씩씩하게
            </Text>
            <Text bold size="sm">
              2. 약도 꾸준히
            </Text>
          </Box>
          <Box
            mt={30}
            style={{
              borderColor: '#F3F4F4',
              borderWidth: 1,
            }}
          />
          <Box center mt={18}>
            <Text bold size="sm">
              칭찬은 말로도 꼭 표현해주세요! 😀
            </Text>
          </Box>
          <Box center mt={25}>
            <Image
              style={{ width: WIDTH - 35, resizeMode: 'contain' }}
              source={require('../../../assets/img/note/rect2.png')}
            />
            <Text bold color="white" style={{ position: 'absolute' }}>
              저장하기
            </Text>
          </Box>
        </Box>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  scrollItem: {
    marginLeft: 40,
    marginTop: 30,
    marginRight: 35,
    marginBottom: 30,
  },
  startImage: {
    width: 34,
    resizeMode: 'contain',
    marginRight: 10,
  },
  hospitalImage: {
    width: WIDTH - 15,
    height: 160,
  },
});
