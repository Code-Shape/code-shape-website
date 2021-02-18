import React from "react"
import styled from "styled-components"

export default function HeaderBackground(props) {
  const { image } = props
  return (
    <Wrapper>
      <Image src={image || "../images/logo/logo.svg"} />
    </Wrapper>
  )
}

const Wrapper = styled.div``

const Image = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  height: 100px;
  width: 3000px;
  z-index: -1;
`
