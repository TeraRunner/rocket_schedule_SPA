import React from 'react';
import styled from 'styled-components';
import FiltersSort from '../containers/filtersSort';
import Image from '../components/image';
import image from '../assets/img/launch-home@2x.png';

const Container = styled.div`
  margin: 50px 80px;
`;

export default function Body() {
  return (
    <Container>
      <FiltersSort />
      <div>
        <Image image={image}/>
        <div />
      </div>
    </Container>
  );
}