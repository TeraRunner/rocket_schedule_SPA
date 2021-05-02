import React from 'react';
import styled from 'styled-components';
import Icon from '../components/icon';

const ButtonContainer = styled.button`
  background-color: #215184;
  ${({ borderRadious }) => `${borderRadious && `border-radius: 21px 0 0 21px`}`};
  ${({ borderRadious }) => `${!borderRadious && `margin-right: 5px`}`};
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
  borderRadious: Boolean,
};

export default function Button({
  text,
  icon,
  borderRadious,
}: Props) {
  return (
    <ButtonContainer borderRadious={borderRadious}>
      <ButtonText>{text}</ButtonText>
      {icon && <Icon icon={icon}/>}
    </ButtonContainer>
  );
}