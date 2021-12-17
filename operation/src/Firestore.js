import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBPehOeaGCiNi9ogG1KjZgDV3LM5maFtbU",
  authDomain: "octocat-ae27c.firebaseapp.com",
  databaseURL: "https://octocat-ae27c.firebaseio.com",
  projectId: "octocat-ae27c",
  storageBucket: "octocat-ae27c.appspot.com",
  messagingSenderId: "1023951412365",
  appId: "1:1023951412365:web:b6c2df335b7bdd4a"
};
firebase.initializeApp(firebaseConfig);

export default firebase;
