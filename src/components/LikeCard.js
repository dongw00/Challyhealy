import React, { PureComponent } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Box, Text } from 'react-native-design-utility';

import { NavigationService } from '../api/NavigationService';

export default class LikeCard extends PureComponent {
  _handlePress = () => {
    NavigationService.navigate('StoreList');
  };

  render() {
    const { id, title, price, image } = this.props;
    return (
      <TouchableOpacity onPress={this._handlePress}>
        <Box
          f={1}
          dir="row"
          style={{ borderBottomWidth: 2, borderBottomColor: '#E9EAEA' }}>
          <Image style={{ width: 82, height: 82 }} source={image} />
          <Box f={1} dir="row" justify="between" align="center">
            <Box f={1} dir="row" ml={5}>
              <Image
                style={{
                  width: 32,
                  resizeMode: 'contain',
                  marginLeft: 5,
                  marginRight: 5,
                }}
                source={require('../../assets/img/store/label1.png')}
              />
              <Text bold>{title}</Text>
            </Box>
            <Text bold mr={15}>
              {price}
            </Text>
          </Box>
        </Box>
      </TouchableOpacity>
    );
  }
}
