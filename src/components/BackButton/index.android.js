
/**
 *
 */

import React from 'react';
import { StyleSheet,  } from 'react-native';

class MyBackButton extends React.Component<any, any> {

  _navigateBack = () => {
    this.props.navigation.goBack(null);
  }

  render() {
    return (
      <TouchableOpacity onPress={this._navigateBack}><Text>Back</Text></TouchableOpacity>
    );
  }
}
