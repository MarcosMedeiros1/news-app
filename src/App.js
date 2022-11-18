import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";

function App() {
  const [noticias, setNoticias] = useState([]);

  const key = "bquys1UXvGN0xhHWMjjF6YpOuAM5kES1tTToEFC8LOM";
  // `https://api.newscatcherapi.com/v2/search`,
  // {
  //   params: {
  //     q: "brasil",
  //     countries: "BR",
  //     topic: "tech",
  //     sort_by: "relevancy",
  //     page: "1",
  //   },
  //   headers: {
  //     "x-api-key": key,
  //   },
  // },

  const setup = async () => {
    try {
      const { data } = await axios.get(
        "http://servicodados.ibge.gov.br/api/v3/noticias",
      );
      // console.log(data.items);
      console.log(JSON.parse(data.items[0].imagens).image_fulltext);
      setNoticias(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setup();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home noticias={noticias} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
