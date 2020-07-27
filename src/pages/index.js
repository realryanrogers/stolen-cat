import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Stolen Cat" />
    <div class="logo">
      <Img fluid={data.stolenCatLogoImage.childImageSharp.fluid} />
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    stolenCatLogoImage: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
