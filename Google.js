import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAe9A3YuH1QHOG-0tj4rDfMAMN7PxPcLoA",
    authDomain: "loginreact15601-29dab.firebaseapp.com",
    projectId: "loginreact15601-29dab",
    storageBucket: "loginreact15601-29dab.appspot.com",
    messagingSenderId: "798866570210",
    appId: "1:798866570210:web:942ef9045809f8dcf0d7bb"
  };

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();

function signInWithGoogle() {
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      console.log('Usuario autenticado con Google:', user);
    })
    .catch((error) => {
      console.error('Error de autenticación con Google:', error);
    });
}

signInWithGoogle();
