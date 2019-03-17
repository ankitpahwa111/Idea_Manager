import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyBJrvCI6DAECZ4R5tXbmWv409_qkUKrYNs",
    authDomain: "ideamanager-42b40.firebaseapp.com",
    databaseURL: "https://ideamanager-42b40.firebaseio.com",
    projectId: "ideamanager-42b40",
    storageBucket: "ideamanager-42b40.appspot.com",
    messagingSenderId: "335735781835"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase