
/**
 * Constants
 */

export const FIREBASE = {
  API_KEY: "AIzaSyAe5UO9EGXxJEluCtkiEVq0pxpEImRF6n0",
  AUTH_DOMAIN: "iclimb-396ef.firebaseapp.com",
  DATABASE_URL: "https://iclimb-396ef.firebaseio.com",
  PROJECT_ID: "iclimb-396ef",
  STORAGE_BUCKET: "iclimb-396ef.appspot.com",
  MESSAGING_SENDER_ID: "551491836163"
}

export const AWS = {
  keyPrefix: "avatars/",
  bucket: "react-native-iclimb",
  region: "eu-west-1",
  awsUrl: "s3.eu-west-1.amazonaws.com",
  accessKey: "AKIAI3VLYAFZHATMVKTA",
  secretKey: "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",
  successActionStatus: 201
}

export const SPORT_MODALITY = {
  INDOOR_BOULDERING: "INDOOR_BOULDERING",
  OUTDOOR_BOULDERING: "OUTDOOR_BOULDERING",
  SPORT_CLIMBING: "SPORT_CLIMBING", // Relies on permanent anchors fixed to the rock for protection
  GYM_ROUTES: "GYM_ROUTES",
  ICE_CLIMBING: "ICE_CLIMBING",
  TRADITIONAL_CLIMBING: "TRADITIONAL_CLIMBING" // Must place removable protection as they climb
}
