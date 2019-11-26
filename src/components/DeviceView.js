import React from 'react'
import styled from 'styled-components'
import LocalizedString from './LocalizedString'
import Icon from '../images/icon.png'

const Container = styled.div`
  background-color: white;
  width: 360px;
  height: 750px;
  margin-top: 80px;
  border-radius: 30px;
  border: 20px solid #171717;
  position: relative;
  padding: 15px;
  overflow-x: hidden;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  align-items: center;
`

const CTA = styled.div`
  margin-top: 60px;
  font-size: 18px;
  font-weight: 700;
  background-color: #007bff;
  padding: 15px 20px 15px 20px;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    background-color: #0069d9;
  }
`

const Controls = styled.div`
  position: absolute;
  bottom: 0;
  width: 390px;
  height: 60px;
  background-color: #444;
  left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

const Back = styled.div`
  font-size: 24px;
  color: #FFF;
  font-weight: 700;
`

const Middle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-color: #FFF;
`

const Right = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  background-color: #FFF;
`

export default ({ localizations, localizationStrings }) => {
  const Localized = (stringKey, props) => (
    <LocalizedString localizations={ localizations }
                     stringKey={ localizationStrings[stringKey] }
                     { ...props }/>
  )

  return (
    <Container>
      <Header>
        <img src={ Icon } width='100' alt="LocalizeHQ Icon"/>
        <h1>{ Localized('company_name') }</h1>
        <h2>{ Localized('header') }</h2>
      </Header>
      <Body>
        <p>{ Localized('body') }</p>
        <CTA><span>{ Localized('cta', { color: '#FFF' } ) }</span></CTA>
      </Body>
      <Controls>
        <Back>◄</Back>
        <Middle />
        <Right />
      </Controls>
    </Container>
  )
}
