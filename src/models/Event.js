
/**
 *
 */

import t from 'tcomb-form-native';
import moment from 'moment';
import { SPORT_MODALITY } from '../constants'

const Modality = t.enums({
  INDOOR_BOULDERING: "Indoor bouldering",
  OUTDOOR_BOULDERING: "Outdoor bouldering",
  SPORT_CLIMBING: "Sport climbing",
  GYM_ROUTES: "Gym routes",
  ICE_CLIMBING: "Ice climbing",
  TRADITIONAL_CLIMBING: "Traditional climbing"
});

export const AddEvent = t.struct({
  name: t.String,
  location: t.String,
  date: t.Date,
  modality: Modality
})

export const AddEventOptions = {
  auto: 'placeholders',
  fields: {
    date: {
      mode: 'date',
      config: {
        format: (date) => moment(date).format('DD-MM-YYYY'),
      }
    }
  }
}
