import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div className="center-block">
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
          <p className="copyright">Designed by <a href="https://google.com" target="_blank" title="Colorlib">Eliran&Irad</a></p>
        </form>
      </div>
    );
  }
}

export default Contact;