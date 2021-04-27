import React from 'react';
import styled from 'styled-components';
import TableRow from '../components/table-row';

type Props = {
  allLaunches: Array,
};

const Spinner = () => (
  <StyledSpinner viewBox="0 0 50 50">
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="4"
    />
  </StyledSpinner>
);

const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  margin: -25px 0 0 -25px;
  width: 50px;
  height: 50px;
  
  & .path {
    stroke: #5652BF;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

const Container = styled.div`
  margin: 50px 0;
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: y-scroll;
  flex-direction: column;
  position: relative;
  top: 1800px;
`;

export default function LaunchesTable({
  allLaunches
}: Props) {

  return (
    <Container>
      {!allLaunches ? 
        <Spinner /> 
        : allLaunches.map((launch, index) => <TableRow launch={launch} key={index}/>
      )}
    </Container>
  );
}