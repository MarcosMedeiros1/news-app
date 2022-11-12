import {
  Noticia,
  NoticiaInfos,
  NoticiasContainer,
} from "../../components/noticia/noticia";

const Home = ({ noticias }) => {
  return (
    <main>
      {noticias.map(({ title, urlToImage }, id) => (
        <NoticiasContainer key={id}>
          <Noticia>
            <img src={urlToImage} alt="Imagem da notícia" />
            <NoticiaInfos>{title}</NoticiaInfos>
          </Noticia>
        </NoticiasContainer>
      ))}
    </main>
  );
};
export default Home;
