import React, { Component } from 'react';
import './Contact.scss';

class Contact extends Component {
  render() {
    return (
      <div>
        <div id="page-container">
          <div id="contact-head">
            <h1>Contact Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
              tempor incididunt ut labore et dolore
            </p>
            <h1>Address line</h1>
            <p> 995 West Sulphur Springs Dr. Apple Valley, CA 92307</p>
          </div>
          <div id="contact-container">
            <div className="contact-card">
              <h1>Send us message</h1>
              <form>
                <input
                  type="text"
                  id="fname"
                  placeholder="First Name"
                  name="fname"
                ></input>
                <br />
                <input
                  type="text"
                  id="lname"
                  placeholder="Last Name"
                  name="lname"
                ></input>
                <br />
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  name="email"
                ></input>
                <br />
                <textarea placeholder="Message" rows="7" cols="42"></textarea>
                <button className="submit-btn" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
