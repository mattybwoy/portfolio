import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"
import CSS from "./layout.module.css"
import logo from "../../static/favicon.ico"

import { rhythm } from "../utils/typography"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }`
  )
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          <h1 className = "name">{data.site.siteMetadata.title}</h1>
        </h3>
      </Link>
        <ul style={{ listStyle: `none`, float: `right`, width: `20%` }}>
           <ListLink to="/">Home</ListLink>
           <ListLink to="/blog">Blog</ListLink>
           <ListLink to="/about/">About</ListLink>
           <ListLink to="/contact/">Contact</ListLink>
        </ul>
      {children}
      <footer>A MATTYBWOY CREATION<br/>Powered by Gatsby<br></br>
      <img src = {logo} alt="https://www.gatsbyjs.com/" width= "30"></img>
      </footer>
      <ul style={{ float:`left`, listStyle: `none`, width: `100%`, textAlign: `center`}}>
            <a className = "contacts"
              href="https://github.com/mattybwoy"
              target='_blank'
              rel="noopener noreferrer">GitHub</a>
            <a className = "contacts"
              href="https://www.linkedin.com/in/matthew-lock-6a97481b6/"
              target='_blank'
              rel="noopener noreferrer">LinkedIn</a>
            <a className="contacts"
              href="mailto:matthew_lock20@hotmail.com"
              target='_blank'
              rel="noopener noreferrer">Email</a>
          </ul>
    </div>
  )
}