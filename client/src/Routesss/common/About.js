import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div>
        <div className="container">

          <div className="row text-center">
            <div>
              <h1>About Us</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis libero, sit. Assumenda numquam consequuntur eum deleniti non eligendi, quo corporis at qui consequatur ab amet deserunt accusamus molestiae quidem vitae necessitatibus ad aliquid minus, sapiente eius doloribus! Dicta architecto sit nemo ducimus aut omnis atque velit, consectetur animi iste, laudantium doloribus dolorem ullam tempore! Esse vel omnis nemo incidunt repudiandae dolore voluptatibus minima assumenda commodi odio tempora aliquam illo, voluptatem minus ex voluptas laboriosam doloremque praesentium, dolorem et consectetur, distinctio similique. Culpa accusantium deleniti qui recusandae vel, ipsam, dignissimos repudiandae, soluta magni consectetur quos et optio exercitationem expedita ratione! A.</p>
            </div>
            <div>
              <h2>Our Team</h2>
              <br />
              <div className="col-md-4 col-lg-4 col-sm-4 col-xs-12">
                <img style={{ maxWidth: "200px" }} className="center-block img-responsive img-circle" src="/img/tesla.jpg" alt="" />
                <h4>Tesla</h4>
                <h6>Full-Stack</h6>
              </div>
              <div className="col-md-4 col-lg-4 col-sm-4 col-xs-12">
                <img style={{ maxWidth: "200px" }} className="center-block img-responsive img-circle" src="/img/einstein.jpeg" alt="" />
                <h4>Einstein</h4>
                <h6>Team Leader</h6>
              </div>
              <div className="col-md-4 col-lg-4 col-sm-4 col-xs-12">
                <img style={{ maxWidth: "200px" }} className="center-block img-responsive img-circle" src="/img/elon.png" alt="" />
                <h4>Musk</h4>
                <h6>Designer</h6>
              </div>
            </div>
          </div>
        </div>

        <footer id="about-footer">
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

export default About;