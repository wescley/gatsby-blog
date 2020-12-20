import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1>Home</h1>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </Layout>  
)

export default IndexPage