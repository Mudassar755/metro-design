import React from "react"

import Layout from "../components/Layout"
import HomePage from "../components/HomePage2"

export default function IndexPage() {
  return (
    <Layout isTransparentHeader={true}>
      <HomePage />
    </Layout>
  )
}
