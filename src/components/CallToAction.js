import React from "react"

import "./CallToAction.scss"

const ContactForm = () => {

  const absolutStyle = {
    "position": "absolute",
    "left": "-5000px"
  }
  const displayNone = {"display": "none"};

  return (
    <div>
      <form action="https://life.us7.list-manage.com/subscribe/post?u=52a6579ea33cdf370cfbe0663&amp;id=a77d62c0ac"
            method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate"
            target="_blank">
        <div className="field has-addons">
          <div className="control">
            <input className="input" type="text" placeholder="Your Email" name="EMAIL" id="mce-EMAIL"/>
          </div>
          <div className="control">
            <button type="submit" className="button is-info">
              Submit
            </button>
          </div>
        </div>
        <div id="mce-responses" className="clear">
          <div className="response" id="mce-error-response" style={displayNone}/>
          <div className="response" id="mce-success-response" style={displayNone}/>
        </div>
        <div style={absolutStyle} aria-hidden="true"><input type="text" name="b_52a6579ea33cdf370cfbe0663_a77d62c0ac"
                                                            tabIndex="-1" value=""/></div>
      </form>
    </div>
  );
}
const CallToAction = (props) => (
  <div className="section contact-form">
    <div className="container">
      <h1 className="title">
        Interested in more information and a free email consultation? Get in touch!
      </h1>
      <ContactForm/>
    </div>
  </div>
)

export default CallToAction
