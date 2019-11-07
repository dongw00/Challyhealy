import React, { Component } from 'react';
import { ScrollView, StyleSheet, Image } from 'react-native';
import { Box, Text } from 'react-native-design-utility';

import CancleButton from '../../commons/button/CancleButton';

export default class WriteNote extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#fff',
      height: 80,
    },
    headerLeft: <CancleButton path={'Note'} />,
  };

  render() {
    return (
      <ScrollView style={styles.scrollItem}>
        <Box style={styles.container}>
          <Text bold>2019년 11월 13일</Text>
          <Image
            style={{ width: 31, height: 31 }}
            source={require('../../../assets/img/note/icon1.png')}
          />
        </Box>
        <Box style={styles.secondContainer}>
          <Text bold>14:00</Text>
          <Box>
            <Text style={{ textAlign: 'right' }} bold>
              인하대 병원
            </Text>
            <Text bold>소아과 허준 선생님</Text>
          </Box>
        </Box>
        <Box
          style={{
            marginTop: 10,
            marginBottom: 40,
            borderColor: '#F3F4F4',
            borderWidth: 1,
          }}
        />
        <Box>
          <Text bold size="sm" style={{ color: '#7B7B7B', marginBottom: 10 }}>
            증상(+1)
          </Text>
          <Text bold>손가락 끝이</Text>
        </Box>
        <Box
          style={{
            marginTop: 10,
            marginBottom: 40,
            borderColor: '#F3F4F4',
            borderWidth: 1,
          }}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  secondContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 35,
  },
  scrollItem: {
    marginLeft: 40,
    marginTop: 30,
    marginRight: 35,
    marginBottom: 30,
  },
});
