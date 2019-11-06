import React, { PureComponent } from 'react';
import { Image } from 'react-native';
import HeaderButton from './HeaderButton';
import { NavigationService } from '../../api/NavigationService';

export default class HomeButton extends PureComponent {
  onNavigate = () => {
    NavigationService.navigate('Home');
  };

  render() {
    return (
      <HeaderButton left onPress={this.onNavigate}>
        <Image
          style={{ width: 25, height: 25 }}
          source={require('../../../assets/img/header/home.png')}
        />
      </HeaderButton>
    );
  }
}
