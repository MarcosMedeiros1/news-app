import styled from "styled-components";

export const Header = styled.header`
  display: grid;
  grid-template-columns: minmax(320px, 375px);
  justify-content: center;
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  background-color: #006266;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

  @media (min-width: 375px) {
    grid-template-columns: minmax(375px, 768px);
  }

  @media (min-width: 768px) {
    grid-template-columns: 768px;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
    width: 100%;
    background-color: transparent;

    & > a > img {
      margin-left: 0.5rem;
      width: 100%;
      max-width: 4rem;
    }

    & > div:last-child {
      display: flex;
      cursor: pointer;
    }
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  & > input {
    outline: none;
    border: none;
    border-bottom: 1px solid #fff;
    background-color: #006266;
    padding: 0.2rem;
    color: #fff;

    &::placeholder {
      color: #fff;
    }

    @media (min-width: 375px) {
      width: 200px;
    }

    @media (min-width: 425px) {
      width: 240px;
    }

    @media (min-width: 768px) {
      width: 300px;
    }
  }

  & > button {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    position: absolute;
    right: 0.2rem;
    cursor: pointer;

    & > svg {
      color: #fff;
    }
  }
`;

export const LightSwitch = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-right: 0.5rem;

  & > button {
    display: flex;
    background: none;
    border: none;
    cursor: pointer;

    & > svg {
      color: #fff;
      font-size: 1.2rem;
    }
  }
`;
