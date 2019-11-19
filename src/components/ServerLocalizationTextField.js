import React, { useState } from 'react'
import CodeMirror from 'react-codemirror'
import styled from 'styled-components'
import FakeButPlausibleAndroidLayout from './FakeButPlausibleAndroidLayout'

import 'codemirror/mode/haml/haml'

const Container = styled.div`
  position: relative;
  width: 50vw;
  height: 700px;
  background-color: #232323;
  overflow: scroll;
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
  position: relative;
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
  background-color: red;

  ::after {
    position: absolute;
    z-index: 9;
    right: -20px;
    content: '←';
    color: white;
  }
`

const AndroidPrefix = styled(NonEditable)`color: #6d9cbe;`
const EqualSign = styled(NonEditable)`color: #e8bf6a;`

const String1 = styled.div`
  top: 502px;
  left: 122px;
  position: absolute;
`

const TextField = ({ localizationString, setLocalizationString }) => {
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

  return (
    <Container>
      <FakeButPlausibleAndroidLayout />
      <String1>
        <Editable>
          <AndroidPrefix>android:text</AndroidPrefix>
          <EqualSign>=</EqualSign>
          <TextArea value={ localizationString }
                    width={ stringWidth }
                    onChange={ (e) => updateString(e.target.value)  }/>
        </Editable>
      </String1>
    </Container>
  )
}

export default React.memo(TextField)
