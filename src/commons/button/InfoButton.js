import React, { PureComponent } from 'react';
import { Image } from 'react-native';
import HeaderButton from './HeaderButton';
import { NavigationService } from '../../api/NavigationService';

export default class InfoButton extends PureComponent {
  onNavigate = () => {
    NavigationService.navigate('Profile');
  };

  render() {
    return (
      <HeaderButton right onPress={this.onNavigate}>
        <Image
          style={{ resizeMode: 'contain', height: 24 }}
          source={require('../../../assets/img/header/info.png')}
        />
      </HeaderButton>
    );
  }
}
