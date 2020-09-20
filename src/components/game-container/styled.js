import styled, { keyframes } from 'styled-components';

const opacityAnimation = keyframes`
  0%, 100% {
    opacity: .6;
  }

  50% {
    opacity: 1;
  }
`;

export const Game = styled.div`
  position: relative;
  margin-top: 50px;

  .circle {
    box-sizing: border-box;
    position: absolute;
    width: 300px;
    height: 300px;
    cursor: pointer;
    border-radius: 50%;
    border: 2px solid grey;
    transition: border .4s ease;
    pointer-events: ${({disabled}) => disabled ? 'none' : 'auto' };

    &:hover {
      border: 2px solid #000;
      opacity: 1;
    }
  }

  .animated {
    animation: ${opacityAnimation} .3s forwards ease;
  }

  .circle.red, .circle.blue, .circle.yellow, .circle.green {
    opacity: .6;
    transition: opacity .4s ease;

    &:active {
      opacity: 1;
    }
  }

  .circle.red {
    background-color: #ff0000;
    clip: rect(auto, auto, 150px, 150px);
  }

  .circle.blue {
    background-color: #002bff;
    clip: rect(0px, 150px, 150px, 0px);
  }

  .circle.yellow {
    background-color: #ffe524;
    clip: rect(150px, auto, auto, 150px);
  }

  .circle.green {
    background-color: #07eb16;
    clip: rect(150px, 150px, 300px, 0px);
  }
`;
