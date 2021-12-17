import React, {Component} from 'react';
import './App.css';

class AppComponent extends Component {
  constructor(){
    super();
    this.state = {};
  }
  render(){
    return(
      <div>
        <p>This is nested.</p>
      </div>
    );
  }
}

export default AppComponent;
