
/**
 *
 */

import { RNS3 } from 'react-native-aws3'
import { AWS_AVATARS, AWS_EVENTS } from '../constants'

export const uploadAvatar = (file) => RNS3.put(file, AWS_AVATARS)
export const uploadImageEvent = (file) => RNS3.put(file, AWS_EVENTS)
