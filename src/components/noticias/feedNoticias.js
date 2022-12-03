import styled from "styled-components";

export const NoticiasContainer = styled.section`
  display: grid;
  justify-items: start;
  justify-content: center;
  margin-top: 4.2rem;

  & > h2 {
    margin-top: 2rem;
    text-align: center;
  }

  @media (min-width: 768px) {
    grid-template-columns: 768px;
  }
`;

export const Noticia = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 1rem 0 1.5rem;
  margin: 0 0.2rem;
  position: relative;

  border-bottom: 1px solid #eee;

  & > a,
  img {
    max-width: 150px;
  }

  @media (min-width: 375px) {
    margin: 0 0.5rem;
  }

  @media (min-width: 768px) {
    & > a,
    img {
      max-width: 300px;
    }
  }
`;

export const NoticiaInfos = styled.div`
  display: grid;
  align-content: start;
  gap: 1rem;

  & > a {
    text-decoration: none;
  }

  & h3 {
    font-weight: 500;
    font-size: 1rem;
    color: #180e19;
    transition: 0.2s;

    &:hover {
      text-decoration: underline;
      color: #180e19ca;
    }
  }

  & > div {
    display: flex;
    gap: 0.5rem;

    & > small {
      :first-child {
        font-weight: 500;
        color: #69bdfd;
        position: relative;

        ::after {
          position: absolute;
          content: "";
          width: 3px;
          height: 3px;
          border-radius: 100%;
          background-color: #909090;
          top: 6px;
          right: -6px;
        }
      }

      :last-child {
        color: #909090;
      }
    }
  }

  @media (min-width: 768px) {
    & h3 {
      font-size: 1.5rem;
    }

    & > div {
      gap: 1rem;
      & > small {
        font-size: 1rem;

        :first-child::after {
          width: 4px;
          height: 4px;
          top: 10px;
          right: -10px;
        }
      }
    }
  }
`;
