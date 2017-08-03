import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-4 col-xl-4"></div>
            <div className="col-md-4 col-lg-4 col-xl-4">
              <form id="contact" action="" method="post">
                <h3>Contact Us!</h3>
                <h4>request for custom quote</h4>
                <fieldset>
                  <input placeholder="Your name" type="text" tabIndex="1" required autoFocus />
                </fieldset>
                <fieldset>
                  <input placeholder="Your Email Address" type="email" tabIndex="2" required />
                </fieldset>
                <fieldset>
                  <input placeholder="Your Phone Number (optional)" type="tel" tabIndex="3" />
                </fieldset>
                <fieldset>
                  <input placeholder="Your Web Site (optional)" type="url" tabIndex="4" />
                </fieldset>
                <fieldset>
                  <textarea placeholder="Type your message here...." tabIndex="5" required></textarea>
                </fieldset>
                <fieldset>
                  <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                </fieldset>
                <p className="copyright">Designed by <a href="https://github.com/eliranamar" target="_blank" title="Colorlib">Eliran</a></p>
              </form>
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4"></div>

          </div>

        </div>

        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-sm-6 footerleft ">
                <div className="logofooter">
                  <img className="img-circle img-thumbnail" src="img/smlogo.jpg" />
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

export default Contact;