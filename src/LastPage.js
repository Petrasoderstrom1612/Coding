import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import React from 'react'
import zuzka from './Zuzka.png';
import './App.css'

const LastPage = () => {
  return (
      <div className="App-header">
    <Link to="/"><StyledHeadline>🔙</StyledHeadline></Link><div className="App">
        <Img src={zuzka} className="App-logo" alt="logo" />
        <StyledText>
          Level 30 completed!
        </StyledText>
      </div>
    </div>
  )
}

export default LastPage

const StyledHeadline = styled.h1`
@media (min-width: 0px) and (max-width: 667px) {
position: absolute;
display: flex;
flex-direction: column;
justify-content: center;
top: -2%;
right: 4%;
}

@media (min-width: 1024px) {
position: absolute;
display: flex;
flex-direction: column;
justify-content: center;
top: 0%;
right: 8%;
}
`

const StyledText = styled.h1`
@media (min-width: 0px) and (max-width: 667px) {
position: absolute;
display: flex;
flex-direction: column;
justify-content: center;
top: -2%;
right: 23%;
}
@media (min-width: 1024px) {
  position: absolute;
display: flex;
flex-direction: column;
justify-content: center;
top: 2%;
left: 5%;
}
`

const Img = styled.img`
@media (min-width: 0px) and (max-width: 667px) {
width: 60%;
height: 60%;
}
@media (min-width: 1024px) {

}
`
