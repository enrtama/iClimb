
/**
 *
 */

import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Gallery from 'react-native-image-gallery';

export default class ImageGallery extends React.Component {

  render() {
    return (
      <Gallery
        style={styles.gallery}
        images={[
          { source: { uri: 'http://i.imgur.com/XP2BE7q.jpg' } },
          { source: { uri: 'http://i.imgur.com/5nltiUd.jpg' } },
          { source: { uri: 'http://i.imgur.com/6vOahbP.jpg' } },
          { source: { uri: 'http://i.imgur.com/kj5VXtG.jpg' } }
        ]}
      />
    )
  }
}

const styles = StyleSheet.create({
  gallery: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    height: 460
  }
})
