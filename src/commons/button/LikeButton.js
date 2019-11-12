import React, { PureComponent } from "react";
import { Image } from "react-native";
import HeaderButton from "./HeaderButton";
import { NavigationService } from "../../api/NavigationService";

export default class LikeButton extends PureComponent {
  onNavigate = () => {
    NavigationService.navigate("LikeList");
  };

  render() {
    return (
      <HeaderButton right onPress={this.onNavigate}>
        <Image
          style={{ resizeMode: "contain", height: 20 }}
          source={require("../../../assets/img/header/like.png")}
        />
      </HeaderButton>
    );
  }
}
