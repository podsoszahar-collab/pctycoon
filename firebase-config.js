// ============================================================
//  НАСТРОЙКИ FIREBASE
// ============================================================

const firebaseConfig = {
    apiKey: "AIzaSyAv0ChOvxUSEWjCnWWUXBml01PyTsgfGjo",
    authDomain: "pc-tycoon-11216.firebaseapp.com",
    databaseURL: "https://pc-tycoon-11216-default-rtdb.firebaseio.com",
    projectId: "pc-tycoon-11216",
    storageBucket: "pc-tycoon-11216.firebasestorage.app",
    messagingSenderId: "587863804885",
    appId: "1:587863804885:web:ab92c591d56098cd4fcb5c"
};

// ИНИЦИАЛИЗАЦИЯ
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const GAME_ID = 'pctycoon_main';

console.log('✅ Firebase подключен!');