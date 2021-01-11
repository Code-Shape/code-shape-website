import React from "react"
import { GlobalStyle } from "../styles/GlobalStyle"
import Footer from "./Footer"
import Header from "./Header"
import "./layout.css"

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
