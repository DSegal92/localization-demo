import React, { useState } from 'react'
import styled from 'styled-components'

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

const String = styled.div`
  top: ${props => `${props.verticalOffset}px` };
  left: 122px;
  position: absolute;
`

const AndroidPrefix = styled(NonEditable)`color: #6d9cbe;`
const EqualSign = styled(NonEditable)`color: #e8bf6a;`

export default ({ updateLocalizationString, value, verticalOffset }) => {
  const CHARACTER_WIDTH = 10

  const [stringWidth, setStringWidth] = useState("240px")

  const updateString = (string) => {
    setStringWidth(`${string.length * CHARACTER_WIDTH}px`)
    updateLocalizationString(string)
  }

  return (
    <String verticalOffset={ verticalOffset }>
      <Editable>
        <AndroidPrefix>android:text</AndroidPrefix>
        <EqualSign>=</EqualSign>
        <TextArea value={ value }
                  width={ stringWidth }
                  onChange={ (e) => updateString(e.target.value)  }/>
      </Editable>
    </String>
  )
}
