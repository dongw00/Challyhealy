import React, { Component } from "react";
import { Image } from "react-native";
import { Box, Text } from "react-native-design-utility";
import { AppLoading, SplashScreen } from "expo";

import Navigation from "./src/screens";
import { Asset } from "expo-asset";
import { tabBarIcons } from "./src/constants/images";

export default class App extends Component {
  state = {
    isSplashReady: false,
    isAppReady: false
  };

  _cacheSplashResourcesAsync = async () => {
    const gif = require("./assets/splash.gif");
    return Asset.fromModule(gif).downloadAsync();
  };

  _cacheAssets = async () => {
    SplashScreen.hide();
    const images = this._cacheImages([...Object.values(tabBarIcons)]);

    await Promise.all(images);
    setTimeout(() => {
      this.setState({ isAppReady: true });
    }, 3000);
  };

  _cacheImages(images) {
    return images.map(image => {
      if (typeof image === "string") {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
  }

  _handleError = error => {
    console.warn(error);
  };

  _handleFinish = () => {
    this.setState({ isLoading: true });
  };

  render() {
    if (!this.state.isSplashReady) {
      return (
        <AppLoading
          startAsync={this._cacheSplashResourcesAsync}
          onFinish={() => this.setState({ isSplashReady: true })}
          onError={this._handleError}
          autoHideSplash={false}
        />
      );
    }

    if (!this.state.isAppReady) {
      return (
        <Box f={1} center>
          <Image
            source={require("./assets/splash.gif")}
            onLoad={this._cacheAssets}
          />
        </Box>
      );
    }

    return <Navigation />;
  }
}
