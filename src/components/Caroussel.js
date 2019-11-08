import React, { PureComponent } from 'react';
import { Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Box } from 'react-native-design-utility';

const { width: WIDTH } = Dimensions.get('window');
const { height: HEIGHT } = Dimensions.get('screen');

import cBox from '../../assets/img/caroussel/slide_circle1.png';
import eBox from '../../assets/img/caroussel/slide_circle2.png';

const images = [
  require('../../assets/img/caroussel/main_image1.png'),
  require('../../assets/img/caroussel/main_image2.png'),
  require('../../assets/img/caroussel/main_image3.png'),
];

const DOT_SIZE = 8;
const TIME = 5000;

export default class Caroussel extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentIdx: 0,
    };

    this.scrollView = React.createRef();
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this._handleScroll();
    }, TIME);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  /* Auto image slider */
  _handleScroll = () => {
    const newIdx = this.state.currentIdx + 1;

    if (newIdx < images.length) {
      this.scrollView.current.scrollTo({
        x: newIdx * WIDTH,
        animated: true,
      });
      this.setState({ currentIdx: newIdx });
    } else {
      this.scrollView.current.scrollTo({
        x: 0,
        animated: true,
      });
      this.setState({ currentIdx: 0 });
    }
  };

  _onScroll = event => {
    const { contentOffset } = event.nativeEvent;
    const currentIdx = Math.round(contentOffset.x / WIDTH);

    if (this.state.currentIdx !== currentIdx) this.setState({ currentIdx });
  };

  render() {
    return (
      <Box>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          scrollEventThrottle={16}
          ref={this.scrollView}
          onScroll={this._onScroll}>
          {images.map((img, idx) => (
            <Box key={idx} position="relative" style={styles.boxContainer}>
              <Image
                style={{ width: WIDTH, resizeMode: 'cover' }}
                source={img}
              />
            </Box>
          ))}
        </ScrollView>
        <Box
          style={{
            width: WIDTH,
            bottom: 8,
          }}
          position="absolute"
          dir="row"
          justify="center">
          {Array.from({ length: images.length }).map((_, idx) => (
            <Image
              key={idx}
              source={this.state.currentIdx === idx ? cBox : eBox}
              style={{ width: 24, resizeMode: 'contain' }}
            />
          ))}
        </Box>
      </Box>
    );
  }
}

const styles = StyleSheet.create({
  boxContainer: {
    width: WIDTH,
    resizeMode: 'cover',
  },
});
