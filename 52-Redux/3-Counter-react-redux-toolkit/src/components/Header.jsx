import { FaAngellist } from "react-icons/fa";
import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";
const Header = () => {
  return (
    <div className="heading-container">
      <FaAngellist className="heading-symbols" />
      <h1 className="display-5 fw-bold text-body-emphasis">Counter</h1>
      <FaAmericanSignLanguageInterpreting className="heading-symbols" />
    </div>
  );
};
export default Header;
