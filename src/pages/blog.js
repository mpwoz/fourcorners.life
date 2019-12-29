import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const toBlogPostList = allMarkdownRemark =>
  <ul>
    {allMarkdownRemark.edges
      .map(({node}) => (
        <li>
          <Link to={node.fields.slug}>
            {node.frontmatter.title}
          </Link>
        </li>
      ))}
  </ul>;

const BlogPage = ({data, location}) => (
  <Layout>
    <SEO title="Blog"/>
    <h1>Blog posts:</h1>
    {toBlogPostList(data.allMarkdownRemark)}
    <Link to="/">Go back to the homepage</Link>
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
`;

export default BlogPage
