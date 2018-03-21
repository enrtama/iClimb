/**
 *
 */

import React from 'react';
import { Body, Thumbnail, Text, Card, CardItem, Left, Button } from 'native-base';
import { StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class CardShowcase extends React.Component {

  /**
   * render - description
   *
   * @return {type}  description
   */
   render() {
     const { event } = this.props;
     return (
       <Card style={styles.card}>
         <CardItem>
           <Left>
             <Thumbnail source={{uri: event.thumbnail}} />
             <Body>
               <Text>{event.title}</Text>
               <Text note>{event.date}</Text>
             </Body>
           </Left>
         </CardItem>
         <CardItem>
           <Body>
             <Image source={{uri: event.thumbnail}} style={{height: 200, width: 200, flex: 1}}/>
             <Text>{event.description}</Text>
           </Body>
         </CardItem>
         <CardItem>
           <Left>
             <Button transparent textStyle={{color: '#87838B'}}>
               <Ionicons
                 name={'ios-star'}
                 size={26}/>
               <Text>1,926 stars</Text>
             </Button>
           </Left>
         </CardItem>
       </Card>
     )
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 0
  }
});
