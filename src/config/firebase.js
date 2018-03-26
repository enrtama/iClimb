
/**
 * Firebase config
 */

import firebase from 'firebase'
import '@firebase/database'
import ReduxSagaFirebase from 'redux-saga-firebase'
import { FIREBASE } from '../constants'

const myFirebaseApp = firebase.initializeApp({
 apiKey: FIREBASE.API_KEY,
 authDomain: FIREBASE.AUTH_DOMAIN,
 databaseURL: FIREBASE.DATABASE_URL,
 projectId: FIREBASE.PROJECT_ID,
 storageBucket: FIREBASE.STORAGE_BUCKET,
 messagingSenderId: FIREBASE.MESSAGING_SENDER_ID
})

export const reduxSagaFirebase = new ReduxSagaFirebase(myFirebaseApp)
