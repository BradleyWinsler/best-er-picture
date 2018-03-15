import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBKgK3Ji-EFpRIMZ_Xjt4lqITJOvFN_4C4",
  authDomain: "best-er-picture.firebaseapp.com",
  databaseURL: "https://best-er-picture.firebaseio.com",
  projectId: "best-er-picture",
  storageBucket: "best-er-picture.appspot.com",
  messagingSenderId: "702532205715"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();