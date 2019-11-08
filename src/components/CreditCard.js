import React, { PureComponent } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Box, Text } from 'react-native-design-utility';

import { NavigationService } from '../api/NavigationService';

const icons = [
  {
    img: require('../../assets/img/store/heart1.png'),
  },
  {
    img: require('../../assets/img/store/heart2.png'),
  },
  {
    img: require('../../assets/img/store/heart3.png'),
  },
];

export default class CreditCard extends PureComponent {
  _handlePress = () => {
    NavigationService.navigate('Store');
  };

  render() {
    const { id, title } = this.props;
    return (
      <TouchableOpacity
        onPress={this._handlePress}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Box center>
          <Image
            style={{ width: 110, resizeMode: 'contain' }}
            source={require('../../assets/img/store/rect2.png')}
          />
          <Box center f={1} style={{ position: 'absolute' }}>
            <Image
              style={{ height: 26, resizeMode: 'contain' }}
              source={
                title !== '칠리힐리' && title !== '선물랭킹'
                  ? icons[0].img
                  : title === '칠리힐리'
                  ? icons[1].img
                  : icons[2].img
              }
            />
            <Box center>
              {title == '칠리힐리' ? (
                <Image
                  style={{ marginTop: 10, width: 52, resizeMode: 'contain' }}
                  source={require('../../assets/img/store/CHALYHEALY_list.png')}
                />
              ) : (
                <Text
                  bold
                  color="#303030"
                  style={{ fontSize: 12, marginTop: 7 }}>
                  {title}
                </Text>
              )}
            </Box>
          </Box>
        </Box>
      </TouchableOpacity>
    );
  }
}
