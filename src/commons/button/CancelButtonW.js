import React, { PureComponent } from 'react';
import { Image } from 'react-native';
import HeaderButton from './HeaderButton';
import { NavigationService } from '../../api/NavigationService';

export default class CancelButtonW extends PureComponent {
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
          style={{ width: 18, height: 18 }}
          source={require('../../../assets/img/store/exit1.png')}
        />
      </HeaderButton>
    );
  }
}
