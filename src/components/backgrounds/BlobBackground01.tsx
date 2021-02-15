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
`

const Blob = styled.img`
  z-index: -1;
`

const Blob2 = styled.img`
  z-index: -2;
`