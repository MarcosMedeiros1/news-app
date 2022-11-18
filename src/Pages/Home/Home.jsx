// import {
//   Noticia,
//   NoticiaInfos,
//   NoticiasContainer,
// } from "../../components/noticia/noticia";

// const Home = ({ noticias }) => {
//   return (
//     <main>
//       {noticias.map(({ title, urlToImage, author, topic, publishedAt }, id) => (
//         <NoticiasContainer key={id}>
//           <Noticia>
//             <img src={urlToImage} alt="Imagem da notícia" />
//             <NoticiaInfos>
//               <h3>{title}</h3>
//               <span>{author}</span>
//               <div>
//                 <span>{topic}</span>
//                 {" | "}
//                 <span>{publishedAt.split(" ")[0]}</span>
//               </div>
//             </NoticiaInfos>
//           </Noticia>
//         </NoticiasContainer>
//       ))}

//       <NoticiasContainer>
//         <Noticia>
//           <img src="../../img/866-536x354.jpg" alt="Imagem da notícia" />
//           <NoticiaInfos>
//             <h3>Titulo teste</h3>
//             <span>autor</span>
//             <div>
//               <span>tech</span>
//               {" | "}
//               <span>"16/11/2022"</span>
//             </div>
//           </NoticiaInfos>
//         </Noticia>
//       </NoticiasContainer>
//     </main>
//   );
// };
// export default Home;

import {
  Noticia,
  NoticiaInfos,
  NoticiasContainer,
} from "../../components/noticia/noticia";

const Home = ({ noticias }) => {
  return (
    <main>
      {noticias.map(
        ({ titulo, imagens, author, tipo, data_publicacao }, id) => (
          <NoticiasContainer key={id}>
            <Noticia>
              <img
                src={`https://agenciadenoticias.ibge.gov.br/${
                  imagens.length > 0 ? JSON.parse(imagens).image_fulltext : ""
                }`}
                alt="Imagem da notícia"
              />
              <NoticiaInfos>
                <h3>{titulo}</h3>
                <span>{author}</span>
                <div>
                  <span>{tipo}</span>
                  {" | "}
                  <span>{data_publicacao.split(" ")[0]}</span>
                </div>
              </NoticiaInfos>
            </Noticia>
          </NoticiasContainer>
        ),
      )}
    </main>
  );
};
export default Home;
