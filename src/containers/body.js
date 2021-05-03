import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import FiltersSort from '../containers/filtersSort';
import Image from '../components/image';
import image from '../assets/img/launch-home@2x.png';
import hooks from '../router/hooks';
import LaunchesTable from './launchesTable';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  min-width: 70%;
`;

export default function Body() {
  const {
    allLaunches,
  } = hooks();

  const filteredYear = useSelector(state => state.filteredYear && state.filteredYear); 
  const AppliyingFilters = () => allLaunches.filter(launch => launch.launch_year.includes(filteredYear));

  return (
    <div>
      <FiltersSort allLaunches={allLaunches && allLaunches}/>
      <Wrapper>
        <Image image={image}/>
        <LaunchesTable allLaunches={!filteredYear ? 
          allLaunches && allLaunches 
          : AppliyingFilters()
        }/>
      </Wrapper>
    </div>
  );
}