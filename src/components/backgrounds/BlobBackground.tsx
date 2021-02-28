import React from "react"
import styled from "styled-components"

export default function BlobBackground(props) {
  const { image } = props
  return (
    <Wrapper>
      <Image src={image || "../images/logos/logo.svg"} />
    </Wrapper>
  )
}

const Wrapper = styled.div``

const Image = styled.img`
  position: relative;
  left: 0;
  z-index: -2;
  margin-bottom: -200px;
`
