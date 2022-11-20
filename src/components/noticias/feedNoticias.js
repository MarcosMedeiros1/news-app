import styled from "styled-components";

export const NoticiasContainer = styled.section`
  display: grid;
  justify-items: start;
  justify-content: center;

  @media (min-width: 768px) {
    grid-template-columns: 700px;
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

  & > img {
    width: 100%;
    max-width: 150px;
  }

  @media (min-width: 375px) {
    margin: 0 0.5rem;
  }
`;

export const NoticiaInfos = styled.div`
  display: grid;
  align-content: start;
  gap: 1rem;

  & > h3 {
    font-weight: 500;
    font-size: 1rem;
    color: #180e19;
  }

  & > div {
    display: flex;
    gap: 0.5rem;

    & > span {
      font-size: 0.8rem;

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
          top: 7px;
          right: -7px;
        }
      }

      :last-child {
        color: #909090;
      }
    }
  }
`;
