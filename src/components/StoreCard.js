import React, { PureComponent } from "react";
import { Image, TouchableOpacity } from "react-native";
import { Box, Text } from "react-native-design-utility";

import { NavigationService } from "../api/NavigationService";

const label = [
  require("../../assets/img/store/label1.png"),
  require("../../assets/img/store/label2.png")
];

export default class StoreCard extends PureComponent {
  _handlePress = () => {
    NavigationService.navigate("asd");
  };

  render() {
    const {
      id,
      title,
      price,
      image,
      subImage,
      isDiscount,
      discount
    } = this.props;
    return (
      <TouchableOpacity onPress={this._handlePress}>
        <Box
          f={1}
          dir="row"
          style={{ borderBottomWidth: 1, borderBottomColor: "#E9EAEA" }}
        >
          <Image style={{ width: 94, height: 94 }} source={image} />
          <Box f={1} dir="column" ml={13}>
            <Image
              style={{
                width: 30,
                resizeMode: "contain",
                marginTop: 7,
                marginBottom: 4
              }}
              source={subImage === 1 ? label[0] : label[1]}
            />
            <Text bold style={{ fontSize: 14.5 }}>
              {title}
            </Text>
            {!isDiscount ? (
              <Text
                color={subImage === 1 ? "#3EB1DF" : "#63B89F"}
                style={{ fontSize: 13 }}
              >
                {price}
              </Text>
            ) : (
              <Box f={1} dir="row">
                <Text
                  color={subImage === 1 ? "#3EB1DF" : "#63B89F"}
                  style={{ fontSize: 13, textDecorationLine: "line-through" }}
                >
                  {price}{" "}
                </Text>
                <Text
                  color="red"
                  style={{ fontSize: 13, textDecorationLine: "none" }}
                >
                  {discount}
                </Text>
              </Box>
            )}
          </Box>
          <Image
            style={{
              width: 18,
              resizeMode: "contain",
              position: "absolute",
              top: 8,
              right: 8
            }}
            source={require("../../assets/img/store/like1.png")}
          />
        </Box>
      </TouchableOpacity>
    );
  }
}
