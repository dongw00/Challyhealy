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
      <Box center style={{ marginTop: 10 }}>
        <Image
          style={{
            width: 320,
            height: 60,
            shadowColor: theme.color.greyLighter,
          }}
          source={require('../../../assets/img/disease/rect1.png')}
        />
        <Text
          bold
          style={{
            fontSize: 13,
            position: 'absolute',
            top: 15,
            left: 53,
            color: '#939393',
          }}>
          검색어를 넣어주세요. (질병명, 증상 등)
        </Text>
        <Image
          style={{ position: 'absolute', right: 27, width: 45, height: 45 }}
          source={require('../../../assets/img/disease/find.png')}
        />
      </Box>
    );
  }
}
