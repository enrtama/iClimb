
/**
 *
 */

import React, { PropTypes } from 'react';
import { StyleSheet, View, Text, Button, Picker } from 'react-native';
import { connect } from 'react-redux'
import i18nActions from '../../redux/i18n'

import I18n from '../../i18n/index.js';

import GridList from '../../components/GridList/index.android'

class HomeScreen extends React.Component {

  /**
   * async componentWillMount - description
   *
   * @return {type}  description
   */
  async componentWillMount() {
    await I18n.initAsync();
  }

  _languageChanged = (changeLanguage, setParams) => (newLang) => {
    changeLanguage(newLang)
    setParams({
      title: I18n.t('greeting', { locale: newLang })
    })
  }

  render() {
    const { navigation, banner } = this.props;
    const titles = ['Gym Bouldering', 'Gym Routes', 'Outdoor Bouldering', 'Ice Climbing', 'Sport Climbing', 'Traditional Climbing']

    const { language, changeLanguage } = this.props
    const { setParams } = this.props.navigation

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
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
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
    marginRight: 10,
  }
});

const mapStateToProps = (state) => {
  console.log(state)
  return {
    language: state.i18n.language,
  }
}

const mapStateToDispatch = dispatch => ({
  changeLanguage: (newLang) => dispatch(i18nActions.changeLanguage(newLang))
})

export default connect(mapStateToProps, mapStateToDispatch)(HomeScreen)
