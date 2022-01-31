import firebase from "firebase/app"
import "firebase/storage"

  firebase.initializeApp({
    "projectId": "scale-58d6a",
    "appId": "1:940452713603:web:35efc4adabca263d0b77b6",
    "storageBucket": "scale-58d6a.appspot.com",
    "locationId": "australia-southeast1",
    "apiKey": "AIzaSyAXiEbe89kzpgTArYfDwz-GymGISqZIYak",
    "authDomain": "scale-58d6a.firebaseapp.com",
    "messagingSenderId": "940452713603"
  });

  const storage = firebase.storage()

  export {storage, firebase as default}