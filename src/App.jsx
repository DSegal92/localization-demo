import React, { useState, useReducer, useEffect } from 'react';
import FakeCodeFile from './components/FakeCodeFile'
import LocalizationFiles from './components/LocalizationFiles'
import styled from 'styled-components'
import 'codemirror/lib/codemirror.css'
import DeviceView from './components/DeviceView'
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
      <string name="company_name">LocalizeHQ</string>
      <string name="heeder">Home Sweet Home for Localization Professionals</string>
      <string name="body">If you are in the localization industry, LocalizeHQ
                          is the number one place on the web for you. From
                          blog posts, to forums, to discounts on localization
                          software, LocalizeHQ is a one-stop shop for all
                          your localization needs. Join us today and start
                          contributing to the best community in the industry!
      </string>
      <string name="cta">Join Today!</string>
  </resources>
`

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_STRINGS':
      console.log('ho')
      return { ...state, [action.language]: { ...state[action.language], strings: action.strings }}
    case 'UPDATE_FILE':
      console.log(action)
      return { ...state, [action.language]: { ...state[action.language], file: action.text } }
    case 'UPDATE_LOCALIZATION_STRING':
      console.log(action)
      return { ...state, localizationStrings: { ...state['localizationStrings'], [action.localizationString]: action.value } }
    default:
      throw new Error();
  }
}

function App() {
  const INITIAL_STATE = { language_1: { file: language_1, strings: xmlToKeyValue(language_1) },
                          language_2: { file: '', strings: {} },
                          localizationStrings: {
                            company_name: 'company_name',
                            header: 'header',
                            body: 'body',
                            cta: 'call_to_action'
                          }}

  const [localizations, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [language, setLanguage] = useState('language_1')

  const updateLocalizationsOnFileChange = (language, text) => {
    dispatch({ type: 'UPDATE_FILE', language, text })
    dispatch({ type: 'UPDATE_STRINGS', language, strings: xmlToKeyValue(text) })
  }

  useEffect(() => {
    console.log(localizations)
  })

  return (
    <Container>
      <Localizations>
        <FakeCodeFile localizationStrings={ localizations['localizationStrings'] }
                      updateLocalizationString={
                        (localizationString, value) => dispatch({ type: 'UPDATE_LOCALIZATION_STRING',
                                                                  localizationString,
                                                                  value })
                      }
        />
        <LocalizationFiles languages={ [localizations['language_1']['file'], localizations['language_2']['file'] ] }
                           updateFile={ (language, text) => updateLocalizationsOnFileChange(language, text) }/>
      </Localizations>
      <Preview>
        <div>
          <select onChange={ (e) => { setLanguage(e.target.value) } } value={ language }>
            <option value="language_1">Language 1</option>
            <option value="language_2">Language 2</option>
          </select>
        </div>
        <DeviceView localizations={ localizations[language]['strings'] }
                    localizationStrings={ localizations['localizationStrings'] }/>
      </Preview>
    </Container>
  );
}

export default App;
