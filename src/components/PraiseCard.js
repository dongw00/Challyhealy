import React, { PureComponent } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Box, Text } from 'react-native-design-utility';

import { NavigationService } from '../api/NavigationService';

export default class PraiseCard extends PureComponent {
  state = {
    isClick: false,
  };

  _handlePress = () => {
    this.setState({
      isClick: !this.state.isClick,
    });
  };

  render() {
    const { image } = this.props;
    return (
      <TouchableOpacity onPress={this._handlePress} style={{ flex: 1 }}>
        {!this.state.isClick ? (
          <Image style={{ width: 125, height: 125 }} source={image} />
        ) : (
          <Box center>
            <Image
              style={{
                width: 125,
                height: 125,
                opacity: 0.4,
              }}
              source={image}
            />
            <Box center position="absolute">
              <Image
                style={{
                  width: 38,
                  resizeMode: 'contain',
                }}
                source={require('../../assets/img/praise/star.png')}
              />
              <Text
                bold
                color="white"
                style={{ top: 9, position: 'absolute', fontSize: 17 }}>
                +5
              </Text>
              <Text bold style={{ fontSize: 17 }}>
                병원
              </Text>
            </Box>
          </Box>
        )}
      </TouchableOpacity>
    );
  }
}
