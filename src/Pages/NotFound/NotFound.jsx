import { Link } from "react-router-dom";
import { NotFoundContainer } from "../../components/notFound/NotFoundContainer";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <h3>Página não encontrada</h3>
      <Link to={"/"}>Voltar ao feed</Link>
    </NotFoundContainer>
  );
};
export default NotFound;
