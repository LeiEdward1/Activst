import React, {Component} from 'react';
import firestore from "./Firestore";
import Navbar from './navBar';
import './App.css';
var L = require("leaflet");


class Protest extends React.Component {
  constructor() {
    super();
    this.state = {
     protestname: "",
     time: "",
     location: "",
     description: "",
     data:[]
    };
};

  componentDidMount(){
  var mymap = L.map('mapid1').setView([40.7136, -73.9724],9);

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 15,
            minZoom: 12,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiY3VzdW1tZXIiLCJhIjoiY2p5NXc5cXhwMDFxeTNmbzhwNWpsZTRibSJ9.204smoZZqhejVVBy7oiHfg'
        }).addTo(mymap);

            }



    updateInput = e => {
     this.setState({
       [e.target.name]: e.target.value
     });
}
  addProtest = e => {
   e.preventDefault();
   this.setState({
     protestname: "",
     time: "",
     location: "",
     description: "",
   });
   const db = firestore.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
  };


 render() {
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
        <div class = "submitButton">
         <button type="submit" class="btn btn-lg btn-primary" >Submit</button>
        </div>
      </form>
    </div>
    </div>
      <div id="mapid1" class='BACKGROUNDMAP'></div>
    </div>
  )}
}
export default Protest;
