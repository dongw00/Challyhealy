import React, { PureComponent } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Box, Text } from 'react-native-design-utility';

import { NavigationService } from '../api/NavigationService';

export default class PraiseCard extends PureComponent {
  _handlePress = () => {
    NavigationService.navigate('main');
  };

  render() {
    const { image } = this.props;
    return (
      <TouchableOpacity onPress={this._handlePress} style={{ flex: 1 }}>
        <Image style={{ width: 125, height: 125 }} source={image} />
      </TouchableOpacity>
    );
  }
}
