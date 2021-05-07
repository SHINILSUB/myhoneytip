//import * as firebase from 'firebase/app';
import firebase from 'firebase/app';

//import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDbG0xP9nRhMBO5U_P-l5LoGyAuiep6VCw",
    authDomain: "myhoneytip-38b84.firebaseapp.com",
    projectId: "myhoneytip-38b84",
    storageBucket: "myhoneytip-38b84.appspot.com",
    messagingSenderId: "439492755386",
    appId: "1:439492755386:web:f0ffb57967175306696783",
    databaseURL: "https://myhoneytip-38b84-default-rtdb.firebaseio.com/"
  };

//파이어베이스 연결에 오류가 있을 경우를 대비한 코드
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()