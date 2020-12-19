import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

export default function About({ data }) {
  return (
    <Layout>
      <br></br>
      <h2>About {data.site.siteMetadata.title}</h2>
      <p>
        I like computers
      </p>
      </Layout>
  )
}

export const query = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
}
`