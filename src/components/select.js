import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getFilteredYear } from '../router/actions/actions';

const SelectContainer = styled.div`
  ${({ borderRadious }) => `${borderRadious && `border-radius: 21px 0 0 21px`}`};
  ${({ borderRadious }) => `${!borderRadious && `margin-right: 5px`}`};
  display: flex;
  align-items: center;
  height: 40px;
  background-color: #215184;
  color: #ffffff;
  margin: 15px;
  font-size: 16px;
  font-family: 'Brandon Grotesque', Arial, Helvetica, sans-serif;
  font-weight: 700;
`;

const SelectComponent = styled.select`
  ${({ borderRadious }) => `${borderRadious && `border-radius: 21px 0 0 21px`}`};
  ${({ borderRadious }) => `${!borderRadious && `margin-right: 5px`}`};
  background-color: #215184;
  color: #ffffff;
  font-size: 16px;
  font-family: 'Brandon Grotesque', Arial, Helvetica, sans-serif;
  font-weight: 700;
`;

const SelectText = styled.p`
  margin: 15px;
`;

const StyledOption = styled.option`
  color: #ffffff;
  background-color: #215184;
  margin: 15px;
  font-size: 16px;
  font-family: 'Brandon Grotesque', Arial, Helvetica, sans-serif;
  font-weight: 700;
`;

type Props = {
  text: String,
  icon: File,
  borderRadious: Boolean,
  options: Array,
};

export default function Button({
  text,
  borderRadious,
  options,
}: Props) {
  const dispatch = useDispatch();
  const optionsComponent = options.map(option => (
    <StyledOption key={option} value={option}>
      {option}
    </StyledOption>
  ));

  return (
    <SelectContainer>
      <SelectText>
        {text}
      </SelectText>
      <SelectComponent 
        borderRadious={borderRadious}
        onChange={e => dispatch(getFilteredYear(e.target.value))}
      >
        <StyledOption value="" />
        {optionsComponent}
      </SelectComponent>
    </SelectContainer>
  );
};