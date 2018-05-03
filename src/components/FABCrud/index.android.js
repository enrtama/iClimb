/**
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Button, Fab } from 'native-base';
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class FABCrud extends React.Component {

  state = { active: false }

  /**
   * render - description
   *
   * @return {type}  description
   */
   render() {
     const { onClick, position } = this.props;
     return (
       <Fab
         active={this.state.active}
         direction="up"
         style={styles.fab}
         containerStyle={{bottom: 20}}
         position={position}
         onPress={() => this.setState({ active: !this.state.active })}>
         <Ionicons name="md-settings" />
         <Button style={{ backgroundColor: '#4DC247', zIndex: 3 }} onPress={() => onClick('edit')}>
           <Ionicons
             name={'md-create'}
             size={26}
             style={{color:'white'}}/>
         </Button>
         <Button style={{ backgroundColor: '#3B5998', zIndex: 3 }} onPress={() => onClick('delete')}>
           <Ionicons
             name={'ios-trash-outline'}
             size={26}
             style={{color:'white'}}/>
         </Button>
       </Fab>
     )
  }
}

FABCrud.propTypes = {
  onClick: PropTypes.func,
  onClick: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  fab: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#007bff',
    zIndex: 3
  }
});
