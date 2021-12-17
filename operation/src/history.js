import React, {Component} from 'react';
import Navbar from './navBar';
import './App.css';
var L = require("leaflet");
var ColorsList = new Array('red', 'green', 'blue', 'orange', 'yellow', 'orange', "#4c69fa", "#fa4ce6","#52fa4c","#ef9906");


class History extends Component {
  constructor(){
    super();
    this.state = {};
  }
  componentDidMount(){
  var historymap = L.map('mapid').setView([40.7136, -73.9724],9);

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 15,
            minZoom: 12,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiY3VzdW1tZXIiLCJhIjoiY2p5NXc5cXhwMDFxeTNmbzhwNWpsZTRibSJ9.204smoZZqhejVVBy7oiHfg'
        }).addTo(historymap);

        var circle = L.circle([40.7510961, -73.9749958], {
          color: '',
          fillColor: ColorsList[Math.floor(Math.random()*ColorsList.length)],
          fillOpacity: 0.5,
          radius: Math.floor((Math.random()*600)+200)
      }).addTo(historymap);
      circle.bindPopup('<a href="https://en.wikipedia.org/wiki/New_York_City_draft_riots"  class="customP">The Draft Riots of 1863</a>');

         circle = L.circle([40.7829, -73.9654], {
          color: '',
          fillColor: ColorsList[Math.floor(Math.random()*ColorsList.length)],
          fillOpacity: 0.5,
          radius: Math.floor((Math.random()*600)+200)
      }).addTo(historymap);
      circle.bindPopup('<a href="https://en.wikipedia.org/wiki/Peace_walk"  class="customP">Peace March, April 15, 1967</a>');

         circle = L.circle([40.7900, -73.9650], {
          color: '',
          fillColor: ColorsList[Math.floor(Math.random()*ColorsList.length)],
          fillOpacity: 0.5,
          radius: Math.floor((Math.random()*600)+200)
      }).addTo(historymap);
      circle.bindPopup('<a href="https://en.wikipedia.org/wiki/Anti-nuclear_protests_in_the_United_States" class="customP">Anti-Nuclear March, June 12, 1982</a>');

         circle = L.circle([40.7490646, -73.9679989], {
          color: '',
          fillColor: ColorsList[Math.floor(Math.random()*ColorsList.length)],
          fillOpacity: 0.5,
          radius: Math.floor((Math.random()*600)+200)
      }).addTo(historymap);
      circle.bindPopup('<a href="https://en.wikipedia.org/wiki/Protests_against_the_Iraq_War" class="customP">Anti-Iraq War Protest, 2003</a>');
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

export default History;
