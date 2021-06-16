import * as React from "react"
import Hero from "../components/Hero"
import Cars from "../components/Cars"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import Contact from "../components/Contact"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Cars heading="Take a look at the options" />
    <Testimonials />
    <Stats />
    <Contact />
  </Layout>
)

export default IndexPage
