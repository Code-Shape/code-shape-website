import React from "react"
import styled from "styled-components"
import SEO from "../components/layout/seo"
import HeaderBackground from "../components/backgrounds/HeaderBackground"
import UpdatesIntro from "../components/intros/UpdatesIntro"
import UpdatesSection from "../components/sections/UpdatesSection"

function UpdatesPage() {
  return (
    <Wrapper>
      <HeaderBackground image="../images/blobs/HeaderBlob01.svg" />
      <SEO title="Updates" />
      <UpdatesIntro 
      title="Updates"
      subheader=" We want to create the best experience for you, and by doing so we will update our products over time."
      description="Browse through our latest update and let us know if you have any feedback."
      />
      <UpdatesSection />
    </Wrapper>
  )
}

export default UpdatesPage

const Wrapper = styled.div``
