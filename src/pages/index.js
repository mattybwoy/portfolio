import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import styles from "./about-css-modules.module.css"
import Container from "../components/container"
//import portrait from "../../static/img_8467"

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
        </h1>
          <img
          src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
           alt="Group of pandas eating bamboo"
         />
  <Container>
      <h2>My Github Repository's</h2>
      <User 
      username = "Matthew Lock"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
      excerpt="Hello I'm Matthew, always follow your dreams"
      />
    </Container>
    </Layout>
  )
}