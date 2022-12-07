import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderContainer from "../../components/header/HeaderContainer";
import {
  Noticia,
  NoticiaInfos,
  NoticiasContainer,
  ShareOptions,
} from "../../components/noticias/feedNoticias";
import { NewsContext } from "../../context/NewsContext";
import { FaShareAlt, FaWhatsapp } from "react-icons/fa";

const Feed = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { noticias, backgroundColor, color } = useContext(NewsContext);

  const setNoticia = (img, titulo, data, introducao, link) => {
    const noticia = { img, titulo, data, introducao, link };
    localStorage.setItem("noticia", JSON.stringify(noticia));
  };

  if (noticias.length <= 0) {
    return (
      <>
        <HeaderContainer showSearch={true} />
        <NoticiasContainer>
          <h2>Nenhuma notícia encontrada</h2>
        </NoticiasContainer>
      </>
    );
  }

  return (
    <>
      <HeaderContainer showSearch={true} />
      <NoticiasContainer backgroundColor={backgroundColor}>
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
              <div>
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
                      imagens.length > 0
                        ? JSON.parse(imagens).image_fulltext
                        : ""
                    }`}
                    alt="Imagem da notícia"
                  />
                </Link>
                <ShareOptions color={color}>
                  <button onClick={() => navigator.clipboard.writeText(link)}>
                    <FaShareAlt />
                  </button>
                  <a href={`whatsapp://send?text=${link}`}>
                    <FaWhatsapp />
                  </a>
                </ShareOptions>
              </div>

              <NoticiaInfos color={color}>
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
                  <div>
                    <small>
                      {editorias.split(";")[1] || editorias.split(";")[0]}
                    </small>
                    <small>{data_publicacao.split(" ")[0]}</small>
                  </div>

                  <ShareOptions color={color}>
                    <button onClick={() => navigator.clipboard.writeText(link)}>
                      <FaShareAlt />
                    </button>
                    <a href={`whatsapp://send?text=${link}`}>
                      <FaWhatsapp />
                    </a>
                  </ShareOptions>
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
