/**
 *
 */

import React from 'react';
import { Container, Header, Content, List, ListItem, Body, Thumbnail, Text } from 'native-base';
import { StyleSheet } from 'react-native';

export default class ListItems extends React.Component {

  /**
   * render - description
   *
   * @return {type}  description
   */
   render() {
     const { items, navigation } = this.props;
     return (
       <List dataArray={items}
         renderRow={(item) =>
           <ListItem key={item.id} onPress={() => navigation.push('EventItem', { id: item.id, title: item.title })}>
             <Thumbnail size={80} source={{ uri: item.thumbnail }} />
              <Body>
                <Text>{item.title}</Text>
                <Text note numberOfLines={2}>{item.description}</Text>
              </Body>
           </ListItem>
         }>
       </List>
     )
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1
  }
});
