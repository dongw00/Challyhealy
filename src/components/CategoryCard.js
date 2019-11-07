import React, { PureComponent } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Box, Text } from 'react-native-design-utility';

import { NavigationService } from '../api/NavigationService';

const icons = [
  {
    img: require('../../assets/img/note/icon1.png'),
  },
  {
    img: require('../../assets/img/note/icon2.png'),
  },
  {
    img: require('../../assets/img/note/exit.png'),
  },
];

export default class CategoryCard extends PureComponent {
  _handlePress = () => {
    NavigationService.navigate('WriteNote', { name: this.props.title });
  };

  render() {
    const { id, title } = this.props;
    return (
      <TouchableOpacity
        onPress={this._handlePress}
        style={{ flex: 1, margin: 3 }}>
        <Box center f={1} bg="white" style={{ borderRadius: 10 }}>
          <Box center mb="sm">
            <Image
              style={{ width: 46, height: 46 }}
              source={
                id % 2 === 0 && id != 12
                  ? icons[0].img
                  : id === 12
                  ? icons[2].img
                  : icons[1].img
              }
            />
          </Box>
          <Box center>
            <Text size="sm" bold color="#303030">
              {title}
            </Text>
          </Box>
        </Box>
      </TouchableOpacity>
    );
  }
}
