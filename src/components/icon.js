import React from 'react';
import styled from 'styled-components';

type Props = {
  icon: File,
};

const Container = styled.img`
  width: 15px;
  height: 15px;
  margin: 15px 15px 15px 0;
`;

export default function Icon({
  icon,
}: Props) {
  return (
    <Container 
      src={icon}
      alt='icon'
    />
  );
}