
/**
 *
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux'
import List from '../../components/List/index.android'

import FavoritesActions from '../../redux/favorites'

class PlacesContainer extends React.Component {

  state = { eventsOwner: [] }

  /**
   * componentWillMount - description
   *
   * @return {type}  description
   */
  componentWillMount() {
    this.props.getEventsOwner(this.props.auth.user.email)
  }

  /**
   * componentWillReceiveProps - description
   *
   * @param  {type} nextProps description
   * @return {type}           description
   */
  componentWillReceiveProps(nextProps) {
    const { eventsOwner } = nextProps;
    this.setState({eventsOwner})
  }

  render() {
    const { navigation } = this.props;
    const { eventsOwner } = this.state
    return (
      <View style={styles.container}>
        {(eventsOwner && eventsOwner.length > 0) && <List items={eventsOwner} navigation={navigation}/>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start'
  }
});

const mapStateToProps = (state) => {
  return {
    eventsOwner: state.favorites.eventsOwner,
    auth: state.auth
  }
}

const mapStateToDispatch = dispatch => ({
  getEventsOwner: (id) => dispatch(FavoritesActions.getEventsOwner(id))
})

export default connect(mapStateToProps, mapStateToDispatch)(PlacesContainer)
