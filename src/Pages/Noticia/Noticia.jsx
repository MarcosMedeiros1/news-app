import { useContext, useEffect } from "react";
import HeaderContainer from "../../components/header/HeaderContainer";
import {
  NoticiaContainer,
  NoticiaHeader,
  NoticiaLink,
} from "../../components/noticias/noticia";
import { NewsContext } from "../../context/NewsContext";

const Noticia = () => {
  const { backgroundColor, color } = useContext(NewsContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!localStorage.getItem("noticia")) {
    window.location.href = "/";
    return;
  }

  const noticia = JSON.parse(localStorage.getItem("noticia"));

  return (
    <>
      <HeaderContainer showSearch={false} />
      <NoticiaContainer backgroundColor={backgroundColor} color={color}>
        <NoticiaHeader color={color}>
          <img src={noticia.img} alt="Imagem da noticia" />

          <div>
            <h2>{noticia.titulo}</h2>
            <span>{noticia.data.split(" ")[0]}</span>
          </div>
        </NoticiaHeader>
        <p>{noticia.introducao}</p>

        <NoticiaLink href={noticia.link} target="blank">
          <span>Acesse a notícia original</span>
        </NoticiaLink>
      </NoticiaContainer>
    </>
  );
};
export default Noticia;
