import React from "react"
import styled from "styled-components"

export default function BlobBackground02() {
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
  top: 50vw;
  z-index: -3;
  transform: rotate(180deg);
`

const Blob2 = styled.img`
  position: absolute;
  top: 80vw;
  z-index: -4;
  transform: rotate(180deg);
`