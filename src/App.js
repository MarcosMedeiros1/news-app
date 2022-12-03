import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./Pages/NotFound/NotFound";
import Feed from "./Pages/Feed/Feed";
import Noticia from "./Pages/Noticia/Noticia";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/noticia" element={<Noticia />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
