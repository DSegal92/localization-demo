import React from 'react'
import styled from 'styled-components'
import FakeButPlausibleAndroidLayout from './FakeButPlausibleAndroidLayout'
import EditableString from './EditableString'

import 'codemirror/mode/haml/haml'

const Container = styled.div`
  position: relative;
  width: 50vw;
  height: 700px;
  background-color: #232323;
  overflow: scroll;
`

const ResourceString = ({ string, verticalOffset, localizationStrings, updateLocalizationString }) => (
  <EditableString value={ localizationStrings[string] }
                  updateLocalizationString={ (newValue) => updateLocalizationString(string, newValue) }
                  verticalOffset={ verticalOffset }/>
)

const TextField = (props) => {
  return (
    <Container>
      <FakeButPlausibleAndroidLayout />
      <ResourceString string={ 'company_name' } verticalOffset={ 502 } {...props }/>
      <ResourceString string={ 'header' } verticalOffset={ 787 } {...props }/>
      <ResourceString string={ 'body' } verticalOffset={ 1072 } {...props }/>
      <ResourceString string={ 'cta' } verticalOffset={ 1357 } {...props }/>
    </Container>
  )
}

export default React.memo(TextField)
