import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: white;
  width: 360px;
  height: 750px;
  margin-top: 80px;
  border-radius: 30px;
  border: 20px solid #171717;
  position: relative;
  padding: 15px;
`

const Notch = styled.div`
  position: absolute;
  width: 280px;
  height: 40px;
  border-radius: 20px;
  left: 55px;
  top: -20px;
  background-color: black;
`

const ControlButton = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 15px;
  position: absolute;
  top: -25px;
`

export default ({ localizations, language }) => (
  <Container>
    <Notch />
    <h1>{ localizations[language]['string_1'] }</h1>
  </Container>
)
