
/**
 *
 */

import t from 'tcomb-form-native';
import moment from 'moment';
import { SPORT_MODALITY } from '../constants'

const Modality = t.enums({
  INDOOR_BOULDERING: SPORT_MODALITY.INDOOR_BOULDERING,
  OUTDOOR_BOULDERING: SPORT_MODALITY.OUTDOOR_BOULDERING,
  SPORT_CLIMBING: SPORT_MODALITY.SPORT_CLIMBING,
  GYM_ROUTES: SPORT_MODALITY.GYM_ROUTES,
  ICE_CLIMBING: SPORT_MODALITY.ICE_CLIMBING,
  TRADITIONAL_CLIMBING: SPORT_MODALITY.TRADITIONAL_CLIMBING
});

export const AddEvent = t.struct({
  title: t.String,
  description: t.String,
  date: t.Date,
  modality: Modality
})

export const AddEventOptions = {
  auto: 'placeholders',
  fields: {
    description: {
      multiline: true
    },
    date: {
      mode: 'date',
      config: {
        format: (date) => moment(date).format('DD-MM-YYYY'),
      }
    }
  }
}
