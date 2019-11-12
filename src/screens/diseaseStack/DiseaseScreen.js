import React, { Component } from 'react';
import { Image } from 'react-native';
import { Box, Text } from 'react-native-design-utility';

import LogoTitle from '../../commons/LogoTitle';
import HomeButton from '../../commons/button/HomeButton';
import InfoButton from '../../commons/button/InfoButton';
import { theme } from '../../constants/theme';

export default class DiseaseScreen extends Component {
  static navigationOptions = {
    headerTitle: () => <LogoTitle />,
    headerStyle: {
      backgroundColor: '#fff',
      height: 80,
    },
    headerRight: <InfoButton />,
  };

  render() {
    return (
      <Box>
        <Box center>
          <Image
            style={{
              width: 360,
              resizeMode: 'contain',
              shadowColor: theme.color.greyLighter,
            }}
            source={require('../../../assets/img/disease/rect1.png')}
          />
          <Image
            style={{
              position: 'absolute',
              right: 27,
              width: 45,
              resizeMode: 'contain',
            }}
            source={require('../../../assets/img/disease/find.png')}
          />
        </Box>
        <Text
          color="#939393"
          bold
          style={{
            top: 25,
            left: 60,
            fontSize: 14,
            position: 'absolute',
          }}>
          검색어를 넣어주세요. (질병명, 증상 등)
        </Text>
      </Box>
    );
  }
}
