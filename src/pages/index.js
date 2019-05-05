import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import breanne from "../images/breanne.jpg";

const AboutPicture = ({src}) => (
  <figure className="image">
    <img
      className="is-rounded"
      src={src}/>
  </figure>
);

const YogaCard = () => (
  <div className="card">
    <div className="card-content">
      <p className="title">
        Yoga
      </p>
      <p className="subtitle">
        The most important pillar. I believe everyone should do yoga every day for a healthy mind and body.
      </p>
    </div>
    <footer className="card-footer">
      <p className="card-footer-item">
      <span>
        <Link to={"/learn/"}>Learn more</Link>
      </span>
      </p>
    </footer>
  </div>
);

const ContactForm = () => (
  <div>
    <div class="field has-addons">
      <div class="control">
        <input class="input" type="text" placeholder="Email"/>
      </div>
      <div class="control">
        <a class="button is-info">
          Subscribe
        </a>
      </div>
    </div>
  </div>
);

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>

    <div className="section about-me">
      <div className="container">
        <div className="columns">
          <div className="column">
            <AboutPicture src={breanne}/>
          </div>
          <div className="column">
            <h1 className="title">Meet Bre</h1>
            <p>This is some text about me</p>
            <Link to="/about/">Click for more -></Link>
          </div>

        </div>
      </div>
    </div>

    <div className="section four-corners">
      <div className="container">
        <h1 className="title">
          The Four Corners
        </h1>
        <div className="columns">
          <div className="column"><YogaCard/></div>
          <div className="column"><YogaCard/></div>
          <div className="column"><YogaCard/></div>
          <div className="column"><YogaCard/></div>
        </div>
      </div>
    </div>

    <div className="section contact-form">
      <div className="container">
        <h1 className="title">
          Subscribe to email updates
        </h1>
        <ContactForm/>
      </div>
    </div>

  </Layout>
)

export default IndexPage
