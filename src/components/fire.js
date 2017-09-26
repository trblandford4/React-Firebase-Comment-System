import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyC5myMD9WBEHa0-yIH5NHV1IW-_IjNLREI",
    authDomain: "perfectsense-news-app.firebaseapp.com",
    databaseURL: "https://perfectsense-news-app.firebaseio.com",
    projectId: "perfectsense-news-app",
    storageBucket: "perfectsense-news-app.appspot.com",
    messagingSenderId: "346788016741"
};
const fire = firebase.initializeApp(config);
export default fire;