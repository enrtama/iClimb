
/**
 *
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createFilter } from 'react-native-search-filter'
import { KEYS_TO_FILTERS } from '../../constants'
import { connect } from 'react-redux'

import FavoritesActions from '../../redux/favorites'

import List from '../../components/List/index.android'
import Search from '../../components/Search/index.android'

class PlacesContainer extends React.Component {

  state = { eventsOwner: [], searchTerm: '' }

  /**
   * componentWillMount - description
   *
   * @return {type}  description
   */
  componentWillMount() {
    const { auth, getEventsOwner } = this.props
    auth.user && getEventsOwner(auth.user.email)
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

  /**
   * searchUpdated - description
   *
   * @param  {type} term description
   * @return {type}      description
   */
  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }

  /**
   * render - description
   *
   * @return {type}  description
   */
  render() {
    const { navigation } = this.props;
    const { eventsOwner, searchTerm } = this.state
    const eventsOwnerSearch = eventsOwner.filter(createFilter(searchTerm, KEYS_TO_FILTERS))
    return (
      <View style={styles.container}>
        <Search callback={this.searchUpdated.bind(this)} />
        {(eventsOwner && eventsOwner.length > 0) && <List items={eventsOwnerSearch} navigation={navigation}/>}
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
