import React from 'react';
import styled from 'styled-components';

type Props = {
  launch: Object;
  flight_number: Integer,
  mission_name: String;
  rocket_name: String;
  launch_date_local: String;
};

const Container = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  box-shadow: 2px 2px #000000;
  padding: 5px;
  font-family: 'Brandon Grotesque', Arial, Helvetica, sans-serif;
  font-weight: 700;
  color: #545454;
  min-width: 30%;
  max-height: 100px;
`;

const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlightNumber = styled.p`
  margin: 0 30px;
`;

const DateComponent = styled.p`
  margin: 10px;
  display: flex;
  justify-content: flex-end;
`;

const RocketId = styled.p`
  margin: 5px;
  display: flex;
  justify-content: flex-end;
`;

const getStringifiedDate = inputDate => {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const date = new Date(inputDate);
  const ordinal = number => {
    return["st","nd","rd"][((number+90)%100-10)%10-1]||"th"
  };

  return `${date.getDate()}${ordinal(date.getDate())} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
}

export default function TableRow({
  launch: {
    flight_number,
    mission_name,
    rocket: {
      rocket_name,
    },
    launch_date_local,
  },
}: Props) {

  return (
    <Container>
      <LeftWrapper>
        <FlightNumber>
          #{flight_number}
        </FlightNumber>
        <p>
          {mission_name}
        </p>
      </LeftWrapper>
      <RightWrapper>
        <DateComponent>{getStringifiedDate(launch_date_local)}</DateComponent>
        <RocketId>{rocket_name}</RocketId>
      </RightWrapper>
    </Container>
  );
}