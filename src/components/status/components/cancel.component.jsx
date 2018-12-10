import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    background: #f00;
  }

  25% {
    background: #c30000;
  }

  50% {
    background: #980101;
  }

  75% {
    background: #750000;
  }

  100% {
    background: #f00;
  }
`;

const Status = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  
  animation: ${rotate} 1.5s ease-in-out infinite;
`;

const CancelStatus = () => {
  return (
    <Status />
  );
};

export default CancelStatus;