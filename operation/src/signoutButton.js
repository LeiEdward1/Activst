import React, {Component} from 'react';
import './App.css';
import firebase from './Firestore';

class Signoutbutton extends Component {
  constructor(){
    super();
    this.state = {};
  }

  signOut = () => firebase.auth().signOut().then( () => {
    this.setState({
      signedIn: false,
      currentUser: null
    });
  });

  render(){
    return(
      <div class ="loginButton">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="description" content="" />
          <meta name="author" content="" />
          <link href="../..favicon.ico" rel="icon" />
          <title>Bootstrap Website</title>
          <link href="https://getbootstrap.com/docs/4.0/examples/" rel="canonical" />
          <link href="../../dist/css/bootstrap.min.css" rel="stylesheet" />
          <link href="justified-nav.css" rel="stylesheet" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
        </head>
          <a class="btn btn-lg btn-outline-light" role="button" onClick={this.signOut}  href="/" > Sign Out </a>
      </div>

    );
  }
}

export default Signoutbutton;
