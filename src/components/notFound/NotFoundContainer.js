import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: grid;
  gap: 1rem;
  justify-items: center;
  align-content: center;
  height: 80vh;

  & > div {
    display: flex;
    align-items: center;
  }

  & > a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #000;
    text-decoration: none;
    transition: 0.2s;

    &:hover {
      text-decoration: underline;
    }
  }
`;
