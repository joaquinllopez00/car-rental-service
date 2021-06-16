import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Cars from "../components/Cars"
const CarsPage = () => (
  <Layout>
    <Seo title="Cars" />
    <Cars />
  </Layout>
)

export default CarsPage
