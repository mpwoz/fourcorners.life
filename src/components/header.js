import PropTypes from "prop-types"
import React from "react"

import { Instagram } from 'react-feather'

import logo from "../images/logo.jpg";


import './header.scss';

const Logo = (props) => (<img className="logo-image"
                              {...props} />);

const Header = ({siteTitle}) => (
  <>
    <header>
      <div className="container">
        {/*<div className="navbar-brand is-size-1">*/}
        {/*<Logo src={logo}/>*/}
        {/*{siteTitle}*/}
        {/*</div>*/}
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
    <section class="hero is-primary">
  <div class="hero-body">
    <div class="container">
      <h1 class="title is-size-2">
        Four Corners
      </h1>
      <h2 class="subtitle">
        Yoga. Nutrition. Coaching.
      </h2>
    </div>
  </div>
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
