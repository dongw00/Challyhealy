import React, { PureComponent } from 'react';
import { Image } from 'react-native';
import HeaderButton from './HeaderButton';
import { NavigationService } from '../../api/NavigationService';

export default class CancleButton extends PureComponent {
  onNavigation = () => {
    NavigationService.navigate('Note');
  };

  render() {
    return (
      <HeaderButton left onPress={this.onNavigation}>
        <Image
          style={{ width: 20, height: 20 }}
          source={require('../../../assets/img/note/exit.png')}
        />
      </HeaderButton>
    );
  }
}
