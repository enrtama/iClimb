
/**
 *
 */

import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text } from 'react-native'
import { createFilter } from 'react-native-search-filter'
import { KEYS_TO_FILTERS } from '../../constants'

import FavoritesActions from '../../redux/favorites'

import List from '../../components/List/index.android'
import Search from '../../components/Search/index.android'

class FavoritesFilterContainer extends React.Component {

  state = { eventsFiltered: [], searchTerm: '' }

  /**
   * componentWillMount - description
   *
   * @return {type}  description
   */
  componentWillMount() {
    this.props.getEventsFiltered(this.props.navigation.state.params.title)
  }

  /**
   * componentWillReceiveProps - description
   *
   * @param  {type} nextProps description
   * @return {type}           description
   */
  componentWillReceiveProps(nextProps) {
    const { eventsFiltered } = nextProps;
    this.setState({eventsFiltered})
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
    const { navigation} = this.props;
    const { eventsFiltered, searchTerm } = this.state;
    const eventsFilteredSearch = eventsFiltered.filter(createFilter(searchTerm, KEYS_TO_FILTERS))
    return (
      <View style={styles.container}>
        <Search callback={this.searchUpdated.bind(this)} />
        {(eventsFiltered && eventsFiltered.length > 0) && <List items={eventsFilteredSearch} navigation={navigation}/>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start'
  }
})

const mapStateToProps = (state) => {
  return {
    events: state.favorites.events,
    eventsFiltered: state.favorites.eventsFiltered
  }
}

const mapStateToDispatch = dispatch => ({
  getEventsFiltered: (filter) => dispatch(FavoritesActions.getEventsFiltered(filter))
})

export default connect(mapStateToProps, mapStateToDispatch)(FavoritesFilterContainer)
