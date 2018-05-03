
/**
 * Constants
 */

import aws from "../../aws.json"

export const FIREBASE = {
  API_KEY: "AIzaSyAe5UO9EGXxJEluCtkiEVq0pxpEImRF6n0",
  AUTH_DOMAIN: "iclimb-396ef.firebaseapp.com",
  DATABASE_URL: "https://iclimb-396ef.firebaseio.com",
  PROJECT_ID: "iclimb-396ef",
  STORAGE_BUCKET: "iclimb-396ef.appspot.com",
  MESSAGING_SENDER_ID: "551491836163"
}

export const AWS_AVATARS = {
  keyPrefix: "avatars/",
  bucket: "react-native-iclimb",
  region: "eu-west-1",
  awsUrl: "s3.eu-west-1.amazonaws.com",
  accessKey: aws.accessKey,
  secretKey: aws.secretKey,
  successActionStatus: 201
}

export const AWS_EVENTS = {
  keyPrefix: "events/",
  bucket: "react-native-iclimb",
  region: "eu-west-1",
  awsUrl: "s3.eu-west-1.amazonaws.com",
  accessKey: aws.accessKey,
  secretKey: aws.secretKey,
  successActionStatus: 201
}

export const SPORT_MODALITY = {
  INDOOR_BOULDERING: "Indoor Bouldering",
  OUTDOOR_BOULDERING: "Outdoor Bouldering",
  SPORT_CLIMBING: "Sport Climbing", // Relies on permanent anchors fixed to the rock for protection
  GYM_ROUTES: "Gym Routes",
  ICE_CLIMBING: "Ice Climbing",
  TRADITIONAL_CLIMBING: "Traditional Climbing" // Must place removable protection as they climb
}

export const CRUD = {
  EDIT: "edit",
  DELETE: "delete"
}

export const TEXTAREA_LINES = 5

export const KEYS_TO_FILTERS = ['title', 'description']

export const MAP_DEFAULT = {
  LATITUDE: 52.3791283,
  LONGITUDE: 4.900272
}
