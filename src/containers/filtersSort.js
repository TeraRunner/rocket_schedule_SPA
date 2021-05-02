import React from 'react';
import styled from 'styled-components';
import Select from '../components/select';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const filterByYearText = 'Filter by Year';

type Props = {
  allLaunches: Array;
};

export default function FiltersSort({
  allLaunches,
}: Props) {
  const filteredYears = () => {
    const launchYears = allLaunches && allLaunches.map(launch => launch.launch_year);

    return launchYears && launchYears.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], []);
  };

  return (
    <Container>
      {filteredYears() && 
        <Select 
          text={filterByYearText} 
          options={filteredYears()}
        />
      }
    </Container>
  );
}