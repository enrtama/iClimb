/**
 *
 */

import React from 'react';
import { StyleSheet, View, Text, Picker } from 'react-native';
import { connect } from 'react-redux'
import { Container, Content, Spinner, Fab } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

import i18nActions from '../../redux/i18n'
import FavoritesActions from '../../redux/favorites'

import { database } from '../../config/firebase'

import I18n from '../../i18n/index';
import List from '../../components/List/index.android';
import GooglePlacesSearch from '../../components/GooglePlacesSearch/index.android';
import SpinnerLoader from '../../components/SpinnerLoader/index.android'

class HomeContainer extends React.Component {

  /**
   * constructor - description
   *
   * @param  {type} props description
   * @return {type}       description
   */
  constructor(props) {
    super(props)
    this.state = { events: [] }
  }

  /**
   * async componentWillMount - description
   *
   * @return {type}  description
   */
  async componentWillMount() {
    await I18n.initAsync();
  }

  /**
   * componentWillReceiveProps - description
   *
   * @param  {type} nextProps description
   * @return {type}           description
   */
  componentWillReceiveProps(nextProps) {
    const { events } = nextProps;
    this.setState({events})
  }

  /**
   * languageChanged - description
   *
   * @param  {type} changeLanguage description
   * @param  {type} setParams      description
   * @param  {type} newLang        description
   * @return {type}                description
   */
  languageChanged = (changeLanguage, setParams) => (newLang) => {
    changeLanguage(newLang)
    setParams({
      title: I18n.t('greeting', { locale: newLang })
    })
  }

  /**
   * render - description
   *
   * @return {type}  description
   */
  render() {
    const { navigation, banner, language, changeLanguage } = this.props;
    const { setParams } = this.props.navigation;
    const { events } = this.state;

    const languageOptions = Object.keys(I18n.translations).map((lang, i) => {
      return (
        <Picker.Item key={ i }
                     label={ I18n.translations[lang].id }
                     value={ lang } />)
    })

    return (
      <View style={styles.container}>
        <GooglePlacesSearch getEvents={this.props.getEvents}/>
        <View style={styles.list}>
         {(events && events.length > 0) ? <List items={events} navigation={navigation}/> : <SpinnerLoader />}
        </View>
        <Fab
          active={false}
          direction="up"
          style={styles.fab}
          containerStyle={{bottom: 20}}
          position="bottomRight"
          onPress={() => this.props.navigation.navigate('AddEvent')}>
          <Ionicons name="ios-add" />
        </Fab>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  header: {
    fontSize: 20,
    textAlign: 'left',
    marginVertical: 10,
    marginLeft: 10,
  },
  list: {
    marginVertical: 50,
    alignItems: 'stretch'
  },
  search: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    marginHorizontal: 15
  },
  fab: {
    flex: 1,
    position: 'absolute',
    zIndex: 3
  }
})

const mapStateToProps = (state) => {
  return {
    language: state.i18n.language,
    events: state.favorites.events
  }
}

const mapStateToDispatch = dispatch => ({
  changeLanguage: (newLang) => dispatch(i18nActions.changeLanguage(newLang)),
  getEvents: (data) => dispatch(FavoritesActions.getEvents(data))
})

export default connect(mapStateToProps, mapStateToDispatch)(HomeContainer)
