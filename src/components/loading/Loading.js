import styled from "styled-components";

export const Loading = styled.div`
  position: absolute;
  top: 45vh;
  left: 45vw;
  border: 4px solid rgb(255, 255, 255);
  border-left-color: #000;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: donut-spin 1.2s linear infinite;

  @keyframes donut-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
