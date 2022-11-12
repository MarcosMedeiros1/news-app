import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";

function App() {
  const [noticias, setNoticias] = useState([]);

  const key = "b52f2b64a6c148218837badeff20e403";

  useEffect(() => {
    const getNoticias = async () => {
      const { data } = await axios.get(
        `https://newsapi.org/v2/everything?q=Apple&from=2022-11-09&sortBy=popularity&apiKey=${key}`,
      );
      setNoticias(data.articles);
    };
    getNoticias();
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
