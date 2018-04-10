
/**
 *
 */

import React from 'react';
import { Content, Container, Segment, Button, Fab, Toast } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StyleSheet, View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CardShowcase from '../../components/CardShowcase/index.android'
import Map from '../../components/Map/index.android'
import Gallery from '../../components/Gallery/index.android'
import FAB from '../../components/FAB/index.android'

const VIEWS = {
  INFO: "info",
  LOCATION: "location",
  GALLERY: "gallery"
}

export default class EventContainer extends React.Component {

  state = { currentView: "info", showToast: false }

  /**
   * renderContent - description
   *
   * @param  {type} view description
   * @return {type}      description
   */
  renderContent(view) {
    const eventItem = this.props.navigation.state.params.event
    switch(view) {
      case VIEWS.INFO:
        return <CardShowcase item={eventItem} />
        break;
      case VIEWS.LOCATION:
        return <Map item={eventItem} />
        break;
      case VIEWS.GALLERY:
        return <Gallery />
        break;
      default:
        return <CardShowcase item={eventItem} />
    }
  }

  /**
   * render - description
   *
   * @return {type}  description
   */
  render() {
    const { navigation } = this.props;
    const { currentView } = this.state;
    return (
      <Container>
        <Segment style={styles.segments}>
          <Button
          first
          active={currentView == "info"}
          onPress={() => this.setState({ currentView: "info" })}>
            <Text>{VIEWS.INFO}</Text>
          </Button>
          <Button
          active={currentView == "location"}
          onPress={() => this.setState({ currentView: "location" })}>
            <Text>{VIEWS.LOCATION}</Text>
          </Button>
          <Button
          last
          active={currentView == "gallery"}
          onPress={() => this.setState({ currentView: "gallery" })}>
            <Text>{VIEWS.GALLERY}</Text>
          </Button>
        </Segment>
        <FAB onClick={(message) => Toast.show({
              text: message,
              position: 'bottom',
              buttonText: 'Okay'
            })} />
        <Content>
          <Grid><Row><Col>{this.renderContent(currentView)}</Col></Row></Grid>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  segments: {
    backgroundColor: 'transparent'
  }
});
