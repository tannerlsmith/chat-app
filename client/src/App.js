import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA4KhqBK8Cdu3QTUb2YOaVZHoJEL73TFJI",
    authDomain: "chat-app-265b3.firebaseapp.com",
    projectId: "chat-app-265b3",
    storageBucket: "chat-app-265b3.appspot.com",
    messagingSenderId: "73933837636",
    appId: "1:73933837636:web:94991439cca153424d3311",
    measurementId: "G-5EQG6WG058"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
});

const [user] = useAuthState(auth);

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      </header>

      <section > 
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provier);
  }
  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function ChatRoom() {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [message] = useCollectionData(query, {idField: 'id'});

  return (
    <div>
      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
    </div>
  )
}

function ChatMessage(props) {}

export default App;
