import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    background: #ff5722;
  }

  25% {
    background: #c33d12;
  }

  50% {
    background: #922d0d;
  }

  75% {
    background: #71230a;
  }

  100% {
    background: #ff5722;
  }
`;

const Status = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  
  animation: ${rotate} 2s ease-in-out infinite;
`;

const PendingStatus = () => {
  return (
    <Status />
  );
};

export default PendingStatus;