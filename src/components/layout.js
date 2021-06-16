import React, { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import { GlobalStyle } from "./styles/GlobalStyles"
import DropDown from "./DropDown"
const Layout = ({ children }) => {
  const [isOpen, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!isOpen)
  }
  return (
    <>
      <GlobalStyle />
      <DropDown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
