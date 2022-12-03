import { Link } from "react-router-dom";
import { Header, SearchBar } from "./Header";
import { FaSearch } from "react-icons/fa";
import { useContext } from "react";
import { NewsContext } from "../../context/NewsContext";

const HeaderContainer = ({ showSearch }) => {
  const { search, setSearch, handleSearch } = useContext(NewsContext);

  return (
    <Header>
      <Link to={"/"}>
        <img src={require("../../img/Logotipo_IF.svg.png")} alt="Logo IFNMG" />
      </Link>

      {showSearch ? (
        <SearchBar>
          <input
            placeholder="Pesquisar notícia"
            type="text"
            onBlur={(e) => setSearch(e.target.value)}
          />
          <button onClick={handleSearch}>
            <FaSearch />
          </button>
        </SearchBar>
      ) : (
        <></>
      )}
    </Header>
  );
};
export default HeaderContainer;
