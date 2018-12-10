import React from 'react';
import styled from 'styled-components';

const Status = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #000
`;

const SkippedStatus = () => {
  return (
    <Status />
  );
};

export default SkippedStatus;