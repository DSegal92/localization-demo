import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ServerLocalizationTextField from './components/ServerLocalizationTextField'
import ServerLocalizations from './components/ServerLocalizations'
import styled from 'styled-components'
import 'codemirror/lib/codemirror.css'
import yaml from 'js-yaml'
import _ from 'lodash'
import BrowserView from './components/BrowserView'

const Container = styled.div`
  background-color: #002b36;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Localizations = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const test = `
  views:
    test_strings:
      hello: hello, world!
`

function App() {
  const [localizationString, setLocalizationString] = useState('views.test_strings.hello')
  const [localizationFile, setLocalizationFileValue] = useState(test)
  const [localizedString, setLocalizedString] = useState()

  useEffect(() => {
    let loadedFile

    try {
      loadedFile = yaml.safeLoad(localizationFile.replace(/\t/g, '    '))
    }
    catch {
      console.log('nope')
    }

    console.log(JSON.stringify(loadedFile))


    const localized = _.get(loadedFile, localizationString)

    if ((typeof localized) === "string") {
      setLocalizedString(localized)
    }
    else {
      setLocalizedString(undefined)
    }

  }, [localizationFile, localizationString])

  return (
    <Container>
      <Localizations>
        <ServerLocalizationTextField localizationString={ localizationString }
                                     setLocalizationString={ setLocalizationString }/>
        <ServerLocalizations localizationFile={ localizationFile }
                             setLocalizationFileValue={ setLocalizationFileValue }/>
      </Localizations>
      <BrowserView localizedString={ localizedString }/>
    </Container>
  );
}

export default App;
