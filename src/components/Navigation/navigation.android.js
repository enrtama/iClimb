import React, { Component } from 'react'
import { Button, Text } from 'native-base';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-navigation';

const Navigation = ({ navigation, banner }) => (
  <SafeAreaView forceInset={{ horizontal: 'always', top: 'always' }}>
    <Text>{banner}</Text>
    <Button
      onPress={() => navigation.navigate('Home')}
      title="Go to home tab"
    />
    <Button
      onPress={() => navigation.navigate('Chats')}
      title="Go to chats tab"
    />
    <Button onPress={() => navigation.goBack(null)} title="Go back" />
    <StatusBar barStyle="default" />
  </SafeAreaView>
)

export default Navigation;
