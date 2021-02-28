import React from "react"
import styled from "styled-components"
import SEO from "../components/layout/seo"
import HeaderBackground from "../components/backgrounds/HeaderBackground"
import UpdatesIntro from "../components/intros/UpdatesIntro"
import UpdatesCard from "../components/cards/UpdatesCard"
import BlobBackground from "../components/backgrounds/BlobBackground"

function UpdatesPage() {
  return (
    <Wrapper>
      <SEO title="Updates" />
      <HeaderBackground image="../images/blobs/HeaderBlob01.svg" />
      <UpdatesIntro 
        title="Updates"
        description="We want to create the best experience for you, and by doing so we will update our products over time."
        text="Browse through our latest update and let us know if you have any feedback."
      />
      <BlobBackground image="/images/blobs/BackgroundBlob04.svg" />
      <UpdatesCard 
        title="Update 01"
        titleColor="#F89B29"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        image="/images/icons/calendar_light.svg"
        link=""
        borderColor="3px solid white"
        imageBackgroundColor="#F89B29"
        backgroundColor="transparent"
      />
      <UpdatesCard 
        title="Update 02"
        titleColor="#F51D7E"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        image="/images/icons/learner02_dm.svg"
        link=""
        borderColor="3px solid white"
        imageBackgroundColor="#F51D7E"
        backgroundColor="transparent"
      />
      <UpdatesCard 
        title="Update 03"
        titleColor="#3E16BB"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        image="/images/icons/help_light.svg"
        link=""
        borderColor="3px solid white"
        imageBackgroundColor="#3E16BB"
        backgroundColor="transparent"
      />
    </Wrapper>
  )
}

export default UpdatesPage

const Wrapper = styled.div`
`
