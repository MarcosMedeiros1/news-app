import { Link } from "react-router-dom";
import { Header, LightSwitch, SearchBar } from "./Header";
import { FaSearch } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";
import { useContext } from "react";
import { NewsContext } from "../../context/NewsContext";

const HeaderContainer = ({ showSearch }) => {
  const { setSearch, handleSearch, handleTheme, headerBackground, color } =
    useContext(NewsContext);

  const changeTheme = (theme) => {
    localStorage.setItem("theme", theme);
    handleTheme();
  };

  return (
    <Header>
      <div>
        <Link to={"/"}>
          <img
            src={require("../../img/Logotipo_IF.svg.png")}
            alt="Logo IFNMG"
          />
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

        <LightSwitch>
          <button onClick={() => changeTheme("dark")}>
            <FiMoon />
          </button>

          <button onClick={() => changeTheme("light")}>
            <FiSun />
          </button>
        </LightSwitch>
      </div>
    </Header>
  );
};
export default HeaderContainer;
