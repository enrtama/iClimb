import React from 'react';
// import { send, subscribe } from 'react-native-training-chat-server';
import { StyleSheet, Text, View, FlatList, TextInput, KeyboardAvoidingView, TouchableOpacity, Image } from 'react-native';

import Header from './Header.android'

const NAME = 'Enrique Tamames';
const CHANNEL = 'Reactivate';
const AVATAR = 'https://pbs.twimg.com/profile_images/806501058679816192/ZHFWIF-z_400x400.jpg';

export default class ChatContainer extends React.Component {

  // state = { messages: [], typing: "" }
  //
  // componentDidMount() {
  //   subscribe(CHANNEL, messages => {
  //     this.setState({messages});
  //   });
  // }
  //
  // async sendMessage() {
  //   // send message to our channel, with sender name.
  //   // the `await` keyword means this function execution
  //   // waits until the message is sent
  //   await send({
  //     channel: CHANNEL,
  //     sender: NAME,
  //     avatar: AVATAR,
  //     message: this.state.typing
  //   });
  //
  //   // set the component state (clears text input)
  //   this.setState({
  //     typing: '',
  //   });
  // }
  //
  // renderItem({item}) {
  //   return (
  //     <View style={styles.row}>
  //       <Image style={styles.avatar} source={{uri: item.avatar}} />
  //       <View style={styles.rowText}>
  //         <Text style={styles.sender}>{item.sender}</Text>
  //         <Text style={styles.message}>{item.message}</Text>
  //       </View>
  //     </View>
  //   )
  // }

  render() {
    return (
      <View style={styles.container}>
        <Header title={CHANNEL} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  message: {
    fontSize: 18
  },
  sender: {
    fontWeight: 'bold',
    paddingRight: 10
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#eee',
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 18,
    flex: 1,
  },
  send: {
    alignSelf: 'center',
    color: 'lightseagreen',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 20
  },
  avatar: {
    borderRadius: 20,
    width: 40,
    height: 40,
    marginRight: 10
  },
  rowText: {
    flex: 1
  }
})
