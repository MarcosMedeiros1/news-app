import HeaderContainer from "../../components/header/HeaderContainer";
import {
  Noticia,
  NoticiaInfos,
  NoticiasContainer,
} from "../../components/noticias/feedNoticias";

const Home = ({ noticias }) => {
  return (
    <>
      <HeaderContainer />
      <NoticiasContainer>
        {noticias.map(({ titulo, editorias, imagens, data_publicacao }, id) => (
          <Noticia key={id}>
            <img
              src={`https://agenciadenoticias.ibge.gov.br/${
                imagens.length > 0 ? JSON.parse(imagens).image_fulltext : ""
              }`}
              alt="Imagem da notícia"
            />
            <NoticiaInfos>
              <h3>{titulo}</h3>

              <div>
                <span>
                  {editorias.split(";")[1] || editorias.split(";")[0]}
                </span>
                <span>{data_publicacao.split(" ")[0]}</span>
              </div>
            </NoticiaInfos>
          </Noticia>
        ))}
      </NoticiasContainer>
    </>
  );
};
export default Home;
