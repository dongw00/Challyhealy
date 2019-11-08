import React, { PureComponent } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Box, Text } from 'react-native-design-utility';

import { NavigationService } from '../api/NavigationService';

export default class CategoryCard extends PureComponent {
  _handlePress = () => {
    console.log(this.props.url);
    NavigationService.navigate(this.props.url == '' ? 'Home' : this.props.url);
  };

  render() {
    const { title, image } = this.props;
    return (
      <TouchableOpacity
        onPress={this._handlePress}
        style={{ flex: 1, margin: 1 }}>
        <Box center f={1}>
          <Image style={{ height: 38, resizeMode: 'contain' }} source={image} />
          <Text style={{ marginTop: 6, fontSize: 12 }} bold color="#303030">
            {title}
          </Text>
        </Box>
      </TouchableOpacity>
    );
  }
}
