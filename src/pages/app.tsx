import React from "react"
import styled from "styled-components"
import SEO from "../components/layout/seo"
import { Router } from "@reach/router"
import Profile from "../components/Profile"
import Login from "../components/Login"
import PrivateRoute from "../components/PrivateRoute"
import Status from "../components/Status"

function HelpPage() {
  return (
    <Wrapper>
      <SEO title="Login" />
      <Status />
      <Router>
        <PrivateRoute path="/app/profile" component={Profile} />
        <Login path="/app/login" />
      </Router>
    </Wrapper>
  )
}

export default HelpPage

const Wrapper = styled.div``
