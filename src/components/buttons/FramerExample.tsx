import React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

export default function App() {
  const [isOn, setIsOn] = useState(false)

  const toggleSwitch = () => setIsOn(!isOn)

  return (
    <Wrapper>
      <Switch className="switch" data-isOn={isOn} onClick={toggleSwitch}>
        <Handle>
          <motion.div
            className="handle"
            layout
            transition={spring}
            whileHover={{ scale: 1.1 }}
          />
        </Handle>
      </Switch>
    </Wrapper>
  )
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
}

const Wrapper = styled.div`
  * {
    box-sizing: border-box;
  }
  .switch[data-isOn="true"] {
    justify-content: flex-end;
    background-color: #8f33d7;
  }
`

const Switch = styled(motion.div)`
  margin: 0 auto;

  width: 120px;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: flex-start;
  border-radius: 50px;
  padding: 10px;
  cursor: pointer;
`
const Handle = styled.div`
  .handle {
    width: 60px;
    height: 60px;
    background-color: white;
    border-radius: 40px;
  }
`
