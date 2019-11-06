import React, { Component } from 'react';
import { Image } from 'react-native';

import { Box } from 'react-native-design-utility';

export default class LogoTitle extends Component {
  render() {
    return (
      <Box f={1} center style={{ marginTop: 10, marginBottom: 10 }}>
        <Image
          source={require('../../assets/img/logo/CHALYHEALY(챌리힐리)_BI(한글).png')}
          style={{ width: 120, height: 35 }}
        />
      </Box>
    );
  }
}
