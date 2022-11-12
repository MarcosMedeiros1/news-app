import {
  Noticia,
  NoticiaInfos,
  NoticiasContainer,
} from "../../components/noticia/noticia";

const Home = ({ noticias }) => {
  return (
    <main>
      {noticias.map(({ title, media, author, topic, published_date }, id) => (
        <NoticiasContainer key={id}>
          <Noticia>
            <img src={media} alt="Imagem da notícia" />
            <NoticiaInfos>
              <h3>{title}</h3>
              <span>{author}</span>
              <div>
                <span>{topic}</span>
                {" | "}
                <span>{published_date.split(" ")[0]}</span>
              </div>
            </NoticiaInfos>
          </Noticia>
        </NoticiasContainer>
      ))}
    </main>
  );
};
export default Home;
