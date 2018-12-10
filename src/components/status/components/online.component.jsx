import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    background: #44c727;
  }

  25% {
    background: #37a220;
  }

  50% {
    background: #297d16;
  }

  75% {
    background: #15400b;
  }

  100% {
    background: #44c727;
  }
`;

const Status = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  
  animation: ${rotate} 1s ease-in-out infinite;
`;

const OnlineStatus = () => {
  return (
    <Status />
  );
};

export default OnlineStatus;