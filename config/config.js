import firebase from 'firebase'

     // Your web app's Firebase configuration
 const config = {
    apiKey: "AIzaSyD5npzrkI2gfyJB2YBSxLAIrVbjkNpI3DY",
    authDomain: "mylifeproject-cf006.firebaseapp.com",
    databaseURL: "https://mylifeproject-cf006.firebaseio.com",
    projectId: "mylifeproject-cf006",
    storageBucket: "mylifeproject-cf006.appspot.com",
    messagingSenderId: "552952033506",
    appId: "1:552952033506:web:9e0e95db29032a85c0aebb"
  };
  // Initialize Firebase
  export const firebaseApp = firebase.initializeApp(config);

  