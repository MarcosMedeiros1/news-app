import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";

function App() {
  const [noticias, setNoticias] = useState([]);

  const setup = async () => {
    try {
      const { data } = await axios.get(
        "https://servicodados.ibge.gov.br/api/v3/noticias",
        {
          params: {
            qtd: 200,
          },
        },
      );
      setNoticias(data.items);
      console.log(data.items);
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
