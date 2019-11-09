import React, { PureComponent } from 'react';
import { Image } from 'react-native';
import HeaderButton from './HeaderButton';
import { NavigationService } from '../../api/NavigationService';

export default class CancleButton2 extends PureComponent {
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
          style={{ width: 18, resizeMode: 'contain' }}
          source={require('../../../assets/img/note/exit.png')}
        />
      </HeaderButton>
    );
  }
}
