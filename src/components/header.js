import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { Link } from "gatsby"

import { Instagram } from "react-feather"

import "./header.scss"

const BackgroundSection = ({ className, children }) => (
  <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "sunset-yoga.png" }) {
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
                 const imageData = data.desktop.childImageSharp.fluid
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
)


const NavBar = () => {

  let [active, setActive] = useState(false)

  const isActiveClass = () => active ? " is-active" : ""
  const toggleActive = () => setActive(x => !x)

  return <nav className={"navbar" + isActiveClass()}>
    <div className="navbar-brand">
      <a role="button" className="navbar-burger"
         onClick={toggleActive}
         aria-label="menu" aria-expanded="false"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div className={"navbar-menu" + isActiveClass()}>
      <div className="navbar-start">
        <Link className="navbar-item" to="/">Home</Link>
        {/*<Link className="navbar-item" to="/">About</Link>*/}
        <Link className="navbar-item" to="/blog">Blog</Link>
        {/*<Link className="navbar-item" to="/">Contact</Link>*/}
      </div>

      <div className="navbar-end">
        <a className="navbar-item"
           href="https://www.instagram.com/breanne.means.strong/"
           target="_blank"
        >
          <Instagram strokeWidth={.5} size={32}/>
        </a>
      </div>

    </div>
  </nav>
}


const Header = ({ siteTitle }) => (
  <>
    <header>
      <NavBar/>
    </header>
    <section className="hero is-primary splash-img">
      <BackgroundSection>
        <div className="hero-body" style={{ minHeight: `440px` }}>
          <div className="container has-text-centered" style={{ background: `#000c` }}>
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
