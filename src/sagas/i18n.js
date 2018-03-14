import I18n from 'ex-react-native-i18n'

export function* updateLanguage(action) {
  const {language} = action
  I18n.locale = language
}
