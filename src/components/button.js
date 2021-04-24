import React from 'react';
import styled from 'styled-components';
import Icon from '../components/icon';

const Container = styled.div`
  background-color: #215184;
  border-radius: 21px 0 0 21px;
  display: flex;
  align-items: center;
  height: 40px;
`;

const ButtonText = styled.p`
  color: #ffffff;
  margin: 15px;
  font-size: 16px;
  font-family: 'Brandon Grotesque', Arial, Helvetica, sans-serif;
  font-weight: 700;
`;

type Props = {
  text: String,
  icon: File,
};

export default function Button({
  text,
  icon,
}: Props) {
  return (
    <Container>
      <ButtonText>{text}</ButtonText>
      {icon && <Icon icon={icon}/>}
    </Container>
  );
}