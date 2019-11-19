import React, { useState, useEffect, useReducer } from 'react';
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
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
`

const Localizations = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Preview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const test = `
  views:
    test_strings:
      hello: hello, world!
`

const tarp = `
  views:
    test_strings:
      hello: ¡hola, mundo!
`

const xml_test = `
  <resources>
      <string name="string_1">hello, world!</string>
      <string name="string_2">goodnight, moon!</string>
  </resources>
`


/*
 * { language_1: { string_1: "Test" }, language_2: { string_1: "Test In Spanish" } }
 */

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_STRING':
      return { ...state, [action.language]: { ...state[action.language], [action.identifier]: action.string }}
    case 'UPDATE_FILE':
      return { ...state, [action.language]: action.text }
    default:
      throw new Error();
  }
}

const initialState = {
  language_1: { hello: 'hello, world' },
  language_2: { hello: 'hola, mundo' }
}

function App() {
  const [localizations, dispatch] = useReducer(reducer, { language_1: { hello: 'hello, world' }, language_2: { hello: 'hola, mundo' } });
  const [language, setLanguage] = useState('language_1')
  const [localizationString, setLocalizationString] = useState('views.test_strings.hello')
  const [localizationFile, setLocalizationFileValue] = useState(xml_test)
  const [localizedString, setLocalizedString] = useState()

  useEffect(() => {
    let xmlDoc

    try {
      let parser = new DOMParser();
      xmlDoc = parser.parseFromString(localizationFile,"text/xml");
    }
    catch {
      console.log('nope')
    }

    let x = xmlDoc.documentElement;
    let strings = Object.values(x.childNodes).filter(y => y.nodeName === 'string').map(y => [y.getAttribute('name'), y.childNodes[0].nodeValue])

    for(let i = 0; i < strings.length; i++) {
      dispatch({ type: "UPDATE_STRING", language: language, identifier: strings[i][0], string: strings[i][1] })
    }

    // const localized = _.get(loadedFile, localizationString)

    // if ((typeof localized) === "string") {
    //   setLocalizedString(localized)
    // }
    // else {
    //   setLocalizedString(undefined)
    // }

  }, [language, localizationFile])

  return (
    <Container>
      <p>{ JSON.stringify(localizations) }</p>
      <Localizations>
        <ServerLocalizationTextField localizationString={ localizationString }
                                     setLocalizationString={ setLocalizationString }/>
        <ServerLocalizations localizationFile={ localizationFile }
                             setLocalizationFileValue={ setLocalizationFileValue }/>
      </Localizations>
      <Preview>
        <div>
          <select onChange={ (e) => { setLanguage(e.target.value) } } value={ language }>
            <option value="language_1">Language 1</option>
            <option value="language_2">Language 2</option>
          </select>
        </div>
        <BrowserView localizations={ localizations } language={ language }/>
      </Preview>
    </Container>
  );
}

export default App;
