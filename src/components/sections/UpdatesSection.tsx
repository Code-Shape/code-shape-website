import React from "react"
import { H1, BodyMain } from "../styles/TextStyles"
import styled from "styled-components"
import UpdateCard from "../cards/UpdateCard"

export default function UpdatesSection() {
  return (
    <Wrapper>
      <UpdateWrapper>
        <UpdateCard
          iconImage="/images/icons/calendar_light.svg"
          title="Update 1"
          titleColor="#FF7F00"
          text="    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <UpdateCard
          iconImage="/images/icons/help_light.svg"
          title="Update 2"
          titleColor="#FF7F00"
          text="    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <UpdateCard
          iconImage="/images/icons/community_light.svg"
          title="Update 3"
          titleColor="#FF7F00"
          text="    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      </UpdateWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0;
`

const UpdateWrapper = styled.div`
  max-width: 65rem;
  padding: 1.875rem;
  margin: 0 auto;
  display: grid;
  grid-gap: 1.875rem;
`
