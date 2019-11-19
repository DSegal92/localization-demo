import React, { useState, useReducer } from 'react';
import ServerLocalizationTextField from './components/ServerLocalizationTextField'
import ServerLocalizations from './components/ServerLocalizations'
import styled from 'styled-components'
import 'codemirror/lib/codemirror.css'
import BrowserView from './components/BrowserView'
import { xmlToKeyValue } from './utilities'

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

const language_1 = `
  <resources>
      <string name="string_1">hello, world!</string>
      <string name="string_2">goodnight, moon!</string>
  </resources>
`

const language_2 = `
  <resources>
      <string name="string_1">hola munda!</string>
      <string name="string_2">adios moono!</string>
  </resources>
`

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_STRING':
      console.log('ho')
      return { ...state, [action.language]: { ...state[action.language], [action.identifier]: action.string }}
    case 'UPDATE_FILE':
      console.log('hi')
      return { ...state, [action.language]: action.text }
    default:
      throw new Error();
  }
}

function App() {
  const INITIAL_STATE = { language_1: xmlToKeyValue(language_1),
                          language_2: xmlToKeyValue(language_2) }

  const [localizations, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [language, setLanguage] = useState('language_1')
  const [localizationString, setLocalizationString] = useState('company_name')

  return (
    <Container>
      <Localizations>
        <ServerLocalizationTextField localizationString={ localizationString }
                                     setLocalizationString={ setLocalizationString }/>
        <ServerLocalizations languages={ [language_1, language_2 ] }
                             updateFile={ (language, text) => dispatch({ type: 'UPDATE_FILE',
                                                                       language,
                                                                       text: xmlToKeyValue(text) }) }/>
      </Localizations>
      <Preview>
        <div>
          <select onChange={ (e) => { setLanguage(e.target.value) } } value={ language }>
            <option value="language_1">Language 1</option>
            <option value="language_2">Language 2</option>
          </select>
        </div>
        <BrowserView localizations={ localizations }
                     localizationString={ localizationString }
                     language={ language }/>
      </Preview>
    </Container>
  );
}

export default App;
