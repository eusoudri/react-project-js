import { NavBar, Logo, NavLinks, StyledLink } from "./style";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo-minor.png";

const Nav = () => {
  return (
    <NavBar>
      <Logo>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </Logo>
      <NavLinks>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/users">Sobre</StyledLink>
      </NavLinks>
    </NavBar>
  );
};

export default Nav;
