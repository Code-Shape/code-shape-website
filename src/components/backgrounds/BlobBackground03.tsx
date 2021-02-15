import React from "react"
import styled from "styled-components"

export default function BlobBackground03() {
    return (
      <Wrapper>
        <Blob src="/images/blobs/CasesSectionBlob01.svg" />
      </Wrapper>
    )
  }
  

  const Wrapper = styled.div`
  position: relative;
`

const Blob = styled.img`
  position: absolute;
  top: 20vw;
  z-index: -5;
  transform: rotate(0deg) scale(1.2);
  overflow: hidden;
`