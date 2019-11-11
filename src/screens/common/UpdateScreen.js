import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import { Text, Box } from 'react-native-design-utility';

import CancelButton from '../../commons/button/CancelButton';

const { width: WIDTH } = Dimensions.get('window');
const { height: HEIGHT } = Dimensions.get('screen');

export default class UpdateScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTransparent: true,
    headerStyle: { height: 63, borderBottomWidth: 0 },
    headerLeft: null,
    headerRight: <CancelButton path="Profile" />,
  });

  render() {
    return (
      <Box w={WIDTH} h={HEIGHT} align="center" justify="center">
        <Image
          style={{ width: '68%', resizeMode: 'contain' }}
          source={require('../../../assets/img/loading/intro16.png')}
        />
        <Box center mt={45}>
          <Text bold mb={3}>
            업데이트 중입니다.
          </Text>
          <Text bold>조금만 기다려주세요!</Text>
        </Box>
      </Box>
    );
  }
}
