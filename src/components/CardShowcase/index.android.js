/**
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Body, Thumbnail, Text, Card, CardItem, Left, Button } from 'native-base';
import { StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Coordinate = {
  latitude: number,
  longitude: number
}

type Event = {
  coordinate: Coordinate,
  date: string,
  id: number,
  location: string,
  thumbnail: string,
  title: string
}

type Props = {
  item: Event
}

export default class CardShowcase extends React.Component<Props> {

  /**
   * render - description
   *
   * @return {type}  description
   */
   render() {
     const { item } = this.props;
     return (
       <Card style={styles.card}>
         <CardItem>
           <Left>
             <Thumbnail source={{uri: item.thumbnail}} />
             <Body>
               <Text>{item.title}</Text>
               <Text note>{item.date}</Text>
             </Body>
           </Left>
         </CardItem>
         <CardItem>
           <Body>
             <Image source={{uri: item.thumbnail}} style={{height: 200, width: 200, flex: 1}}/>
             <Text>{item.description}</Text>
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

CardShowcase.propTypes = {
  item: PropTypes.object,
  item: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
  card: {
    flex: 0
  }
});
