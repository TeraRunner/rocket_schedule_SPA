import React from 'react';
import styled from 'styled-components';

type Props = {
  image: File,
};

const Container = styled.img`
  max-width: 535px;
  max-height: 700px;
  margin: 50px;
  top: 50px;
  position: sticky;
`;

export default function Icon({
  image,
}: Props) {
  return (
    <Container 
      src={image}
      alt='image'
    />
  );
}