import React from 'react';
import styled from 'styled-components';
import logo from '../assets/spacex-logo.png'

const HeaderBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
`;

const LogoDiv = styled.div`
  display: flex;
  margin-left: 40px;
`;

const LogoImage = styled.img`
  width: 180px;
  height: 30px;
  align-self: center;
  position: relative;
  top: -5px;
`;

const LogoText = styled.p`
  font-size: 20px;
  font-family: 'Brandon Grotesque', Arial, Helvetica, sans-serif;
  font-weight: 400;
  color: #545454;
  position: relative;
  left: -20px;
`;

export default function Header() {
  return (
    <HeaderBody>
      <LogoDiv>
        <LogoImage src={logo} alt='logo'/>
        <LogoText>LAUNCHES</LogoText>
      </LogoDiv>
      <div />
    </HeaderBody>
  );
}