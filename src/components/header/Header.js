import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0;
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  background-color: #fff;

  & > a > img {
    width: 100%;
    max-width: 4rem;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  & > input {
    outline: none;
    border: none;
    border-bottom: 1px solid #000;
    padding: 0.2rem;
  }

  & > button {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    position: absolute;
    right: 0.2rem;
    cursor: pointer;
  }
`;
