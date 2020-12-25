import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Avatar from "../Avatar"
import * as S from './styled'

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
      <S.ProfileWrapper>
        <S.ProfileLink>
        <Avatar/>
        <S.ProfileAuthor>
          {title}
        </S.ProfileAuthor>
        <h2>{author}</h2>
        </S.ProfileLink>
        <p>{description}</p>
      </S.ProfileWrapper>
    )}
  />
)

export default Profile