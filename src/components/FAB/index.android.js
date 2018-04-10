/**
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Button, Fab } from 'native-base';
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class FAB extends React.Component {

  state = { active: false }

  /**
   * render - description
   *
   * @return {type}  description
   */
   render() {
     const { onClick } = this.props;
     return (
       <Fab
         active={this.state.active}
         direction="up"
         style={styles.fab}
         containerStyle={{bottom: 20}}
         position="bottomRight"
         onPress={() => this.setState({ active: !this.state.active })}>
         <Ionicons name="md-share" />
         <Button style={{ backgroundColor: '#4DC247', zIndex: 3 }} onPress={() => onClick('whatsapp')}>
           <Ionicons
             name={'logo-whatsapp'}
             size={26}
             style={{color:'white'}}/>
         </Button>
         <Button style={{ backgroundColor: '#3B5998', zIndex: 3 }} onPress={() => onClick('facebook')}>
           <Ionicons
             name={'logo-facebook'}
             size={26}
             style={{color:'white'}}/>
         </Button>
         <Button style={{ backgroundColor: '#DD4b39', zIndex: 3 }} onPress={() => onClick('mail')}>
           <Ionicons
             name={'ios-mail'}
             size={26}
             style={{color:'white'}}/>
         </Button>
       </Fab>
     )
  }
}

FAB.propTypes = {
  onClick: PropTypes.func,
  onClick: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  fab: {
    flex: 1,
    position: 'absolute',
    zIndex: 3
  }
});
