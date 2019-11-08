import React, { PureComponent } from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Box, Text } from 'react-native-design-utility';

import { tabBarIcons } from '../../constants/images';

function tabName(routeName) {
  switch (routeName) {
    case 'Home':
      return '홈';
    case 'Note':
      return '노트';
    case 'Praise':
      return '칭찬';
    case 'Disease':
      return '질병';
  }
}

export default class TabItem extends PureComponent {
  handlePress = () => {
    this.props.navigation.navigate(this.props.routeName);
  };

  render() {
    const { routeName, isActive } = this.props;
    const icon = tabBarIcons[routeName];

    return (
      <Box f={1} center>
        <TouchableOpacity onPress={this.handlePress} style={styles.button}>
          <Image style={{ height: 28, resizeMode: 'contain' }} source={icon} />
          <Text style={{ marginTop: 8, fontSize: 15 }}>
            {tabName(routeName)}
          </Text>
        </TouchableOpacity>
      </Box>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
