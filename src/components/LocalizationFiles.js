import React, { useState } from 'react'
import CodeMirror from 'react-codemirror'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import 'codemirror/mode/xml/xml'

const Container = styled.div`
  width: 50vw;
`

export default ({ languages, updateFile }) => {
  const [language, setLanguage] = useState('language_1')

  return (
    <Tabs>
    <TabList style={{ backgroundColor: 'white', marginBottom: 0 }}>
      { languages.map((_, index) =>
          <Tab onClick={() => setLanguage(`language_${index+1}`) }>Language {index + 1}</Tab>
        )
      }
    </TabList>
    { languages.map(l => (
      <TabPanel>
        <Container>
          <CodeMirror value={ l }
                      options={{ mode: 'xml' }}
                      onChange={ (e) => updateFile(language, e) }/>
        </Container>
      </TabPanel>
    ))}
  </Tabs>
  )
}
