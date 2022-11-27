import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./Pages/NotFound/NotFound";
import { Loading } from "./components/loading/Loading";
import Feed from "./Pages/Feed/Feed";
import Noticia from "./Pages/Noticia/Noticia";

function App() {
  const [noticias, setNoticias] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const setup = async () => {
    try {
      const { data } = await axios.get(
        "https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=noticia",
        {
          params: {
            qtd: 200,
            introsize: 2500,
          },
        },
      );
      setNoticias(data.items);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setup();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Feed noticias={noticias} />} />
        <Route path="/noticia" element={<Noticia />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
