import React, { Component } from "react";
import { Image, ScrollView, FlatList, Dimensions } from "react-native";
import { Box, Text } from "react-native-design-utility";

import PreviousButton from "../../commons/button/PreviousButton";
import LikeButton from "../../commons/button/LikeButton";
import StoreCard from "../../components/StoreCard";

const { width: WIDTH } = Dimensions.get("window");

const dummy = [
  {
    id: 1,
    title: "키즈 영어책",
    price: "5,000 C",
    isDiscount: false,
    image: require("../../../assets/img/store/list_img1.png"),
    subImage: 1
  },
  {
    id: 2,
    title: "그림 동화책",
    price: "5,000 C",
    isDiscount: true,
    image: require("../../../assets/img/store/list_img2.png"),
    subImage: 2,
    discount: "10% 4,500 C"
  },
  {
    id: 3,
    title: "세계 문학 도서",
    price: "5,000 C",
    isDiscount: false,
    image: require("../../../assets/img/store/list_img3.png"),
    subImage: 1
  },
  {
    id: 4,
    title: "어린이 백팩",
    price: "5,000 C",
    isDiscount: false,
    image: require("../../../assets/img/store/list_img4.png"),
    subImage: 1
  },
  {
    id: 5,
    title: "색연필",
    price: "5,000 C",
    isDiscount: false,
    image: require("../../../assets/img/store/list_img5.png"),
    subImage: 1
  },
  {
    id: 6,
    title: "어린이 과학교재",
    price: "5,000 C",
    isDiscount: false,
    image: require("../../../assets/img/store/list_img6.png"),
    subImage: 2
  }
];

export default class StoreList extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: { height: 50 },
    title: "크래딧 스토어 목록",
    headerLeft: <PreviousButton path="Credit" />,
    headerRight: <LikeButton />
  });

  _renderItem = ({ item, idx }) => {
    return (
      <Box>
        <StoreCard {...item} />
      </Box>
    );
  };

  render() {
    const { navigation } = this.props;
    return (
      <Box>
        {/* 상단 카테고리 목록 */}
        <Box
          center
          dir="row"
          justify="between"
          w={WIDTH - 10}
          h={40}
          style={{ borderBottomWidth: 1, borderBottomColor: "#E9EAEA" }}
        >
          <Box f={1} center>
            <Image
              style={{ width: 52, resizeMode: "contain" }}
              source={require("../../../assets/img/store/CHALYHEALY_list.png")}
            />
            {!navigation.getParam("isSelected") ? (
              <Image
                style={{
                  width: 72,
                  resizeMode: "contain",
                  position: "absolute",
                  top: 20
                }}
                source={require("../../../assets/img/store/ilst_lline2.png")}
              />
            ) : (
              <Box></Box>
            )}
          </Box>
          <Box f={1} center>
            <Text bold style={{ fontSize: 12 }}>
              도서/학용품
            </Text>
          </Box>
          <Box f={1} center>
            <Text bold style={{ fontSize: 12 }}>
              인형/장난감
            </Text>
          </Box>
          <Box f={1} center>
            <Text bold style={{ fontSize: 12 }}>
              건강식품/보조제
            </Text>
          </Box>
        </Box>
        <ScrollView>
          <FlatList
            data={dummy}
            renderItem={this._renderItem}
            keyExtractor={item => item.id.toString()}
          />
        </ScrollView>
      </Box>
    );
  }
}
