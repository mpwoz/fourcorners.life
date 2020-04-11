import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import React from "react"

import { cardContent } from "./cardContent"

const LearnPage = ({ data, location }) => {

  let content = cardContent.map(({ title, icon: IconTag, body, ...rest }) => {

      return (
        <div style={{textAlign: "left"}} >
          <IconTag size={32}/>
          <span className="is-size-2"> {title} </span>
          <p> {body} </p>
        </div>
      )
    },
  )

  console.log(content)

  return (
    <Layout>
      <SEO title="Learn"/>
      <div className="container">

        <span className="is-size-1">Learn More About the Four Corners</span>

        {content}
        <Link to="/">Go back to the homepage</Link>

      </div>

    </Layout>
  )
}

export default LearnPage
