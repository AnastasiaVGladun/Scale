import firebase from "firebase/app"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAXiEbe89kzpgTArYfDwz-GymGISqZIYak",
    authDomain: "scale-58d6a.firebaseapp.com",
    projectId: "scale-58d6a",
    storageBucket: "scale-58d6a.appspot.com",
    messagingSenderId: "940452713603",
    appId: "1:940452713603:web:3a8eaaa0543d390a0b77b6"
  }

  firebase.initializeApp(firebaseConfig)


  const storage = firebase.storage()

  export {storage, firebase as default}