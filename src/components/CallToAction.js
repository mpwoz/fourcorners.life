import React from "react"

import "./CallToAction.scss"

const ContactForm = () => (
  <div>


    <form
      action="https://formspree.io/xwkrppbe"
      method="POST"
    >
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="text" placeholder="Your Email" name="_replyto"/>
        </div>
        <div className="control">
          <button type="submit" className="button is-info">
            Submit
          </button>
        </div>
      </div>
    </form>




  </div>
)
const CallToAction = (props) => (
  <div className="section contact-form">
    <div className="container">
      <h1 className="title">
        Interested in more information and a free email consultation? Get in touch!
      </h1>
      <ContactForm/>
      <p>
        Or, if you prefer, email me directly at <a href="mailto:bre@fourcorners.life">bre@fourcorners.life</a>
      </p>
    </div>
  </div>
)

export default CallToAction