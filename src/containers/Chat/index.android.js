
/**
 *
 */

import React from 'react';
import KeyboardSpacer from 'react-native-keyboard-spacer'
import { GiftedChat } from 'react-native-gifted-chat'
import { StyleSheet, Text, View, LayoutAnimation } from 'react-native';

import Header from './Header.android'

const NAME = 'Enrique Tamames';
const CHANNEL = 'Reactivate';
const AVATAR = 'https://pbs.twimg.com/profile_images/806501058679816192/ZHFWIF-z_400x400.jpg';

const CustomLayoutSpring = {
  duration: 400,
  create: {
    type: LayoutAnimation.Types.spring,
    property: LayoutAnimation.Properties.scaleXY,
    springDamping: 0.7,
  },
  update: {
    type: LayoutAnimation.Types.spring,
    springDamping: 0.7,
  },
}

const KEYBOARD_OFFSET = -50

export default class ChatContainer extends React.Component {

  state = { messages: [] }

  /**
   * componentWillMount - description
   *
   * @return {type}  description
   */
  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
      ],
    });
  }

  /**
   * onSend - description
   *
   * @param  {type} messages = [] description
   * @return {type}               description
   */
  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  /**
   * render - description
   *
   * @return {type}  description
   */
  render() {
    return (
        <View style={{flex: 1}}>
          <Header title={CHANNEL} />
          <GiftedChat
            messages={this.state.messages}
            isAnimated={true}
            onSend={(messages) => this.onSend(messages)}
            user={{
             _id: 1
            }}
          />
          <KeyboardSpacer topSpacing={KEYBOARD_OFFSET} animationConfig={LayoutAnimation.configureNext(CustomLayoutSpring)}/>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
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
