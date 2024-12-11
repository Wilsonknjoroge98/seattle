// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCaW6jYEd2oj7vH5Ka4iRuNQeFL7wrCoBE',
  authDomain: 'seattle-62e4f.firebaseapp.com',
  projectId: 'seattle-62e4f',
  storageBucket: 'seattle-62e4f.firebasestorage.app',
  messagingSenderId: '1058692415513',
  appId: '1:1058692415513:web:c98f6e76dd57f40f8a6a88',
  measurementId: 'G-TL1T6993LC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
