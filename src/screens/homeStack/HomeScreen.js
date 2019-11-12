import React, { Component } from 'react';
import { FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Box, Text } from 'react-native-design-utility';

import Caroussel from '../../components/Caroussel';
import HomeLogo from '../../commons/HomeLogo';
import InfoButton from '../../commons/button/InfoButton';

import { theme } from '../../constants/theme';
import { NavigationService } from '../../api/NavigationService';

export default class HomeScreen extends Component {
  static navigationOptions = {
    headerTitle: <HomeLogo />,
    headerStyle: {
      backgroundColor: '#fff',
      height: 110,
    },
    headerRight: <InfoButton />,
  };

  _handlePress = () => {
    NavigationService.navigate('Praise');
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
              style={{ resizeMode: 'contain', width: 130 }}
              source={require('../../../assets/img/main/chaly_head.png')}
            />
            <Box
              center
              w={95}
              h={27}
              bg="#B5B5B5"
              align="center"
              justify="center"
              style={{ borderRadius: 30 }}>
              <Text color="white" style={{ fontSize: 12.5 }}>
                칭찬모드 ON
              </Text>
            </Box>
          </Box>
          <Box f={1}>
            <Box f={2} center>
              <TouchableOpacity onPress={this._handlePress}>
                <Box center>
                  <Image
                    style={{ marginTop: 30 }}
                    source={require('../../../assets/img/main/star.png')}
                  />
                  <Text style={{ marginTop: 10, fontSize: 14 }} bold center>
                    9 / 10
                  </Text>
                  <Box
                    mt={10}
                    w={150}
                    mb={10}
                    style={{
                      borderColor: '#F3F4F4',
                      borderWidth: 1,
                    }}
                  />
                </Box>
              </TouchableOpacity>
            </Box>
            <Box f={1.5} center>
              <Text style={styles.rightFont}>
                챌리힐리와 함께 한지 <Text style={styles.rightFont2}>45</Text>
                일째
              </Text>
              <Text style={styles.rightFont}>
                칭찬뱃지 <Text style={styles.rightFont3}>216</Text>개 칭찬카드
                <Text style={styles.rightFont3}> 50</Text>장
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
    color: '#4DB7E1',
  },
  rightFont3: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6ABBA2',
  },
});
