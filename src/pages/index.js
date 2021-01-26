import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import breanne from "../images/breanne.jpg"

import "./index.scss"
import Card from "../components/Card"
import { cardContent } from "../components/cardContent"
import CallToAction from "../components/CallToAction"

const AboutPicture = ({ src }) => (
  <figure className="image">
    <img
      className="is-rounded"
      src={src}/>
  </figure>
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
            {/*<Link to="/about/">Click for more -></Link>*/}
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


  </Layout>
)

export default IndexPage
