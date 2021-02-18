import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { menuData } from "../../data/menuData"
import MenuButton from "../buttons/MenuButton"
import { Link } from "gatsby"
import MenuTooltip from "../tooltips/MenuTooltip"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef()
  const tooltipRef = useRef()

  function handleClick(event) {
    setIsOpen(!isOpen)
    event.preventDefault()
  }

  function handleClickOutside(event) {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      !tooltipRef.current.contains(event.target)
    ) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <Wrapper>
      <Link to="/">
        <Logo>
          <Img fluid={data.logo.childImageSharp.fluid} alt="Code Shape Logo" />
        </Logo>
      </Link>
      <MenuWrapper count={menuData.length} ref={ref}>
        {menuData.map((item, index) => (
          <MenuButton key={index} item={item} />
        ))}
        <HamburgerWrapper onClick={event => handleClick(event)}>
          <MenuButton item={{ icon: "/images/icons/hamburger_dm.svg" }} />
        </HamburgerWrapper>
      </MenuWrapper>
      <div ref={tooltipRef}>
        <MenuTooltip isOpen={isOpen} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  top: 10px;
  display: grid;
  grid-template-columns: 44px auto;
  width: 100;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
`

const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(${props => props.count}, auto);

  @media (max-width: 1000px) {
    grid-template-columns: auto;
    > a {
      display: none;
    }
  }
`

const HamburgerWrapper = styled.div`
  display: none;

  @media (max-width: 1000px) {
    display: block;
  }
`

const Logo = styled.div`
  width: 100px;
`
