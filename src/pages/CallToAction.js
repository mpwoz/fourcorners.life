import React from "react"

const ContactForm = () => (
  <div>
    <div class="field has-addons">
      <div class="control">
        <input class="input" type="text" placeholder="Email"/>
      </div>
      <div class="control">
        <a class="button is-info">
          Submit
        </a>
      </div>
    </div>
  </div>
)
export const CallToAction = () => (
  <div className="section contact-form">
    <div className="container">
      <h1 className="title">
        For more information and a free consultation, subscribe below!
      </h1>
      <ContactForm/>
    </div>
  </div>
)