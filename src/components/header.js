import { graphql, StaticQuery } from "gatsby";
import BackgroundImage from 'gatsby-background-image'
import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

import { Instagram } from 'react-feather'

import './header.scss';

const BackgroundSection = ({className, children}) => (
  <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "breanne2.jpg" }) {
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
            <Link className="navbar-item" to="/">Home</Link>
            {/*<Link className="navbar-item" to="/">About</Link>*/}
            <Link className="navbar-item" to="/blog">Blog</Link>
            {/*<Link className="navbar-item" to="/">Contact</Link>*/}
          </div>

          <div className="navbar-end">
            <a href="https://www.instagram.com/breanne.means.strong/" style={{paddingTop: `8px`}}>
              <Instagram strokeWidth={1.5} size={48}/>
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
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header
