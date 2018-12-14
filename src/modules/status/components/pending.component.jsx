import React from 'react';
import styled, { keyframes } from 'styled-components';
import theme from '../../../config/theme';

const bubblePulse = keyframes`
  0% {
    transform: scale(1);
    opacity: .75
  }
  25% {
    transform: scale(1);
    opacity: .75
  }
  100% {
    transform: scale(2.5);
    opacity: 0
  }
`;

const StatusWrapper = styled.div`

`;

const Status = styled.div`
  display: block; 
  position: absolute;
  top: 16px;
  left: 12px;

  &:after {
    content: '';
    background-color: red;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    position: absolute;
    display: block;
    top: 1px;
    left: 1px;
  }

  &:hover {
    &:after {
      background-color: rgba(239, 114, 0, 1);
    }
  }
`;

const StatusOuterDot = styled.span`
  margin: 1px;
  display: block;
  text-align: center;
  opacity: 1;
  background-color: rgba(239, 114, 0, 0.4);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  animation: ${bubblePulse} 1.5s linear infinite;
`;

const StatusInnerDot = styled.span`
  display: block;
  text-align: center;
  opacity: 1;
  background-color: rgba(239, 114, 0, 0.4);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  top: -13px;
  position: relative;
  right: -1px;
  animation: ${bubblePulse} 1.5s linear infinite;

  &:after {
    content: '';
    display: block;
    text-align: center;
    opacity: 1;
    background-color: rgba(239, 114, 0, 0.4);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    animation: ${bubblePulse} 1.5s linear infinite;
  }
`;

const PendingStatus = () => {
  return (
    <StatusWrapper>
      <Status>
        <StatusOuterDot />
        <StatusInnerDot />
      </Status>
    </StatusWrapper>
    
  );
};

export default PendingStatus;