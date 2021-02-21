import React from "react"
import styled from "styled-components"

export default function FooterBackground(props) {
  const { image } = props
  return (
    <Wrapper>
      <Image src={image || "../images/waves/FooterWave.svg"} />
    </Wrapper>
  )
}

const Wrapper = styled.div``

const Image = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
`
