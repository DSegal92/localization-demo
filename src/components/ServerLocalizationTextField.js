import React, { useState } from 'react'
import Highlight from 'react-highlight.js'
import CodeMirror from 'react-codemirror'
import styled from 'styled-components'

import 'codemirror/mode/haml/haml'

const Container = styled.div`
  position: relative;
  width: 50vw;
  height: 300px;
  background-color: #232323;
`

const TextArea = styled.input`
  display: inline;
  width: ${ props => props.width};
  background-color: #232323;
  border: 0;
  padding: 0;
  outline: 0;
  font-family:  source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  color: rgb(165, 194, 97);
  font-size: 1em;
`

const NonEditable = styled.span`
  display: inline;
  background-color: #232323;
  border: 0;
  padding: 0;
  outline: 0;
  font-family:  source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  color: white;
  font-size: 1em;
`

const Editable = styled.div`
  position: absolute;
  top: 64px;
  left: 60px;
`

export default ({ localizationString, setLocalizationString }) => {
  const CHARACTER_WIDTH = 10

  const [code, setCode] = useState('')
  const [stringWidth, setStringWidth] = useState("240px")

  const getPixelWidth = (string) => (
    `${string.length * CHARACTER_WIDTH}px`
  )

  const updateString = (string) => {
    setStringWidth(`${string.length * CHARACTER_WIDTH}px`)
    setLocalizationString(string)
  }

  const test = `
  .row
    %h1
  `

  return (
    <Container>
      <Highlight>
        { test }
      </Highlight>
      <Editable>
        <NonEditable>= t('</NonEditable>
        <TextArea value={ localizationString }
                  width={ stringWidth }
                  onChange={ (e) => updateString(e.target.value)  }/>
        <NonEditable>')</NonEditable>
      </Editable>
    </Container>
  )
}
