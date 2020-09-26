import React, { Component } from 'react';
import './Contact.scss';

class Contact extends Component {
  render() {
    return (
      <div>
        <div id="page-container">
          <div id="contact-head">
            <h1>WELCOME TO CONTACT US</h1>
            <div className="manage-para">
              <p>
                Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                tempor incididunt ut labore et dolore
              </p>
              <h1>MEET US</h1>
              <p>
                995 West Sulphur Springs Dr. Apple Valley, CA 92307 (423)
                652-0464 824 Kentucky Ave #APT 1 Bristol, Tennessee(TN), 37620
              </p>
            </div>
          </div>
          <div id="contact-container">
            <div className="contact-card">
              <div className="container-head">
                <div className="head-detail">
                  <h1> Message us</h1>
                  <div className="manage-head-para">
                    <p>
                      Hey we will love to hear some words from you do let us
                      know of nay query
                    </p>
                  </div>
                </div>
                <img
                  className="notes-img"
                  src="./images/notes.png"
                  alt="notes"
                ></img>
              </div>
              <div className="manage-form">
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
                    Message Us
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
