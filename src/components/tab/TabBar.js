import React, { PureComponent } from 'react';
import { Box } from 'react-native-design-utility';
import TabItem from './TabItem';

export default class TabBar extends PureComponent {
  render() {
    const { navigation } = this.props;
    const { routes, index } = navigation.state;

    return (
      <Box h={100} bg="white" dir="row" shadow={1}>
        {routes.map((route, i) => (
          <TabItem
            navigation={navigation}
            key={route.routeName}
            {...route}
            isActive={index === i}
          />
        ))}
      </Box>
    );
  }
}
