import styled from "styled-components";

export const NoticiaContainer = styled.section`
  display: grid;
  justify-items: start;
  justify-content: center;
  gap: 1rem;
  margin: 4.2rem 0;

  @media (min-width: 768px) {
    grid-template-columns: 768px;
  }

  & > p {
    padding: 0.5rem;
  }
`;

export const NoticiaHeader = styled.div`
  display: grid;
  gap: 1rem;

  & > img {
    width: 100%;
  }

  & > div {
    display: grid;
    gap: 0.5rem;
    padding: 0 0.5rem;

    & > span {
      color: #909090;
    }

    & > h2 {
      font-size: 1.5rem;
    }
  }
`;

export const NoticiaLink = styled.a`
  text-decoration: none;
  justify-self: center;
  padding: 12px 24px;
  background-color: #daf0cb;
  color: #180e19;
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  z-index: 1;

  span {
    z-index: 1;
    position: relative;
  }

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 190px;
    height: 140px;
    border-radius: 50%;
    transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
    transition: opacity 0.4s cubic-bezier(0.19, 1, 0.22, 1),
      transform 0.75s cubic-bezier(0.19, 1, 0.22, 1);
    background-color: #71c837;
    opacity: 0;
  }

  &:hover {
    &:before {
      opacity: 1;
      transition-duration: 0.85s;
      transform: translate3d(-50%, -50%, 0) scale3d(1.2, 1.2, 1.2);
    }
  }
`;
