import React from "react"
import styled from "styled-components"

export default function BlobBackground01() {
    return (
      <Wrapper>
        <Blob src="/images/blobs/CasesSectionBlob01.svg" />
        <Blob2 src="/images/blobs/CasesSectionBlob02.svg" />
      </Wrapper>
    )
  }
  

  const Wrapper = styled.div`
  position: relative;
`

const Blob = styled.img`
  position: absolute;
  top: 0vw;
  z-index: -1;
`

const Blob2 = styled.img`
  position: absolute;
  top: 20vw;
  z-index: -2;
`