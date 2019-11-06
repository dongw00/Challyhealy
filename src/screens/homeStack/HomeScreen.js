import React, { Component } from 'react';
import { FlatList, Image, StyleSheet } from 'react-native';
import { Box, Text } from 'react-native-design-utility';

import Caroussel from '../../components/Caroussel';
import LogoTitle from '../../commons/LogoTitle';

import { theme } from '../../constants/theme';

export default class HomeScreen extends Component {
  static navigationOptions = {
    headerTitle: () => <LogoTitle />,
    headerStyle: {
      backgroundColor: '#fff',
      height: 100,
    },
    // headerRight: <ShoppingCartIcon />,
  };

  render() {
    return (
      <Box f={1}>
        <Box f={2} style={{ flexDirection: 'row' }}>
          <Box
            center
            f={1}
            style={{
              borderRightWidth: 2,
              borderColor: theme.color.greyLighter,
            }}>
            <Image
              style={{ width: 130, height: 105 }}
              source={require('../../../assets/img/main/chaly_head.png')}
            />
          </Box>
          <Box f={1} center>
            <Box f={2} center>
              <Image source={require('../../../assets/img/main/star.png')} />
            </Box>
            <Box f={1} center>
              <Text style={styles.rightFont}>
                챌리힐리와 함께 한지 <Text style={styles.rightFont2}>45</Text>
                일째
              </Text>
              <Text style={styles.rightFont}>
                칭찬뱃지 <Text style={styles.rightFont2}>216</Text>개 칭찬카드
                <Text style={styles.rightFont2}>50</Text>장
              </Text>
            </Box>
          </Box>
        </Box>
        <Box f={2} bg="white">
          <Caroussel />
        </Box>
      </Box>
    );
  }
}

const styles = StyleSheet.create({
  rightFont: {
    fontSize: 12,
    fontWeight: '600',
  },
  rightFont2: {
    fontSize: 12,
    fontWeight: '600',
    color: 'blue',
  },
});
