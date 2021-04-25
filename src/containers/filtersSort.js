import React from 'react';
import styled from 'styled-components';
import Button from '../components/button';
import sortIcon from '../assets/icon/sort.png';
import filterByYearIcon from '../assets/icon/select.png';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const sortText = 'Reload Data';
const filterByYearText = 'Filter by Year';

export default function FiltersSort() {
  return (
    <Container>
      <Button text={filterByYearText} icon={filterByYearIcon}/>
      <Button text={sortText} icon={sortIcon}/>
    </Container>
  );
}