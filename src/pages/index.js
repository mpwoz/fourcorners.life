import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import breanne from "../images/breanne.jpg";

import './index.scss';

const AboutPicture = ({src}) => (
  <figure className="image">
    <img
      className="is-rounded"
      src={src}/>
  </figure>
);

const Card = (props) => (
  <div className="card">
    <div className="card-content">
      <p className="title">
        {props.title}
      </p>
      <p className="subtitle">
        {props.body}
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
          Submit
        </a>
      </div>
    </div>
  </div>
);

const cardContent = [
  {
    title: "Individuality",
    body: (
      <div>
        <p> Besides a few key components of nutrition, there simply is not enough understanding of the human body at
          first glance to make any assumptions about what is going to work best for your individual goals -- so we don’t
          try to.</p>
        <p>Every program is customized to fit where you want to go, your preferences today, your constitution, your
          lifestyle.</p>
        <p>There is no demonization of a particular diet, nor lifting up one above all others. This program is meant to
          get you on level footing so that you can make clear and conscious nutrition choices for yourself moving
          forward for years to come.</p>
      </div>
    )
  },
  {
    title: "Sustainability",
    body: (
      <div>
        <p>Once you are making choices for yourself, it’s time to consider the impact that you have on the world around
          you. Our food choices truly do only impact ourselves and our families, but are tied to a much larger picture.
          Food connects cultures alike and different so getting to connected to the story of our food and our impact is
          empowering.</p>
        <p>If we are going to look to long-term healthy habits, we have to consider are the choices scalable and
          accessible to all in years to come? I hope you feel a sense of proud responsibility coming out of this program
          and moving forward!</p>
      </div>
    )
  },
  {
    title: "Movement",
    body:
      (<div>

        <p>For the heart, soul and physical form, our bodies must move. With extensive background in human movement, I
          believe some consistent form of movement that you love in the most important starting place. I will help you
          decipher what that might be, provide free resources and recommendations and build movement into your nutrition
          plan.</p>
        <p>If you are interested in diving into the practice of yoga, I’m also happy to take those teachings further.
          Group session classes or private lessons are available any time including the study beyond Asana (physical
          practices)</p>
      </div>)
  },
  {
    title: "Spirituality",
    body:
      (<div>

        <p>In many ways synonymous with purpose, there is an element in all Four Corners programming regarding
          connecting to something greater than ourselves. In moments of fear, it is hope. In moments of uncertainty, it
          is faith. Whatever the body or tradition that you believe in, know that we are infinite beings with the
          capability to start moving our lives toward our dreams.</p>
        <p>This work is so much more than food choices, workouts or yoga poses. It is about becoming who you were meant
          to be in this lifetime and realizing full potential.</p>
      </div>)
  },
];

const CallToAction = () => (
  <div className="section contact-form">
    <div className="container">
      <h1 className="title">
        For more information and a free consultation, subscribe below!
      </h1>
      <ContactForm/>
    </div>
  </div>
)

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
            <p>
              Bre(anne) Flynn is first and foremost a student of human wellness and through personal experience and
              formalized teaching, is here to help people achieve their highest potential. She believes that the world
              is a much better place when everyone is feeling healthy, safe and capable.
            </p>
            <p>

              Breanne is a 200-hour Registered Yoga Teacher, and Precision Nutrition Level 1 Coach and has a minor in
              Dance from Gonzaga University. Her degree in Political Science and work for many years has had an emphasis
              on food and nutrition policy and the connection of our individual choices to a healthy and happy planet.
              She has seen firsthand the connection of movement, food, spirituality and purpose to happiness and
              prosperity.
            </p>
            <Link to="/about/">Click for more -></Link>
          </div>

        </div>
      </div>
    </div>

    <div className="section contact-form">
      <div className="container">
        <h1 className="title">
          Pricing
        </h1>

        <div className="columns">

          <div className="column">
            <b>
              What you receive
            </b>

            <ul>
              <li>- 30 minute check in calls once a week moving forward</li>
              <li>- Customized resources based on individual needs</li>
              <li>- Access to Precision Nutrition materials</li>
              <li>- Online quick responses and support</li>
              <li>- New Four Corners content as it becomes available</li>
            </ul>
          </div>

          <div className="column">
            <b>
              Pricing structure:
            </b>
            <ul>
              <li>1 month - $75</li>
              <li>2 month - $125</li>
              <li>3 months - $150</li>
            </ul>
          </div>

        </div>

      </div>
    </div>

    <CallToAction/>


    <div className="section four-corners">
      <div className="container">
        <h1 className="title">
          The Four Corners
        </h1>
        <div className="columns">

          <div className="container">
            <div className="column">
              <Card {...cardContent[0]}/>
            </div>
            <div className="column">
              <Card {...cardContent[1]}/>
            </div>
          </div>

          <div className="container">
            <div className="column">
              <Card {...cardContent[2]}/>
            </div>
            <div className="column">
              <Card {...cardContent[3]}/>
            </div>
          </div>

        </div>
      </div>
    </div>

    <CallToAction/>

  </Layout>
)

export default IndexPage
