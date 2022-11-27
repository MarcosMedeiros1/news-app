import { Link } from "react-router-dom";
import HeaderContainer from "../../components/header/HeaderContainer";
import {
  Noticia,
  NoticiaInfos,
  NoticiasContainer,
} from "../../components/noticias/feedNoticias";

const Feed = ({ noticias }) => {
  const setNoticia = (img, titulo, data, introducao, link) => {
    const noticia = { img, titulo, data, introducao, link };
    localStorage.setItem("noticia", JSON.stringify(noticia));
  };

  return (
    <>
      <HeaderContainer />
      <NoticiasContainer>
        {noticias.map(
          ({
            titulo,
            editorias,
            imagens,
            data_publicacao,
            introducao,
            link,
            id,
          }) => (
            <Noticia key={id}>
              <Link
                to={"/noticia"}
                onClick={() =>
                  setNoticia(
                    `https://agenciadenoticias.ibge.gov.br/${
                      JSON.parse(imagens).image_fulltext
                    }`,
                    titulo,
                    data_publicacao,
                    introducao,
                    link,
                  )
                }
              >
                <img
                  src={`https://agenciadenoticias.ibge.gov.br/${
                    imagens.length > 0 ? JSON.parse(imagens).image_fulltext : ""
                  }`}
                  alt="Imagem da notícia"
                />
              </Link>

              <NoticiaInfos>
                <Link
                  to={"/noticia"}
                  onClick={() =>
                    setNoticia(
                      `https://agenciadenoticias.ibge.gov.br/${
                        JSON.parse(imagens).image_fulltext
                      }`,
                      titulo,
                      data_publicacao,
                      introducao,
                      link,
                    )
                  }
                >
                  <h3>{titulo}</h3>
                </Link>

                <div>
                  <small>
                    {editorias.split(";")[1] || editorias.split(";")[0]}
                  </small>
                  <small>{data_publicacao.split(" ")[0]}</small>
                </div>
              </NoticiaInfos>
            </Noticia>
          ),
        )}
      </NoticiasContainer>
    </>
  );
};
export default Feed;
