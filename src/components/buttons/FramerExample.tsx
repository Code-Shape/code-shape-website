import React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import "./FramerExample.css"
import styled from "styled-components"

/**
 * This is an example of layout animations in Framer Motion 2.
 *
 * It's as simple as adding a `layout` prop to the `motion.div`. When
 * the flexbox changes, the handle smoothly animates between layouts.
 *
 * Try adding whileHover={{ scale: 1.2 }} to the handle - the layout
 * animation is now fully compatible with user-set transforms.
 */

export default function App() {
  const [isOn, setIsOn] = useState(false)

  const toggleSwitch = () => setIsOn(!isOn)

  return (
    <Wrapper className="switch" data-isOn={isOn} onClick={toggleSwitch}>
      <motion.div
        className="handle"
        layout
        transition={spring}
        whileHover={{ scale: 1.1 }}
      />
    </Wrapper>
  )
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
}

const Wrapper = styled(motion.div)`
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
