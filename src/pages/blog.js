import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./blog.scss"

const toBlogPostList = allMarkdownRemark =>
  <ul>
    {allMarkdownRemark.edges
      .map(({ node }) => (
        <li>
          <div className="blogpost container">
            <Link to={node.fields.slug}>
              <h1 className="is-size-3">
                {node.frontmatter.title}
              </h1>
              <h2 className="is-size-5">
                {node.frontmatter.date}
              </h2>
            </Link>
          </div>
        </li>
      ))}
  </ul>

const BlogPage = ({ data, location }) => (
  <Layout>
    <SEO title="Blog"/>
    <div className="container">

      <h1 className={"title"}>Blog posts:</h1>
      {toBlogPostList(data.allMarkdownRemark)}
      {/*<Link to="/">Go back to the homepage</Link>*/}
    </div>
  </Layout>
)

export const pageQuery = graphql`
    query Blog {
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                    }
                }
            }
        }
    }
`

export default BlogPage
