import React, { PureComponent } from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Box, Text } from 'react-native-design-utility';

import { tabBarIcons } from '../../constants/images';

export default class TabItem extends PureComponent {
  handlePress = () => {
    this.props.navigation.navigate(this.props.routeName);
  };

  render() {
    const { routeName, isActive } = this.props;
    const icon = tabBarIcons[isActive ? 'active' : 'inactive'][routeName];

    return (
      <Box f={1} pt={5} pb="md" center>
        <TouchableOpacity onPress={this.handlePress} style={styles.button}>
          <Box mb={3}>
            <Image style={{ width: 28, height: 28 }} source={icon} />
          </Box>
          <Box>
            <Text size="sm" ls={0.12} color="greyDark" lowercase>
              {routeName}
            </Text>
          </Box>
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
