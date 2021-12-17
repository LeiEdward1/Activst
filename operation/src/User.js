import React from 'react';
import firebase from "./Firestore";
import Navbar from "./navBar";
import { Form } from 'react-bootstrap';

class User extends React.Component{
  constructor(){
    super();
    this.state = {
      email: "",
      fullname: "",
      bio: ""
    };
  };
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

        userRef.doc(user.uid).set({
          fullname: this.state.fullname,
          email: this.state.email,
          bio: this.state.bio
      });
    }
  });
}
  updateInput = e => {
    this.setState({
      [e.target.name]:e.target.value
    });
  }
  addUser = e => {
    e.preventDefault();
    this.setState({
      fullname: "",
      email: "",
      bio: ""
    });
  };
  render(){
    return(
      <div>
      <Navbar />
      <div class ="plzalign">
      <div class="form-style-5">
       <form class ="plzalign" onSubmit={this.addProtest}>
        <input
           type="text"
           name="protestname"
           placeholder="Protest Name"
           onChange={this.updateInput}
           value={this.state.protestname}
	          />
​
          <input
           type="datetime"
           name="time"
           placeholder="Time & Date"
           onChange={this.updateInput}
              />
<br/>
           <input
           type="text"
           name="location"
           placeholder="Location"
           onChange={this.updateInput}
           value={this.state.location}
            />
<br/>
           <input
           type="text"
           name="description"
           placeholder="Give a brief description of your protest."
              onChange={this.updateInput}
       value={this.state.description}
></input>
        <Form.Check type="checkbox" label="Check me out" />
        <Form.Check type="checkbox" label="Check me out" />
        <Form.Check type="checkbox" label="Check me out" />
        <Form.Check type="checkbox" label="Check me out" />
        <Form.Check type="checkbox" label="Check me out" />
        <div class = "submitButton">
         <button type="submit" class="btn btn-lg btn-primary" >Submit</button>
        </div>
      </form>
    </div>
    </div>
      </div>
    )
  }
}
export default User;
/*var userRef = firebase.database().ref('entries/fullname');
userRef.on('value', function(snapshot) {
  console.log(snapshot.val());
});*/
