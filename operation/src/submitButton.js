import React, {Component} from 'react';
import './App.css';
import { Redirect } from 'react-router-dom'
import firebase from './Firestore';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';


class SubmitButton extends Component {
  constructor(){
    super();
    this.state = {};
  }
  render(){
    return(
      <div class ="submitButton">
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
        <a class="btn btn-sm btn-outline-primary" role="button" > Submit </a>
      </div>

    );
  }
}
export default SubmitButton;
// <a class="btn btn-sm btn-outline-primary" role="button" href="/" > Submit </a>
