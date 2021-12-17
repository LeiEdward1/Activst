import React, {Component} from 'react';
import './Leaderboard.css';
import Navbar from './navBar';

class Leaderboard extends Component{
  constructor(){
    super();
    this.state = {};
  }
  ranking(){
    var medals//this is pseudocode but we need to add database stuff
        for(var i = 0;i<medals.length;i++)
    {

    }
  }
  render(){
    return(
      <html>

  <head>
  <link href="style.css" rel="stylesheet" type="text/css"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css"/>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.6/angular.js"></script>
  </head>

  <body ng-app="boardApp">
    <Navbar />
  	<div ng-controller="boardController">

  		<div class="row">
  			<div class="col-xs-12">
  				<div class="tableHeader">Leaderboard - FCC</div>
  			</div>
  		</div>
  		<div class="row">
  			<div class="col-xs-12">
  				<table class="table-bordered table-hover">
  					<thead>
  						<tr class="camper">
  							<th>#</th>
  							<th>Camper Name</th>
  							<th class="number" ng-click="sortData('recent')">
  								Last 30 days
  								<div ng-class="getSortClass('recent')"></div>
  							</th>
  							<th class="number" ng-click="sortData('alltime')">
  								All time
  								<div ng-class="getSortClass('alltime')"></div>
  							</th>
  						</tr>
  					</thead>

  					<tbody>
              <td>1</td>
              <td>John Doe</td>
              <td>50</td>

  					</tbody>
  				</table>
  			</div>
  		</div>

  		<div class="row">
  			<div class="col-xs-12">
  				<div class="tableFooter">
        <div class="col-xs-6">

  				<div/>
  			<div/>
  		<div/>
  	< div/>
    <div/>
<body/>
</div>
</div>
</div>
</div>
</div>
</body>
  </html>
    )
}
}
export default Leaderboard;
