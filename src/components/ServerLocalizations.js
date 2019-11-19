import React, { useState } from 'react'
import Highlight from 'react-highlight.js'
import CodeMirror from 'react-codemirror'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import 'codemirror/mode/yaml/yaml'

const Container = styled.div`
  width: 50vw;
`

export default ({ localizationFile, setLocalizationFileValue }) => {
  return (
    <Tabs>
    <TabList style={{ backgroundColor: 'white', marginBottom: 0 }}>
      <Tab>Language 1</Tab>
      <Tab>Language 2</Tab>
    </TabList>
    <TabPanel>
      <Container>
        <CodeMirror value={ localizationFile } options={{ mode: 'yaml' }} onChange={ (e) => setLocalizationFileValue(e) }/>
      </Container>
    </TabPanel>
    <TabPanel>
      <Container>
        <CodeMirror value={ `test` } options={{ mode: 'yaml' }} onChange={ (e) => setLocalizationFileValue(e) }/>
      </Container>
    </TabPanel>
  </Tabs>
  )
}
