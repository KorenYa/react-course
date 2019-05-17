import React from 'react';
import styled from 'styled-components';

const StyledNotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3c3c3c;
  font-size: 60px;
  font-weight: 600;
  height: 100vh;
`;

const NotFound = () => (
  <StyledNotFound>
    <span>404 - Not found</span>
  </StyledNotFound>
);

export default NotFound;
