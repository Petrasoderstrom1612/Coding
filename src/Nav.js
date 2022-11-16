import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import unicorn from './unicorn.jpg';

const Nav = () => {
  return (
      
      <>
      <Navbar>
      <h1>HAPPY BIRTHDAY</h1><ul>
      <NavLink to="/contact"><li>B-day poem</li></NavLink> {/* this link allows me to jump into the component by following to= in this case to about, Navlink means I can style it */}
      <NavLink to="/lastpage"><li>B-day girl picture</li></NavLink> {/* this link allows me to jump into the component by following to= in this case to contact, Navlink means I can style it */}
    </ul>
    </Navbar>
    <UnicornStyled />
    </>
  )
}

export default Nav;

const Navbar = styled.div`
@media (min-width: 0px) and (max-width: 667px) {
display: flex;
text-align: center;
background-color: rgba(125, 115, 230, 0.502);
}
@media (min-width: 1024px) {
display: flex;
flex-direction: space-around;
background-color: rgba(125, 115, 230, 0.502);
}

`

const UnicornStyled = styled.nav`
  background: url(${unicorn});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;  
  min-height: 83vh;
  height: 83%;

  @media (min-width: 1024px) {
  min-height: 100vh;
  height: 100%;
}
`



