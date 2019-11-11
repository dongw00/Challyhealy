import React, { PureComponent } from 'react';
import { Image } from 'react-native';
import HeaderButton from './HeaderButton';
import { NavigationService } from '../../api/NavigationService';

export default class CancelButton extends PureComponent {
  constructor(props) {
    super(props);
  }
  onNavigation = () => {
    NavigationService.navigate(this.props.path);
  };

  render() {
    return (
      <HeaderButton right onPress={this.onNavigation}>
        <Image
          style={{ width: 16, height: 16 }}
          source={require('../../../assets/img/note/exit.png')}
        />
      </HeaderButton>
    );
  }
}
