import firebase from 'firebase'





const firebaseConfig = {
    apiKey: "AIzaSyCQwwbEPrnhoOK_Xzd9cSwIdFpaRm5BjZA",
    authDomain: "react-users-app-5d608.firebaseapp.com",
    projectId: "react-users-app-5d608",
    storageBucket: "react-users-app-5d608.appspot.com",
    messagingSenderId: "515423550394",
    appId: "1:515423550394:web:b2c87ede1f5e4ff228fb83"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   export default firebase;