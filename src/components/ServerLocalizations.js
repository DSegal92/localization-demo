import React, { useState } from 'react'
import Highlight from 'react-highlight.js'
import CodeMirror from 'react-codemirror'
import styled from 'styled-components'

import 'codemirror/mode/yaml/yaml'

const Container = styled.div`
  width: 50vw;
`

export default ({ localizationFile, setLocalizationFileValue }) => {
  return (
    <Container>
      <CodeMirror value={ localizationFile } options={{ mode: 'yaml' }} onChange={ (e) => setLocalizationFileValue(e) }/>
    </Container>
  )
}
