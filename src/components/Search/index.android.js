
/**
 *
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import SearchInput from 'react-native-search-filter'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class ImageGallery extends React.Component {

  render() {
    return (
      <SearchInput
        onChangeText={(term) => { this.props.callback(term) }}
        style={styles.searchInput}
        placeholder="Search..."
        fuzzy={true}
        clearIcon={<Ionicons
          name={'ios-close'}
          size={32}
          style={styles.clearIcon}/>}/>
    )
  }
}

const styles = StyleSheet.create({
  searchInput:{
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderColor: '#CCC',
    borderWidth: 1
  },
  clearIcon: {
    marginTop: -8,
    color:'black'
  }
})
