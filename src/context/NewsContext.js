import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Loading } from "../components/loading/Loading";

const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const [noticias, setNoticias] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  const callNewsApi = async () => {
    try {
      const { data } = await axios.get(
        "https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=noticia",
        {
          params: {
            qtd: 200,
            introsize: 2500,
            busca: search,
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
    callNewsApi();
  }, []);

  const handleSearch = () => {
    callNewsApi();
    setSearch("");
    setIsLoading(true);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <NewsContext.Provider
        value={{ noticias, handleSearch, search, setSearch }}
      >
        {children}
      </NewsContext.Provider>
    </>
  );
};

export { NewsContext, NewsProvider };
