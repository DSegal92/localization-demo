import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: white;
  width: 50vw;
  height: 600px;
  margin-top: 80px;
  border-radius: 10px;
  border-top: 40px solid rgb(231, 234, 237);
  position: relative;
  padding: 15px;
`

const ControlButton = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 15px;
  position: absolute;
  top: -25px;
`

const Close = styled(ControlButton)`
  background-color: rgb(239, 109, 93);
  left: 15px;
`

const Minimize = styled(ControlButton)`
  background-color: rgb(245, 194, 80);
  left: 40px;
`

const Expand = styled(ControlButton)`
  background-color: rgb(99, 201, 86);
  left: 65px;
`

export default ({ localizedString }) => (
  <Container>
    <Close />
    <Minimize />
    <Expand />

    <h1>{ localizedString }</h1>
  </Container>
)
