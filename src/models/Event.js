
/**
 *
 */

import t from 'tcomb-form-native';
import _ from 'lodash'
import moment from 'moment';
import { SPORT_MODALITY, TEXTAREA_LINES } from '../constants'

const stylesheet = _.cloneDeep(t.form.Form.stylesheet);

stylesheet.textbox.normal.borderWidth = 0;
stylesheet.textbox.error.borderWidth = 0;
stylesheet.textbox.normal.marginBottom = 0;
stylesheet.textbox.error.marginBottom = 0;

stylesheet.textboxView.normal.borderWidth = 0;
stylesheet.textboxView.error.borderWidth = 0;
stylesheet.textboxView.normal.borderRadius = 0;
stylesheet.textboxView.error.borderRadius = 0;
stylesheet.textboxView.normal.borderBottomWidth = 1;
stylesheet.textboxView.error.borderBottomWidth = 1;
stylesheet.textbox.normal.marginBottom = 5;
stylesheet.textbox.error.marginBottom = 5;

const Modality = t.enums({
  "Indoor Bouldering": SPORT_MODALITY.INDOOR_BOULDERING,
  "Outdoor Bouldering": SPORT_MODALITY.OUTDOOR_BOULDERING,
  "Sport Climbing": SPORT_MODALITY.SPORT_CLIMBING,
  "Gym Routes": SPORT_MODALITY.GYM_ROUTES,
  "Ice Climbing": SPORT_MODALITY.ICE_CLIMBING,
  "Traditional Climbing": SPORT_MODALITY.TRADITIONAL_CLIMBING
});

export const EventModel = t.struct({
  title: t.String,
  description: t.String,
  date: t.maybe(t.Date),
  modality: Modality
})

export const EventModelOptions = {
  stylesheet: stylesheet,
  auto: 'placeholders',
  fields: {
    title: {
      error: 'Please add some title'
    },
    description: {
      multiline: true,
      numberOfLines: TEXTAREA_LINES,
      error: 'Please add some description'
    },
    date: {
      mode: 'date',
      config: {
        format: (date) => moment(date).format('DD.MM.YYYY'),
      },
      error: 'Please add a date'
    }
  }
}
