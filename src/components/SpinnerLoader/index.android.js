
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Spinner } from 'native-base';

const SpinnerLoader = () => (
 <View style={styles.spinner}><Spinner /></View>
)

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default SpinnerLoader;
