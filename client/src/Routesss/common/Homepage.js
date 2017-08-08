import React from 'react';
import { Link } from 'react-router-dom';


class Homepage extends React.Component {
  render() {
    return (
      <div id="homepage">
        <div id="home" className="home">

          <div className="text-vcenter">
            <h1>HUBZ</h1>
            <button className="btn btn-success btn-square"><Link to="/findtrip">Where's the Hub?</Link></button>

          </div>

        </div>
        <div id="about" className="pad-section">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <img src="img/lglogo.jpg" alt="" />
              </div>
              <div className="col-sm-6 text-center">
                <h2>What is Hubz ?</h2>
                <p className="lead">Ever wanted to travel or find yourself in the middle of a trip and not know where to go next? This is where we step in with our simple-to-use app, helping you find Hubz, plan your route & method of transportation plus all interesting
                        activities along the way. <br /> Save Hubz for future reference and share with friends!</p>
              </div>
            </div>
          </div>
        </div>

        <div id="services" className="pad-section">

          <div className="container">

            <h2 className="text-center">How To</h2>
            <hr />

            <div className="row text-center">

              <div className="col-sm-3 col-xs-6">

                <i className="glyphicon glyphicon-map-marker"> </i>

                <h4>First</h4>

                <p>What hubz are around you!</p>

              </div>

              <div className="col-sm-3 col-xs-6">

                <i className="glyphicon glyphicon-road"> </i>

                <h4>Second</h4>

                <p>How do we get there </p>

              </div>

              <div className="col-sm-3 col-xs-6">

                <i className="glyphicon glyphicon-pushpin"> </i>

                <h4>Next</h4>

                <p>Whats to do along the way </p>

              </div>

              <div className="col-sm-3 col-xs-6">

                <i className="glyphicon glyphicon-tree-conifer"> </i>

                <h4>Lastly</h4>
{/*changed text for step 4  */}
                <p>Arrive, Enjoy, Share, Move!</p>

              </div>

            </div>

          </div>

        </div>


        <hr />
        <h2 className="text-center"> Our Partners </h2>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-sm-4 col-xs-6"><div className="logowrap center-block"><img className="img-responsive center-block" src="img/logos/airbnb.png" /></div></div>
            <div className="col-md-2 col-sm-4 col-xs-6"><div className="logowrap center-block"><img className="img-responsive center-block" src="img/logos/fb.png" /></div></div>
            <div className="col-md-2 col-sm-4 col-xs-6"><div className="logowrap center-block"><img className="img-responsive center-block" src="img/logos/tripadvisor.png" /></div></div>
            <div className="col-md-2 col-sm-4 col-xs-6"><div className="logowrap center-block"><img className="img-responsive center-block" src="img/logos/snap.png" /></div></div>
            <div className="col-md-2 col-sm-4 col-xs-6"><div className="logowrap center-block"><img className="img-responsive center-block" src="img/logos/mot.jpg" /></div></div>
            <div className="col-md-2 col-sm-4 col-xs-6"><div className="logowrap center-block"><img className="img-responsive center-block" src="img/logos/elal.gif" /></div></div>
          </div>
           <div className="row">
            <div className="col-md-2 col-sm-4 col-xs-6"><div className="logowrap center-block"><img className="img-responsive center-block align-middle" src="img/logos/rome.png" /></div></div>
            <div className="col-md-2 col-sm-4 col-xs-6"><div className="logowrap center-block"><img className="img-responsive center-block" src="img/logos/vespa.gif" /></div></div>
            <div className="col-md-2 col-sm-4 col-xs-6"><div className="logowrap center-block"><img className="img-responsive center-block" src="img/logos/sams.gif" /></div></div>
            <div className="col-md-2 col-sm-4 col-xs-6"><div className="logowrap center-block"><img className="img-responsive center-block" src="img/logos/car2.png" /></div></div>
            <div className="col-md-2 col-sm-4 col-xs-6"><div className="logowrap center-block"><img className="img-responsive center-block" src="img/logos/hbd.jpg" /></div></div>
            <div className="col-md-2 col-sm-4 col-xs-6"><div className="logowrap center-block"><img className="img-responsive center-block" src="img/logos/ea.jpeg" /></div></div>
          </div>
          <hr />
        </div>
        <div id="information" className="pad-section">

          <div id="testimonials" className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="panel panel-default">
                  <div className="container bootstrap snippet">
                    <div className="row">
                      <h2 className="text-center text-primary">What our clients said about us?</h2>
                      <hr />
                      <div className="col-md-10 col-md-offset-1">
                        <div className="row testimonials">
                          <div className="col-sm-4">
                            <blockquote>
                              <p className="clients-words">We were lost on our way to battle. HUBZ, couldn't have found us a better
                                                    route!
                                                </p>
                              <span className="clients-name text-primary">— Steven Winston<br /><span >Boy Genius</span></span>
                              <img className="img-thumbnail img-circle" src="img/steven.jpg" />
                            </blockquote>
                          </div>
                          <div className="col-sm-4">
                            <blockquote>
                              <p className="clients-words">HUBZ is the best app of any cohort in our history and future!!</p>
                              <span className="clients-name text-primary">— Avi Snir<br /><span >CEO Elevation Academy</span></span>
                              <img className="img-thumbnail img-circle" src="img/avi.jpg" />
                            </blockquote>
                          </div>
                          <div className="col-sm-4">
                            <blockquote>
                              <p className="clients-words">The HUBZ app is a must for all Israelis travelling across the globe!</p>
                              <span className="clients-name text-primary">— Yariv Levin<br /><span >Minister of Tourism</span></span>
                              <img className="img-thumbnail img-circle" src="img/noscrub.jpg" />
                            </blockquote>
                          </div>
                        </div>

                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-sm-6 footerleft ">
                <div className="logofooter">
                  <img className="img-circle img-thumbnail" src="img/ani1.gif" />
                </div>
                <p>Hubz is a powerful trip planning service. We enable people to create, broaden and share routes with
                            peers. </p>
                <p><i className="fa fa-map-pin"></i> WeWork HaZerem 10 | Tel-Aviv | Israel </p>
                <p><i className="fa fa-phone"></i> 03-674-6999</p>
                <p><i className="fa fa-envelope"></i> E-mail : contact@hubz.com</p>

              </div>

              <div className="col-md-5 col-sm-6 paddingtop-bottom">
                <h3>Social Media Hubz</h3>
                <a href="https://www.linkedin.com/in/eliranamar/" target="_blank" className="sicons btn btn-block btn-social btn-linkedin">
                  <span className="fa fa-linkedin"></span> Hire through Linkedin
                        </a>
                <a href="https://github.com/eliranamar/Routesss" target="_blank" className="sicons btn btn-block btn-social btn-github">
                  <span className="fa fa-github"></span> Clone from github
                        </a>
                <a href="https://twitter.com/realDonaldTrump" target="_blank" className="sicons btn btn-block btn-social btn-twitter">
                  <span className="fa fa-twitter"></span> Follow us on Twitter
                        </a>
              </div>
            </div>
          </div>
        </footer>

      </div>
    );
  }
}

export default Homepage;