
/**
 *
 */

import React from 'react';
import { StyleSheet, View, Text, Button, Picker } from 'react-native';
import { connect } from 'react-redux'
import { Spinner } from 'native-base';

import i18nActions from '../../redux/i18n'
import FavoritesActions from '../../redux/favorites'

import I18n from '../../i18n/index';
import List from '../../components/List/List';

class HomeContainer extends React.Component {

  /**
   * constructor - description
   *
   * @param  {type} props description
   * @return {type}       description
   */
  constructor(props) {
    super(props)
    this.state = {
      events: []
    }
  }

  /**
   * async componentWillMount - description
   *
   * @return {type}  description
   */
  async componentWillMount() {
    const { events } = this.props;
    this.props.getEvents()
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
   *
   */
  _languageChanged = (changeLanguage, setParams) => (newLang) => {
    changeLanguage(newLang)
    setParams({
      title: I18n.t('greeting', { locale: newLang })
    })
  }

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
        <Text style={ styles.header }>
          { I18n.t('greeting') }
        </Text>
        <Picker style={ styles.picker }
                selectedValue={ language }
                onValueChange={ this._languageChanged(changeLanguage, setParams) }>
          { languageOptions }
        </Picker>
        <List items={events} navigation={navigation}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignContent: 'flex-start',
    flex: 1
  },
  header: {
    fontSize: 20,
    textAlign: 'left',
    marginVertical: 10,
    marginLeft: 10,
  },
  picker: {
    flex: 1,
    width: 100,
    marginRight: 10,
    justifyContent: 'flex-end'
  }
});

const mapStateToProps = (state) => {
  return {
    language: state.i18n.language,
    events: state.favorites.events
  }
}

const mapStateToDispatch = dispatch => ({
  changeLanguage: (newLang) => dispatch(i18nActions.changeLanguage(newLang)),
  getEvents: () => dispatch(FavoritesActions.getEvents())
})

export default connect(mapStateToProps, mapStateToDispatch)(HomeContainer)
