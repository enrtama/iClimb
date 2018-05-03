
/**
 *
 */

import React from 'react';
import { Content, Container, Segment, Button, Fab, Toast } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StyleSheet, View, Text } from 'react-native';
import { CRUD } from '../../constants'
import { connect } from 'react-redux'
import FavoritesActions from '../../redux/favorites'

import CardShowcase from '../../components/CardShowcase/index.android'
import Map from '../../components/Map/index.android'
import Gallery from '../../components/Gallery/index.android'
import FABShare from '../../components/FABShare/index.android'
import FABCrud from '../../components/FABCrud/index.android'

const VIEWS = {
  INFO: "info",
  LOCATION: "location",
  GALLERY: "gallery"
}

class EventContainer extends React.Component {

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
   * showToast - description
   *
   * @param  {type} message description
   * @return {type}         description
   */
  showToast(message) {
    Toast.show({text: message, position: 'bottom', buttonText: 'Okay'})
  }

  /**
   * action - description
   *
   * @param  {type} action description
   * @return {type}        description
   */
  action(action) {
    const { navigation } = this.props;
    // this.showToast(action)
    switch (action) {
      case CRUD.EDIT:
        const eventItem = navigation.state.params.event
        navigation.push('EditEvent', { id: eventItem.placeId, title: eventItem.title, event: eventItem })
        break;
      case CRUD.DELETE:
        this.props.deleteEvent(navigation.state.params.event.key)
        navigation.goBack()
        break;
      default:
        break;
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
        <FABShare onClick={(message) => this.showToast(message)} position="bottomRight"/>
        <FABCrud onClick={(action) => this.action(action)} position="bottomLeft"/>
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

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapStateToDispatch = dispatch => ({
  deleteEvent: (eventKey) => dispatch(FavoritesActions.deleteEvent(eventKey)),
})

export default connect(mapStateToProps, mapStateToDispatch)(EventContainer)
