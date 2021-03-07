import React from "react"
import styled from "styled-components"
export default function BlobBackground(props) {
  const { image } = props
  return (
    <Wrapper>
      <Image src={image || "../images/blobs/BackgroundBlob01.svg"} />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  padding-bottom: 10rem;
`
const Image = styled.img`
  position: absolute;
  left: 0;
  z-index: -10;
`
