
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

//
// Mockup data
// TODO: connect redux to get event
//
const event = {
  "id": 1,
  "title": "La Sportiva Legends",
  "description": "It's once again time for the La Sportiva Legends Only invitational at Klättercentret in Stockholm, Sweden. This year it's once again an all female line-up where World #1 Shauna Coxsey will take on Stasa Gejo, Petra Klingler, Mélissa Lé Nevé, Katja Kadic and Fanny Gibert",
  "thumbnail": "http://www.mwv-icefest.com/wp-content/uploads/La-Sportiva.jpg",
  "location": "Aambeeldstraat 26, 1021 KB Amsterdam",
  "date": "April 15, 2018",
  "coordinate": {
    "latitude": 52.383477,
    "longitude": 4.929267
  }
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
    switch(view) {
      case VIEWS.INFO:
        return <CardShowcase event={event} />
        break;
      case VIEWS.LOCATION:
        return <Map item={event} />
        break;
      case VIEWS.GALLERY:
        return <Gallery />
        break;
      default:
        return <CardShowcase event={event} />
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

    // <View style={styles.fab}>
    //   <FAB />
    // </View>

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
