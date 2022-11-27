import { Link } from "react-router-dom";
import { Header } from "./Header";

const HeaderContainer = () => {
  return (
    <Header>
      <Link to={"/"}>
        <img src={require("../../img/Logotipo_IF.svg.png")} alt="Logo IFNMG" />
      </Link>
    </Header>
  );
};
export default HeaderContainer;
