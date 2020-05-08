import React from "react"

import "./CallToAction.scss"

const ContactForm = () => (
  <div>
    <div class="field has-addons">
      <div class="control">
        <input class="input" type="text" placeholder="Your Email"/>
      </div>
      <div class="control">
        <a class="button is-info">
          Submit
        </a>
      </div>
    </div>
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