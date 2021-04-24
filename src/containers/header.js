import React from 'react';
import styled from 'styled-components';
import logo from '../assets/spacex-logo.png';
import refreshIcon from '../assets/icon/refresh.png';
import Button from '../components/button';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  width: 100%;
`;

const LogoWrapper = styled.div`
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

const headerButtonText = 'Reload Data';

export default function Header() {
  return (
    <Container>
      <LogoWrapper>
        <LogoImage src={logo} alt='logo'/>
        <LogoText>LAUNCHES</LogoText>
      </LogoWrapper>
      <Button text={headerButtonText} icon={refreshIcon}/>
    </Container>
  );
}