import React, { Component } from "react";
import { Image } from "react-native";

import { Box } from "react-native-design-utility";

export default class LogoTitle extends Component {
  render() {
    return (
      <Box center style={{ marginTop: 11, marginBottom: 10 }}>
        <Image
          source={require("../../assets/img/logo/HomeLogo.png")}
          style={{ resizeMode: "contain", width: 110 }}
        />
      </Box>
    );
  }
}
