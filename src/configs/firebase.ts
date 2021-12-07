import * as admin from 'firebase-admin';
const serviceAccount = require('./../../firebase.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const fireStore = admin.firestore();
