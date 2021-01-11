import React from "react"
import styled from "styled-components"

export default function BlobAnimation() {
  return (
    <Wrapper>
      <BlobsWrapper>
        <Blob src="/images/blobs/blob.svg"></Blob>
        <Blob2 src="/images/blobs/blob2.svg"></Blob2>
      </BlobsWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const BlobsWrapper = styled.div``

const Blob = styled.img`
  position: absolute;
  top: 0;
  left: 30px;
  width: 12vmax;
  z-index: -1;
  animation: move 120s ease-in-out infinite;
  transform-origin: 50% 50%;

  @keyframes move {
    0% {
      transform: scale(1) translate(10px, -30px);
    }
    38% {
      transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg);
    }
    40% {
      transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg);
    }
    78% {
      transform: scale(1.3) translate(0vw, 80vh) rotate(-20deg);
    }
    80% {
      transform: scale(1.3) translate(0vw, 80vh) rotate(-20deg);
    }
    100% {
      transform: scale(1) translate(10px, -30px);
    }
  }
`

const Blob2 = styled.img`
  position: absolute;
  top: 0;
  left: 30px;
  width: 12vmax;
  z-index: -1;
  animation: move 80s ease-in-out infinite;
  transform-origin: 50% 50%;

  @keyframes move {
    0% {
      transform: scale(1) translate(10px, -30px);
    }
    38% {
      transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg);
    }
    40% {
      transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg);
    }
    78% {
      transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg);
    }
    80% {
      transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg);
    }
    100% {
      transform: scale(1) translate(10px, -30px);
    }
  }
`
