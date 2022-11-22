import { Header } from "./Header";

const HeaderContainer = () => {
  return (
    <Header>
      <img src={require("../../img/Logotipo_IF.svg.png")} alt="Logo IFNMG" />
      Otoni<br/>News
    </Header>
  );
};
export default HeaderContainer;
