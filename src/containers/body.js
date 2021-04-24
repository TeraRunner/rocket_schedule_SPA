import React from 'react';
import styled from 'styled-components';
import Image from '../components/image';
import image from '../assets/img/launch-home@2x.png';

const Container = styled.div``;

export default function Body() {
  return (
    <Container>
      <div />
      <div>
        <Image image={image}/>
        <div />
      </div>
    </Container>
  );
}