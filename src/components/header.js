import { graphql, StaticQuery } from "gatsby";
import PropTypes from "prop-types"
import React from "react"

import { Instagram } from 'react-feather'

import logo from "../images/logo.jpg";
import BackgroundImage from 'gatsby-background-image'

import './header.scss';
import Image from "./image";

const Logo = (props) => (<img className="logo-image"
                              {...props} />);


const BackgroundSection = ({className, children}) => (
  <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "tina.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
               render={data => {
                 // Set ImageData.
                 const imageData = data.desktop.childImageSharp.fluid;
                 return (
                   <BackgroundImage Tag="section"
                                    className={className}
                                    fluid={imageData}
                                    backgroundColor={`#040e18`}
                   >
                     {children}
                   </BackgroundImage>
                 )
               }}
  />
);


const Header = ({siteTitle}) => (
  <>
    <header>
      <div className="container">
        <div className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item"> About </a>
            <a className="navbar-item"> Blog </a>
            <a className="navbar-item"> Contact </a>
          </div>

          <div className="navbar-end">
            <a href="http://instagram.com" style={{paddingTop: `8px`}}>
              <Instagram strokeWidth={1.5}/>
            </a>
          </div>

        </div>

      </div>
    </header>
    <section className="hero is-primary splash-img">
      <BackgroundSection>
        <div className="hero-body" style={{minHeight: `440px`}}>
          <div className="container has-text-centered" style={{background: `#000c`}}>
            <h1 className="title is-size-2">
              Four Corners
            </h1>
            <h2 className="subtitle">
              Yoga. Nutrition. Coaching.
            </h2>
          </div>
        </div>
      </BackgroundSection>
    </section>

  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
