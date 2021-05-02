import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import store from './store';
import Header from './containers/header';
import Body from './containers/body';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1440px;
`;

export const App = () => (
  <Provider store={store}>
    <Container>
      <Header />
      <Body />
    </Container>
  </Provider>
)