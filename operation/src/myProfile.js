import React, {Component} from 'react';
import './myProfile.css';
import './App.css';
import Navbar from './navBar';

class Profile extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render(){
    return(
      /*<div class ='profilePage'>
        <h3 class = 'heading'>
          My Profile
        </h3>
        <p class='profile'>
          Gamer Johnson
        </p>
        <p>Medals: None </p>
        <p>Achievements: None </p>
      </div>*/
      <div>
        <head>
          <meta charset = "utf-8"/>
          <meta http-equiv = "X-UA-Compatible" content="IE=edge"/>
          <meta name = "viewport" content="width=device-width, initial-scale=1"/>
          <title>Gamer Johnson</title>
          <link rel = "stylesheet" href = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
          <link rel = "stylesheet" href=  "./styles.css" type="text/css"/>
        </head>

        <body>
          <Navbar />
          <div class = "container-fluid">
            <div class = "row extra_margin">
              <div class = "col-md-4 col-sm-12 col-xs-12">
                <div class = "text-center">
                  <img src = "http://via.placeholder.com/300x250" class = "img-rounded" alt = "pic"/>
                  <h2>Gamer Johnson</h2>
                  <p>
                    <a class = "btn btn-primary btn-xs" href="#" role = "button">Facebook</a>
                    <a class = "btn btn-primary btn-xs" href="#" role = "button">Twitter</a>
                    <a class = "btn btn-primary btn-xs" href="#" role = "button">Instagram</a>
                    <a class = "btn btn-primary btn-xs" href="#" role = "button">Website</a>
                  </p>
                </div>
              </div>
              <div class="col-mid-8 col-sm* col-xs-*">
                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac purus lacus. Curabitur lobortis iaculis porta. Nullam vel condimentum dolor. Etiam tempor arcu ut urna mattis, at tristique sapien fringilla. Fusce viverra, odio sed efficitur dapibus, turpis orci posuere tellus, sed gravida dui risus at sapien. Duis faucibus non elit et interdum. Nam placerat nunc id massa placerat efficitur. Maecenas ac felis et elit vulputate posuere a non urna. Suspendisse mattis vitae nisl sed scelerisque. Duis eu risus varius, laoreet est nec, maximus dolor.</p>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac purus lacus. Curabitur lobortis iaculis porta. Nullam vel condimentum dolor. Etiam tempor arcu ut urna mattis, at tristique sapien fringilla. Fusce viverra, odio sed efficitur dapibus, turpis orci posuere tellus, sed gravida dui risus at sapien. Duis faucibus non elit et interdum. Nam placerat nunc id massa placerat efficitur. Maecenas ac felis et elit vulputate posuere a non urna. Suspendisse mattis vitae nisl sed scelerisque. Duis eu risus varius, laoreet est nec, maximus dolor.
                </p>
              </div>
            </div>
          </div>
        </body>
      </div>
    )
  }
}

export default Profile;
