import React, { PureComponent } from 'react';
import { Image } from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import HeaderButton from './HeaderButton';
import { NavigationService } from '../../api/NavigationService';

export default class PreviousButton extends PureComponent {
  constructor(props) {
    super(props);
  }
  onNavigation = () => {
    NavigationService.navigate(this.props.path);
  };

  render() {
    return (
      <HeaderButton left onPress={this.onNavigation}>
        <Image
          style={{ height: 22, resizeMode: 'contain' }}
          source={require('../../../assets/img/coupon/back.png')}
        />
      </HeaderButton>
    );
  }
}
