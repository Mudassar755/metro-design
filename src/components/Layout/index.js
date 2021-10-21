/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import sal from "sal.js"
import "../../../node_modules/sal.js/dist/sal.css"

import Header from "./Header"
import Footer from "./Footer"
import SEO from "../SEO"
import "./styles.css"

export default function Layout({
  isTransparentHeader,
  noFooter = false,
  children,
}) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  React.useEffect(() => {
    sal()
  }, [])

  return (
    <div className="root">
      <SEO />
      <Header MemoizedHeader={isTransparentHeader} />
      <main>{children}</main>
      {!noFooter && <Footer />}
    </div>
  )
}
