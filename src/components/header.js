import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './header.scss';
import Image from "./image";

import logo from "../images/logo.jpg";


const Logo = (props) => (<img className="logo-image"
  {...props} />);

const Header = ({siteTitle}) => (
  <header>
    <div className="container">
      <div className="navbar-brand is-size-1">
        <Logo src={logo} />
        {siteTitle}
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item"> About </a>
          <a className="navbar-item"> Blog </a>
          <a className="navbar-item"> Contact </a>
        </div>

      </div>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
