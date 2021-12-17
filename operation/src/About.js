import React, {Component} from 'react';
import './App.css';
import Navbar from './navBar';

class About extends Component {
  constructor(){
    super();
    this.state = {};
  }
  render(){
    return(<div class="filler">
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
          <body>
          <div class="NavContainer">
            <Navbar />
          </div>
            <div class="container">
              <div class="masthead">


              </div>
              <div class="jumbotron">
                <h1>Our mission</h1>
                <p class="lead">
                  We are a group of 4 rising-juniors who are committed to helping the world. We've decided that to do that, we would create a platform to allow younger generations -- like ourselves -- protest effectively. Our service, Activst, provides anyone with a device and access to the internet with a chance to form their own protest. With a built-in reward system, and an easy way to create and attend protests, we hope that anyone who wants to fight for a cause can.
                </p>
                <p>
                  <a class="btn btn-lg btn-success" role="button" href="/login">Get started today</a>
                </p>
              </div>
              <div class="row">
                <div class="col-lg-3">
                  <h2>William Hill</h2>
                  <p>
                    A high school student at Brooklyn Technical High School in New York. Interested in things across the board, from puzzles to law. Excited to be working on this project.
                  </p>
                  <p>
                    <a class="btn btn-lg btn-primary" role="button" href="#">View details</a>
                  </p>
                </div>
                <div class="col-lg-3">
                  <h2>Dylan Kenniff</h2>
                  <p>
                    Cras justo odio, dapibus ac facilis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet.
                  </p>
                  <p>
                    <a class="btn btn-lg btn-primary" role="button" href="#">View details</a>
                  </p>
                </div>
                <div class="col-lg-3">
                  <h2>Edward Lei</h2>
                  <p>
                    Cras justo odio, dapibus ac facilis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet.
                  </p>
                  <p>
                    <a class="btn btn-lg btn-primary" role="button" href="#">View details</a>
                  </p>
                </div>
                <div class="col-lg-3">
                  <h2>Terry Qu</h2>
                  <p>
                    Cras justo odio, dapibus ac facilis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet.
                  </p>
                  <p>
                    <a class="btn btn-lg btn-primary" role="button" href="#">View details</a>
                  </p>
                </div>
              </div>
              <footer class="footer">
                <p>© Activst 2019</p>
              </footer>
            </div>
            <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" crossorigin="anonymous" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k90mg/a/EheAdgtzNs3hpfag6Ed950n"></script>
            <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery.min.js"></script>')</script>
            <script src="https://cdn.js.cloudflare.com/ajax/libs/tether/1.4.0/js/tether/min.js" crossorigin="anonymous" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb"></script>
            <script src="../../dist/js/bootstrap.min.js"></script>
            <script src="../../assets/js/ie10-viewport-bug-workaround.js"></script>
          </body>
          </div>
        );

  }
}

export default About;
