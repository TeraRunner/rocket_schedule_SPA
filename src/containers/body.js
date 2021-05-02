import React from 'react';
import styled from 'styled-components';
import FiltersSort from '../containers/filtersSort';
import Image from '../components/image';
import image from '../assets/img/launch-home@2x.png';
import hooks from '../router/hooks';
import LaunchesTable from './launchesTable';

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
`;

export default function Body() {
  const {
    allLaunches,
  } = hooks();

  return (
    <Container>
      <FiltersSort allLaunches={allLaunches && allLaunches}/>
      <Wrapper>
        <Image image={image}/>
        <LaunchesTable allLaunches={allLaunches && allLaunches} />
      </Wrapper>
    </Container>
  );
}