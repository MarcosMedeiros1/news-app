import styled from "styled-components";

export const NoticiasContainer = styled.section`
  display: grid;
`;

export const Noticia = styled.div`
  display: flex;

  & > img {
    max-width: 150px;
    width: 100%;
  }
`;

export const NoticiaInfos = styled.div`
  display: grid;

  & > h3 {
    font-weight: 500;
    font-size: 1rem;
  }

  & > span {
    font-size: 0.8rem;
    color: #9a9a9a;
  }
`;
