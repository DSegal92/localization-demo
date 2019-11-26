import React from 'react'
import styled from 'styled-components'

const LocalizedString = styled.span`
  color: ${props => props.stringMissing ? '#FFF' : (props.color || '#000') };
  background-color: ${props => props.stringMissing ? '#FF0000' : 'transparent' };
`

export default ({ localizations, stringKey, color }) => (
  <LocalizedString color={ color }
                   stringMissing={ localizations[stringKey] === undefined }>
    { localizations[stringKey] || "String Missing" }
  </LocalizedString>
)
