import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Avatar from "../Avatar"

const Profile = () => (
  <StaticQuery
    query={graphql`
      query MySiteMetadata {
        site {
          siteMetadata {
            title
            author
            description
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { title, author, description },
      },
    }) => (
      <div className="Profile-wrapper">
        <Avatar/>
        <h1>{title}</h1>
        <h2>{author}</h2>
        <p>{description}</p>
      </div>
    )}
  />
)

export default Profile