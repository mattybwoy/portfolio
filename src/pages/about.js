import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

export default function About({ data }) {
  return (
    <Layout>
      <br></br>
      <h1>About {data.site.siteMetadata.title}</h1>
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