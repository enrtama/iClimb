// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
import I18n from 'ex-react-native-i18n';

I18n.fallbacks = true;

I18n.translations = {
  en: {
    greeting: 'Hi!'
  },
  fr: {
    greeting: 'Bonjour!'
  }
}

export default I18n;
