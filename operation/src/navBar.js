import React, {Component} from 'react';
import './App.css';
import Loginbutton from './loginButton';
import Signoutbutton from './signoutButton';
import firebase from './Firestore';

class Navbar extends Component {
  constructor(){
    super();
    this.state = {};
  }
  componentWillMount(){
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          signedIn: true,
          currentUser: user
        });
        const db = firebase.firestore();
        db.settings({
          timestampsInSnapshots: true
        });
        const userRef = db.collection("users");

        userRef.doc(user.uid).get().then(getDoc => {
          if (!getDoc.exists) {
            userRef.doc(user.uid).set({
              fullname: user.displayName,
              email: user.email
            });
          }
        });
      }
  });
}

signOut = () => firebase.auth().signOut().then( () => {
  this.setState({
    signedIn: false,
    currentUser: null
  });
});

render(){
  if (this.state.signedIn){
    return(
      <div class ="homePageBackground">
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css"
      integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
      crossorigin=""/>

          <h1 class ="header1">
          <a href="/"><img  class="logo1" src="https://i.imgur.com/19ENtw9.png" alt="Logo"/></a>
          <Signoutbutton />
          </h1>
          <meta name = "description" content = "Protest Maker"/>
          <meta name = "keywords" content = "Protest, Activism, politics, actvst"/>
          <link rel = "stylesheet" type = "text/css" href="ssheet1.css"/>
          <div class = "sticky">
            <ul class ="lista">
              <li class = "listb">
                <a class="nav" href="/">Home</a>
              </li>
              <li class = "listb">
                <a class="nav" href="/history">Protests in the Past</a>
              </li>
              <li class = "listb">
                <a class="nav" href="/protest.js">Create a Protest</a>
              </li>
              <li class ="listb">
                <a class="nav" href="myProfile">My Profile</a>
              </li>
              <li class ="listb">
                <a class="nav" href="leaderboard">Leaderboard</a>
              </li>
              <li class="listb">
                <a class="nav" href="about">About Us</a>
              </li>

            </ul>
        </div>
      </div>
    );
  }else{
    return(
      <div class ="homePageBackground">
     <link rel="stylesheet" href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css"
   integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
   crossorigin=""/>
       <h1 class ="header1">
       <a href="/"><img  class="logo1" src="https://i.imgur.com/19ENtw9.png" alt="Logo"/></a>
          <Loginbutton />
       </h1>
       <meta name = "description" content = "Protest Maker"/>
       <meta name = "keywords" content = "Protest, Activism, politics, actvst"/>
       <link rel = "stylesheet" type = "text/css" href="ssheet1.css"/>
       <div class = "sticky">
         <ul class ="lista">
           <li class = "listb">
             <a class="nav" href="/">Home</a>
           </li>
           <li class = "listb">
             <a class="nav" href="/history">Protests in the Past</a>
           </li>
           <li class = "listb">
             <a class="nav" href="/protest.js">Create a Protest</a>
           </li>
           <li class ="listb">
             <a class="nav" href="myProfile">My Profile</a>
           </li>
           <li class ="listb">
             <a class="nav" href="leaderboard">Leaderboard</a>
           </li>
           <li class="listb">
             <a class="nav" href="about">About Us</a>
           </li>

         </ul>
     </div>
   </div>
    );
  }
}


  }


export default Navbar;
