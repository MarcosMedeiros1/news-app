import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Loading } from "../components/loading/Loading";
import { Toast } from "../components/toaster/Toast";

const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const [noticias, setNoticias] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#fff");
  const [color, setColor] = useState("#2c3e50");

  const callNewsApi = async () => {
    try {
      const { data } = await axios.get(
        "https://servicodados.ibge.gov.br/api/v3/noticias/",
        {
          params: {
            qtd: 200,
            introsize: 2500,
            tipo: "noticia",
            busca: search,
          },
        },
      );

      if (data.items.length <= 0) {
        Toast.fire({
          icon: "error",
          title: "Nenhum resultado para sua busca",
        });
        setIsLoading(false);
        return;
      }
      setNoticias(data.items);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callNewsApi();
    handleTheme();
  }, []);

  const handleSearch = () => {
    callNewsApi();
    setSearch("");
    setIsLoading(true);
  };

  const handleTheme = () => {
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
      setBackgroundColor("#fff");
      setColor("#180e19");
    } else {
      setBackgroundColor("#001122");
      setColor("#fff");
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <NewsContext.Provider
        value={{
          noticias,
          handleSearch,
          search,
          setSearch,
          handleTheme,
          backgroundColor,
          color,
        }}
      >
        {children}
      </NewsContext.Provider>
    </>
  );
};

export { NewsContext, NewsProvider };
