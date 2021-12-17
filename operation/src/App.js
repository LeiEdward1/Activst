import React, {Component} from 'react';
import Navbar from './navBar';
import './App.css';
import Geocode from 'react-geocode';
Geocode.setApiKey("AIzaSyBbxC4kwW6n0n-HDgizgH6hU8b4_DcpSM0");
var L = require("leaflet");
var ColorsList = new Array('red', 'green', 'blue', 'orange', 'yellow', 'orange', 'pink', "#4c69fa", "#fa4ce6","#52fa4c","#ef9906");

function convert(address){
Geocode.fromAddress(address).then(
  response => {
    const { lat, lng } = response.results[0].geometry.location;
    return { lat, lng }
  },
  error => {
    console.error(error);
  }

);

}

class App extends Component {
  constructor(){
    super();
    this.state = {};
  }


  componentDidMount(){
  var mymap = L.map('mapid').setView([40.7136, -73.9724],9);

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 15,
            minZoom: 12,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiY3VzdW1tZXIiLCJhIjoiY2p5NXc5cXhwMDFxeTNmbzhwNWpsZTRibSJ9.204smoZZqhejVVBy7oiHfg'
        }).addTo(mymap);

        // create popup contents
        var customPopup = "<div class='customP'> Pride Protest Here</b> ";

        // specify popup options
        var customOptions =
            {
            'maxWidth': '200',
        //    'background': '#000000',
            'maxHeight': '200',
          //  'color': '#FFFFFF',
            'className' : 'popupCustom'
            }

        var circle = L.circle([40.7127, -74.0134], {
                   color: '',
                   fillColor: ColorsList[Math.floor(Math.random()*ColorsList.length)],
                   fillOpacity: 0.5,
                   radius: 500
               }).addTo(mymap);
               circle.bindPopup(customPopup,customOptions);
        var a = convert("41 Cooper Square");

        var circle = L.circle([a], {
                  color: '',
                  fillColor: ColorsList[Math.floor(Math.random()*ColorsList.length)],
                  fillOpacity: 0.5,
                  radius: 500
              }).addTo(mymap);
              circle.bindPopup(customPopup,customOptions);

  }

  render(){
    return(
      <div class ="homePageBackground">
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css"
    integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
    crossorigin=""/>
          <Navbar />
          <div id="mapid"></div>
      </div>
    );

  }
}

export default App;
