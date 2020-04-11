/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"

import Header from "./header"
import "./layout.scss"

import CallToAction from "./CallToAction"

const Layout = ({children}) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title}/>
        <main>{children}</main>
        <footer className="footer">
          <section className="section">
            <div className="container" style={{color:`#aaa`}}>

              <CallToAction/>
              © {new Date().getFullYear()}, Built by
              {` `}
              <a style={{color:`#aaa`}} href="http://mpwoz.com">@mpwoz</a>
            </div>
          </section>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
