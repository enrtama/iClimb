/**
 *
 */

import React from 'react';
import { Button, Fab } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class FAB extends React.Component {

  state = { active: false }

  /**
   * render - description
   *
   * @return {type}  description
   */
   render() {
     return (
       <Fab
         active={this.state.active}
         direction="up"
         containerStyle={{bottom: 20}}
         position="bottomRight"
         onPress={() => this.setState({ active: !this.state.active })}>
         <Ionicons name="md-share" />
         <Button style={{ backgroundColor: '#4DC247' }}>
           <Ionicons
             name={'logo-whatsapp'}
             size={26}
             style={{color:'white'}}/>
         </Button>
         <Button style={{ backgroundColor: '#3B5998' }}>
           <Ionicons
             name={'logo-facebook'}
             size={26}
             style={{color:'white'}}/>
         </Button>
         <Button style={{ backgroundColor: '#DD4b39' }}>
           <Ionicons
             name={'ios-mail'}
             size={26}
             style={{color:'white'}}/>
         </Button>
       </Fab>
     )
  }
}
