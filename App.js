import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';

import Navigation from './src/screens';

export default class App extends Component {
  state = {
    isReady: true,
  };

  // _cacheAssets = async () => {
  //   const imagesAssets = cacheImages([
  //     ...Object.values(images),
  //     ...Object.values(tabBarIcons.active),
  //     ...Object.values(tabBarIcons.inactive),
  //   ]);

  //   await Promise.all([...imagesAssets]);

  //   this.setState({ isReady: true });
  // };

  _handleError = error => {
    console.warn(error);
  };

  _handleFinish = () => {
    this.setState({ isLoading: true });
  };

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          // startAsync={this._chacheAssets}
          onError={this._handleError}
          onFinish={this._handleFinish}
        />
      );
    } else {
      return <Navigation />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
