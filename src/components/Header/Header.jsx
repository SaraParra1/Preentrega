import { Link } from "react-router-dom";
import logo from "../../assets/react.svg";
import { Nav } from "../Nav/Nav";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="div-logo">
        <Link to="/">
          <span>Dulce Puntada</span>
        </Link>
      </div>
      <Nav />
    </header>
  );
};