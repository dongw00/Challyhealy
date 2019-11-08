import React, { PureComponent } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Box, Text } from 'react-native-design-utility';

import { NavigationService } from '../api/NavigationService';

export default class CouponCard extends PureComponent {
  _handlePress = () => {
    NavigationService.navigate('Store');
  };

  render() {
    const { id, title, subTitle, image } = this.props;
    return (
      <TouchableOpacity
        onPress={this._handlePress}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Box center>
          <Image
            style={{
              width: 180,
              height: 320,
              shadowColor: '#000',
              shadowOpacity: 0.27,
              shadowOffset: {
                width: 1,
                height: 3,
              },
              shadowRadius: 4.6,
            }}
            source={require('../../assets/img/coupon/rect1.png')}
          />
          <Box center f={1} dir="col" position="absolute" style={{ top: 20 }}>
            <Image
              style={{
                width: 24,
                resizeMode: 'contain',
                marginBottom: 8,
              }}
              source={
                id === 1 || id === 2
                  ? require('../../assets/img/coupon/circle1.png')
                  : require('../../assets/img/coupon/circle2.png')
              }
            />
            <Text bold style={{ fontSize: 19 }}>
              {title}
            </Text>
            <Text bold style={{ fontSize: 18.5, marginTop: 6 }}>
              {subTitle}
            </Text>
            <Image
              style={{
                width: 155,
                resizeMode: 'contain',
              }}
              source={image}
            />
            <Box
              f={1}
              dir="row"
              align="center"
              justify="center"
              style={{ marginTop: -10 }}>
              <Text>사용하기 | </Text>
              <Text>선물하기</Text>
            </Box>
          </Box>
        </Box>
      </TouchableOpacity>
    );
  }
}
