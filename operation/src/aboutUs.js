import React, {Component} from 'react';
import './App.css'

class AboutUs extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render(){
    return(
      <div>
      <h1 class = 'heading'> About Us </h1>
      <p class ='aboutP'>
        We are a group of 4 rising-juniors who are committed to helping the world. We've decided that to do that, we would create a platform to allow younger generations -- like ourselves -- protest effectively. Our service, Activst, provides anyone with a device and access to the internet with a chance to form their own protest. With a built-in reward system, and an easy way to create and attend protests, we hope that anyone who wants to fight for a cause can.
      </p>
        <div class='contactList'>
        <h2 class = 'heading'> Contact Us </h2>
          <ul>
            <ul>
              William Hill
              <li>
                Will Email
              </li>
          </ul>
          <ul>
            Dylan Kenniff
            <li>
              dkenniff21@regis.org
            </li>
          </ul>
          <ul>
            Edward Lei
            <li>
              edlei@ctemc.org
            </li>
          </ul>
          <ul>
            Terry Qu
            <li>
              terryqu119@gmail.com
            </li>
          </ul>
        </ul>
      </div>
    </div>
    )
  }
}

export default AboutUs;
